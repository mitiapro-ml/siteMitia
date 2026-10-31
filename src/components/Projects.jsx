export default function Projects({ projects }) {
  return (
    <section id="projets">
      <h2>Projets</h2>
      <ul className="posts">
        {projects.map((p) => (
          <li key={p.title}>
            <h3>{p.title}</h3>
            <p className="meta">{p.type}</p>
            <p className="chips">{p.stack.map((t) => <span key={t}>{t}</span>)}</p>
            <details>
              <summary>Lire l’étude de cas</summary>
              <dl className="case">
                <dt>Problème</dt><dd>{p.problem}</dd>
                <dt>Démarche</dt><dd>{p.approach}</dd>
                {p.result && (<><dt>Résultat</dt><dd><b>{p.result.value}</b> : {p.result.label}</dd></>)}
                {p.limit && (<><dt>Limites</dt><dd>{p.limit}</dd></>)}
              </dl>
            </details>
            {(p.demo || p.link) && (
              <p className="links">
                {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Démo</a>}
                {p.link && <a href={p.link} target="_blank" rel="noreferrer">Code</a>}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
