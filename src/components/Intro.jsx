export default function Intro({ profile }) {
  const initials = profile.name.split(" ").map((w) => w[0]).slice(0, 2).join("");
  return (
    <section className="intro">
      <h1>{profile.name}</h1>
      <p className="role">{profile.role}</p>
      <div className="who">
        {profile.photo
          ? <img src={profile.photo} alt={`Portrait de ${profile.name}`} width="132" height="132" />
          : <div className="avatar" aria-hidden="true">{initials}</div>}
        <div>{profile.intro.map((t) => <p key={t}>{t}</p>)}</div>
      </div>
      <h2 id="start">Par où commencer</h2>
      <ul className="plain">
        {profile.start.map((s) => (
          <li key={s.label}><a href={s.href}>{s.label}</a> <span className="muted">· {s.note}</span></li>
        ))}
      </ul>
    </section>
  );
}
