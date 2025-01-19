from flask import Flask, request, jsonify
import json
import os

app = Flask(__name__)

@app.route('/', methods=['GET'])
def hello():
    return "Hello World!"

@app.route('/read-data', methods=['GET'])
def read_json_file():
    file_path = 'a.json'
    
    try:
        # Open and read the JSON file
        with open(file_path, 'r') as json_file:
            data = json.load(json_file)
        return jsonify({
            "status": "success",
            "data": data
        })
    except Exception as e:
        return jsonify({
            "status": "error",
            "message": str(e)
        })
    
@app.route('/save-data', methods=['POST'])
def save_data():
    try:
        # Get JSON data from the request
        data = request.get_json()

        # Define the file path
        file_path = 'data.json'

        # Delete the file if it exists
        if os.path.exists(file_path):
            os.remove(file_path)

        # Open the JSON file and write the data
        with open(file_path, 'w') as file:
            json.dump(data, file)

        return jsonify({"message": "Data saved successfully!"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)