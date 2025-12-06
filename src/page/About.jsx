import "../styles/About.css";

export default function About() {
  return (
    <div className="about-page">
      <h1>Ibikubiye muri Sisitemu yacu</h1>

      <section className="mission">
        <h2>Mission</h2>
        <p>
          Guhuza abaturage n’ubuyobozi mu buryo bwihuse kandi buboneye.
        </p>
      </section>

      <section className="vision">
        <h2>Vision</h2>
        <p>
          Kuba sisitemu y’icyitegererezo mu gucunga ibibazo by’abaturage.
        </p>
      </section>

      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Kworohera abaturage gutanga ibibazo</li>
          <li>Dashboard y’umukoresha kureba ibisubizo</li>
          <li>Admin dashboard yo gusubiza no gucunga ibibazo</li>
          <li>Responsive ku devices zose</li>
          <li>LocalStorage backend</li>
        </ul>
      </section>

      <section className="how-it-works">
        <h2>Uko Bikora</h2>
        <ol>
          <li>Umukoresha atanga ikibazo</li>
          <li>Admin asubiza ikibazo</li>
          <li>Status igaragazwa ku mukoresha</li>
        </ol>
      </section>
    </div>
  );
}
