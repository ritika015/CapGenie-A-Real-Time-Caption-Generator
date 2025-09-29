

# 📌 Real-Time Caption Generator (CapGenie)

## 📖 Overview

The **Real-Time Caption Generator (CapGenie)** is an innovative system designed to **instantly generate captions from video or audio content with minimal latency**. By leveraging **Whisper ASR** and modern web technologies, it ensures **highly accurate, real-time speech-to-text conversion**.

This project aims to break down accessibility barriers by enabling **inclusive communication** for individuals with hearing impairments, while also serving educators, broadcasters, and content creators.

---

## ✨ Key Features

* 🎙️ **Real-Time Transcription** – Converts spoken content into text captions instantly.
* 🎨 **Customizable Captions** – Users can change font, color, size, and background for better readability.
* ⚡ **Low Latency Performance** – Optimized pipeline for smooth, real-time transcription.
* 🌍 **Multilingual Support (Planned)** – Future expansion for global accessibility.
* 📱 **Responsive React UI** – Intuitive, user-friendly design for seamless cross-platform use.
* 🔒 **Secure & Reliable** – Ensures safe file handling, scalability, and stable performance under load.

---

## 🛠️ Tech Stack

**Frontend (UI/UX):**

* React.js
* TailwindCSS (styling & accessibility)

**Backend:**

* Flask + Flask-SocketIO (real-time communication)
* Python

**Speech-to-Text Processing:**

* OpenAI Whisper ASR model
* ffmpeg (audio extraction)

**Testing & Validation:**

* Unit Testing (PyTest)
* Integration Testing
* User Acceptance Testing (UAT)

---

## 📂 Project Structure

```plaintext
CapGenie/
│
├── frontend/              # React-based UI
│   ├── components/        # Reusable UI elements
│   ├── pages/             # Main pages (upload, live stream, etc.)
│   └── styles/            # Tailwind & custom styles
│
├── backend/               # Flask server
│   ├── app.py             # Core backend logic
│   ├── socketio_server.py # Real-time server integration
│   ├── utils/             # Audio processing, ASR helpers
│   └── models/            # Whisper ASR setup
│
├── docs/                  # Documentation (Reports, Papers, Diagrams)
│
├── tests/                 # Unit & integration tests
│
├── requirements.txt       # Python dependencies
├── package.json           # React dependencies
├── README.md              # Project Documentation
└── LICENSE                # License information
```

---

## ⚙️ Installation & Setup

### Prerequisites

* **Python 3.8+**
* **Node.js & npm**
* **ffmpeg** installed locally

### Backend Setup

```bash
# Clone repository
git clone https://github.com/username/CapGenie.git
cd CapGenie/backend

# Create virtual environment
python -m venv venv
source venv/bin/activate   # Mac/Linux
venv\Scripts\activate      # Windows

# Install dependencies
pip install -r requirements.txt

# Run backend server
python app.py
```

### Frontend Setup

```bash
cd ../frontend

# Install dependencies
npm install

# Start development server
npm start
```

The backend will run on `http://localhost:5000` and the frontend on `http://localhost:3000`.

---

## 🔄 Workflow

1. **Upload / Stream Video** – User uploads video/audio or streams live.
2. **Audio Processing** – Audio is extracted and pre-processed (mono, 16kHz).
3. **ASR Processing** – Whisper model transcribes speech into text in real-time.
4. **Caption Rendering** – Captions displayed instantly via React interface.
5. **Customization** – Users can modify caption appearance to suit accessibility needs.

---

## 📊 Use Cases

* **Accessibility** – Equal access to media for people with hearing impairments.
* **Education** – Real-time captions for online courses, lectures, and student engagement.
* **Broadcasting** – Captions for live events, webinars, and conferences.
* **Content Creation** – Auto-captioning for YouTube, podcasts, and video tutorials.
* **Multilingual Communication (Future)** – Real-time captions across multiple languages.

---

## 🧪 Testing Strategy

* **Unit Tests** – Validate backend modules (audio extraction, ASR pipeline).
* **Integration Tests** – Ensure seamless interaction between backend and frontend.
* **User Testing** – Collect feedback from educators, hearing-impaired users, and content creators.
* **Performance Benchmarking** – Measure latency, accuracy, and scalability under load.

---

## 🚀 Future Enhancements

* 🌍 **Multilingual Support** – Real-time translation & captioning in multiple languages.
* 📱 **Mobile App** – Android/iOS application for on-the-go captioning.
* 🤖 **AI-Driven Error Correction** – Automatic correction of transcription errors.
* 🎥 **Streaming Integration** – Native support for Zoom, YouTube Live, Twitch.
* 📝 **Automatic Editing Tools** – Post-transcription caption formatting & corrections.

---

## 📅 Project Timeline (Plan of Work)

| Phase                 | Duration   | Tasks                              |
| --------------------- | ---------- | ---------------------------------- |
| Topic Finalization    | July       | Confirm project scope & objectives |
| Literature Review     | July – Aug | Paper review, data collection      |
| Design & Calculations | Aug        | UI mockups, system design          |
| Development           | Sept – Oct | Backend + Frontend implementation  |
| Testing               | Nov        | Unit, integration, UAT             |
| Documentation         | Dec        | Report writing, project demo       |

---

## 📚 References

* IEEE & ACM research papers on ASR, latency reduction, and captioning.
* Whisper ASR model (OpenAI).
* Jurafsky, D., & Martin, J. H. *Speech and Language Processing* (Pearson, 2021).
* Additional references available in full report documentation.

---

## 🏆 Expected Outcomes

* **Accurate, low-latency captions** for pre-recorded and live content.
* **Accessibility boost** for individuals with hearing impairments.
* **Improved educational engagement** through captioned lectures.
* **Broadened global reach** with future multilingual capabilities.

---

## 📜 License

This project is released under the **MIT License**, allowing free use, modification, and distribution with attribution.


---

## 💡 Acknowledgments

This project is inspired by the mission of making **digital content accessible to all**, fostering inclusivity, and supporting diverse learners, creators, and communities.

---

✨ **CapGenie – Breaking Barriers, Building Connections.**

