import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import "../styles/Landing.css";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
      <Navbar />

      {/* Background Animation */}
      <div className="background-animation">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>

      {/* HERO SECTION */}
      <header className="hero">
        <h1 className="hero-title">Citizen Complaint System</h1>
        <p className="hero-sub">
          Report issues easily. Improve your community. Stay updated.
        </p>

        <div className="hero-buttons">
          <Link to="/Admin" className="btn-primary">Submit Complaint</Link>
          <Link to="/complaint" className="btn-secondary">View Complaints</Link>
        </div>
      </header>

      {/* FEATURES */}
      <section className="section">
        <h2 className="section-title">How It Works</h2>

        <div className="cards-grid">
          <Card title="Quick Report" icon="⚡" text="Submit complaints in seconds" />
          <Card title="Track Status" icon="📊" text="Monitor complaint progress" />
          <Card title="Smart Alerts" icon="🔔" text="Get notified instantly" />
          <Card title="Secure Data" icon="🔒" text="All data is securely stored" />
          <Card title="Geo Tracking" icon="📍" text="Pin exact issue locations" />
          <Card title="Community Impact" icon="🤝" text="Help improve your city" />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="section about">
        <div className="about-text">
          <h2>About this Platform</h2>
          <p>
            This system helps citizens report public issues such as broken roads,
            uncollected waste, street lights, water problems, and more.  
            Our goal is to improve communication between citizens and service providers.
          </p>
        </div>

        <div className="about-img"></div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <h2 className="section-title">Services We Provide</h2>
        <div className="cards-grid">
          <Card title="Road Issues" icon="🛣" text="Report potholes & damaged roads" />
          <Card title="Waste Management" icon="🗑" text="Report uncollected waste" />
          <Card title="Water Issues" icon="🚰" text="Report water leakage or shortage" />
          <Card title="Electricity" icon="💡" text="Fix broken street lights" />
        </div>
      </section>

      {/* LATEST NEWS */}
      <section className="section news">
        <h2 className="section-title">Latest News</h2>

        <div className="news-cards">
          <div className="news-card">
            <h3>Waste Collection Update</h3>
            <p>New trucks deployed in several neighborhoods.</p>
          </div>
          <div className="news-card">
            <h3>Road Repair Notice</h3>
            <p>Kigali-Gasabo sector will undergo repairs this week.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact">
        <h2>Contact Us</h2>
        <p>Email: support@citizencomplaints.rw</p>
        <p>Phone: +250 788 123 456</p>
      </section>

      <Footer />
    </>
  );
}