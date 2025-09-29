from flask import Flask, request, jsonify
from audio_processing import extract_audio
from asr_model import transcribe_audio

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload_video():
    file = request.files['video']
    file.save("uploaded_video.mp4")
    audio_path = extract_audio("uploaded_video.mp4")
    captions = transcribe_audio(audio_path)
    return jsonify({"captions": captions})

if __name__ == '__main__':
    app.run(debug=True)
