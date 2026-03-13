
🗳 Citizen Complaints & Engagement System

A modern digital platform that empowers citizens to submit complaints, track their status,
 and engage directly with service providers in a transparent and efficient way.

📸ScreenShoot(Demo)
<img width="1351" height="628" alt="c1" src="https://github.com/user-attachments/assets/6d6c7333-75df-4670-8fb9-46da2172ae1d" />
<img width="1345" height="629" alt="c2" src="https://github.com/user-attachments/assets/6fd4cfde-e8d1-4e03-875a-0d8410be384e" />
<img width="1344" height="497" alt="c4" src="https://github.com/user-attachments/assets/499e58d1-eaa4-488e-81e9-0f927f7cb3a6" />
<img width="1351" height="630" alt="c5" src="https://github.com/user-attachments/assets/7ab52f40-b26d-4646-80e7-700ee7bf6620" />
📝 Overview

The Citizen Complaints & Engagement System is a React-based application that 
allows citizens to submit issues, suggestions, and feedback quickly and conveniently. The system ensures transparency by storing and displaying complaints, enabling service providers or local authorities to track and respond to them.

This version uses LocalStorage as a temporary data layer, making it perfect for 
prototypes, MVPs, and offline-friendly applications.


---

✨ Key Features

📝 Submit Complaints (with name, email, phone, category & message)

📂 LocalStorage Data Storage

🃏 Stylish Complaint Cards

🎨 Modern UI with Clean CSS Styling

🔤 Animated Text Banner / Hero Section

🧭 Fully Responsive Navbar & Footer

📱 Mobile-Friendly & Responsive Layout

❌ Delete Complaint Function

🕒 Auto-saved complaint timestamps



---

🛠 Tech Stack

Technology	Purpose

⚛ React.js	UI framework
🎨 CSS	Styling
🚏 React Router	Page navigation
🗄 LocalStorage	Client-side persistence
🧩 React Icons	Icon support



---

📁 Project Structure

/src
 ├── components/
 │    ├── Navbar.jsx
 │    ├── Footer.jsx
 │    ├── ComplaintCard.jsx
 │    ├── ComplaintForm.jsx
 │    └── TextAnimation.jsx
 │
 ├── pages/
 │    ├── Home.jsx
 │    ├── Submit.jsx
 │    └── Complaints.jsx
 │
 ├── utils/
 │    └── localStorage.js
 │
 ├── App.jsx
 └── index.css


---

🚀 Installation & Setup

Clone the repository:

git clone https://github.com/your-username/citizen-complaints.git

Navigate into the project directory:

cd citizen-complaints

Install dependencies:

npm install

Run the development server:

npm start

The app will open at:
http://localhost:3000


---

🧩 LocalStorage Workflow

Each complaint is saved in the browser as an object:

{
  "id": "unique-id",
  "name": "Citizen Name",
  "email": "example@mail.com",
  "phone": "078xxx",
  "message": "Describe your issue",
  "createdAt": "2025-01-01T12:00:00"
}

Stored under the key:

complaints

The system automatically:

Loads complaints on refresh

Saves new entries

Deletes selected complaints



---

📄 License

This project is released under the MIT License.
Feel free to use, modify, and distribute.


---

👩‍💻 Author

Umugwaneza Aline
Frontend Developer • UI/UX Designer • Tech Enthusiast


---

❤ Contributions

Contributions, suggestions, and improvements are always welcome!
Submit an issue or open a pull request at any time.
