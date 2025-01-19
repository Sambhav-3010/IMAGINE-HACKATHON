import json
import os
import google.generativeai as genai
import asyncio  # Import asyncio to use asyncio.run

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
        "Ensure the JSON is properly formatted without extra text outside the JSON object. You also have to remember the previous promts such that the user can add features if they want to into the contract."
    ),
)

# Function to generate smart contract and explanation
def generate_smart_contract_and_explanation(prompt):
    chat_session = model.start_chat(history=[])
    response = chat_session.send_message(
        f"Generate a JSON object with 'smart_contract_code' and 'explanation' based on this prompt: '{prompt}'"
    )
    return response.text

# Main interactive function
async def chat_with_model():
    print("Model: Hello! What smart contract would you like me to generate?")
    user_input = input("You: ").strip()

    while True:
        try:
            # Generate smart contract and explanation as a JSON-formatted string
            full_response = generate_smart_contract_and_explanation(user_input)
            print(f"Raw Model Response for Debugging: {full_response}")

            # Parse the response as JSON
            try:
                # Ensure only valid JSON content is passed
                json_start = full_response.find("{")
                json_end = full_response.rfind("}") + 1
                json_content = full_response[json_start:json_end]
                final_output = json.loads(json_content)
                print(json.dumps(final_output, indent=4))
            except json.JSONDecodeError as e:
                print("Model: Failed to parse the response as JSON. Please try again.")
                print(f"Error: {e}")
                continue

            # Save output to a file
            file_path = os.path.join(os.getcwd(), 'send.json')
            if os.path.exists(file_path):
              os.remove(file_path)
            with open(file_path, "w") as file:
                json.dump(final_output, file, indent=4)
            print("Model: The final output has been saved to 'send.json'.")
            user_input = input("Model: Do you need another smart contract? (yes/no): ").strip().lower()
            if user_input == "no":
                print("Model: Chat ended. Goodbye!")
                break
            elif user_input in ["exit", "quit"]:
                break
            else:
                user_input = input("You: ").strip()
        except Exception as e:
            print(f"Model: An error occurred while generating the response: {e}")
            break

# For testing, uncomment the following line to run the main function
# asyncio.run(chat_with_model())
