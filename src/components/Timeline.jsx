export default function Timeline({ id, title, items }) {
  return (
    <section id={id}>
      <h2>{title}</h2>
      <ul className="tl">
        {items.map((it) => (
          <li key={it.title + it.period}>
            <time>{it.period}</time>
            <div>
              <h3>{it.title}, {it.org}</h3>
              {it.points.length > 0 && <ul>{it.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>}
              {it.stack && <p className="meta">{it.stack}</p>}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
