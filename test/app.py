from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

JSON_SERVER_URL = 'http://127.0.0.1:3000/users'

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()

    if not data.get('username') or not data.get('email') or not data.get('password'):
        return jsonify({"error": "Missing fields"}), 400

    # Forward data to JSON Server
    try:
        response = requests.post(JSON_SERVER_URL, json=data)
        if response.status_code == 201:
            return jsonify({"message": "User created successfully"}), 201
        else:
            return jsonify({"error": "Failed to save data"}), 500
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
