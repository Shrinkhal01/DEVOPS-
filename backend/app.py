from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/submit', methods=['POST'])
def handle_form():
    data = request.form
    print('Received data:', data)
    return jsonify({"message": "Form data received", "data": data}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)