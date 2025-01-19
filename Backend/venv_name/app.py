from flask import Flask, render_template, request, jsonify
import json
import os
import google.generativeai as genai
from model import chat_with_model

# Configure the API key for the generative AI
api_key = "AIzaSyDyCzcckZYWfIV-pMjS-0uI6GaZD-EhXcg"
genai.configure(api_key=api_key)

# Define the generation configuration
generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 40,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
}

# Create the generative model
model = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    generation_config=generation_config,
    system_instruction=(
        "You are a Solidity smart contract generator. When the user provides a prompt, generate a JSON output with two keys: "
        "'smart_contract_code' containing the Solidity contract and 'explanation' with a block-by-block explanation suitable for a beginner. "
        "Ensure the JSON is properly formatted without extra text outside the JSON object. You also have to remember the previous prompts so "
        "that the user can add features if they want to into the contract."
    ),
)

app = Flask(__name__)

# Route for the home page
@app.route("/")
def home():
    return render_template("index.html")

# API endpoint to handle user prompts
@app.route("/generate", methods=["POST"])
def generate():
    try:
        # Get user prompt from the request
        user_input = request.json.get("prompt", "").strip()

        # Generate smart contract and explanation
        chat_session = model.start_chat(history=[])
        response = chat_session.send_message(
            f"Generate a JSON object with 'smart_contract_code' and 'explanation' based on this prompt: '{user_input}'"
        )
        full_response = response.text

        # Parse the response as JSON
        json_start = full_response.find("{")
        json_end = full_response.rfind("}") + 1
        json_content = full_response[json_start:json_end]
        final_output = json.loads(json_content)

        # Save output to a file
        file_path = os.path.join(os.getcwd(), 'send.json')
        with open(file_path, "w") as file:
            json.dump(final_output, file, indent=4)

        return jsonify(final_output)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/save_input', methods=['POST', 'GET'])
def save_input():
    if request.method == 'GET':
        render_template('home.html')
    else:
        try:
            # Get the form data
            name = request.json.get('name')  # React sends JSON payload
            if not name:
                return jsonify({"error": "Name is required!"}), 400
            
            # Define the file path
            file_path = os.path.join(os.getcwd(), 'input.json')
            
            # Delete the file if it exists
            if os.path.exists(file_path):
                os.remove(file_path)
            
            # Save the input data to a JSON file
            with open(file_path, 'w') as file:
                json.dump({"name": name}, file, indent=4)
            
            return jsonify({"message": f"Hello, {name}! Your data has been saved successfully."}), 200
        except Exception as e:
            return jsonify({"error": f"An error occurred: {str(e)}"}), 500


@app.route('/send_to_api', methods=['GET'])
async def send_to_api():
    try:
        # Load input.json data
        file_path = os.path.join(os.getcwd(), 'input.json')
        if not os.path.exists(file_path):
            return jsonify({"error": "input.json not found"}), 404
        
        with open(file_path, 'r') as file:
            data = json.load(file)
        
        # Start the chat interaction
        chat_result = await chat_with_model()  # Call the async model interaction function
        return jsonify({"data": data, "chat_result": chat_result}), 200
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
