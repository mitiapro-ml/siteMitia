export default function Skills({ skills, languages }) {
  return (
    <section id="competences">
      <h2>Compétences</h2>
      <dl className="rows">
        {skills.map((g) => (
          <div key={g.title}>
            <dt>{g.title}</dt>
            <dd className="chips">{g.items.map((i) => <span key={i}>{i}</span>)}</dd>
          </div>
        ))}
        <div><dt>Langues</dt><dd>{languages}</dd></div>
      </dl>
    </section>
  );
}
