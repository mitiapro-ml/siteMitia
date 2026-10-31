export default function Hero({ profile }) {
  return (
    <header className="hero">
      <div>
        <p className="role">{profile.role}</p>
        <h1>{profile.headline}</h1>
        <p className="pitch">{profile.pitch}</p>
        <div className="btns">
          <a className="btn main" href="#projets">Voir mes projets</a>
          <a className="btn" href="#contact">Me contacter</a>
        </div>
      </div>
      <figure className="plot">
        <svg viewBox="0 0 400 220" role="img" aria-label="Courbes de perte d’entraînement et de validation qui diminuent puis se stabilisent">
          <line className="axis" x1="30" y1="190" x2="385" y2="190" />
          <line className="axis" x1="30" y1="15" x2="30" y2="190" />
          <path className="curve" pathLength="1" stroke="var(--accent)" d="M30 30 C70 120 110 150 170 162 S300 172 385 175" />
          <path className="curve v" pathLength="1" stroke="var(--accent2)" d="M30 42 C70 128 115 156 175 168 S300 180 385 184" />
          <text x="38" y="208" fontSize="11" fill="var(--muted)">époques</text>
          <text x="300" y="148" fontSize="11" fill="var(--accent)">entraînement</text>
          <text x="300" y="206" fontSize="11" fill="var(--accent2)">validation</text>
        </svg>
        <figcaption>La perte baisse, puis se stabilise. C’est le moment de déployer.</figcaption>
      </figure>
    </header>
  );
}
