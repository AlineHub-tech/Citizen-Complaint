
🗳 Citizen Complaints & Engagement System

A modern digital platform that empowers citizens to submit complaints, track their status,
 and engage directly with service providers in a transparent and efficient way.

📸ScreenShoot(Demo)


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
