import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Citizen Complaints System</p>
      <p>Email: info@citizenhelp.rw | Tel: +250 796 023 452</p>
    </footer>
  );
}