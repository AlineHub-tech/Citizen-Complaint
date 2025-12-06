import "../styles/home.css";
import { Link } from "react-router-dom";
import { FaUsers, FaComments, FaCheckCircle } from "react-icons/fa";

export default function Home() {
  return (
    <div className="landing">
      <h1>Citizen Complaints Platform</h1>
      <p>
        Sisitemu ifasha abaturage gutanga ibibazo, ubuyobozi bugatanga ibisubizo
        mu buryo bwihuse kandi buboneye.
      </p>

      <div className="cards">

        <div className="card">
          <FaUsers className="icon" />
          <h3>Abaturage</h3>
          <p>Ohereza ikibazo cyawe mu buryo bworoshye kandi bwihuse.</p>
        </div>

        <div className="card">
          <FaComments className="icon" />
          <h3>Gutanga Ibisubizo</h3>
          <p>Ubuyobozi bubasha kubona ibibazo byose no kubisubiza.</p>
        </div>

        <div className="card">
          <FaCheckCircle className="icon" />
          <h3>Gukurikirana</h3>
          <p>Reba aho ikibazo cyawe kigeze n'igisubizo cyahawe.</p>
        </div>

      </div>

      <Link to="/complaint" className="btn">
        Tanga Ikibazo
      </Link>
    </div>
  );
}
