export default function Contact({ contact }) {
  return (
    <section id="contact">
      <h2>Ailleurs</h2>
      <p>{contact.text}</p>
      <ul className="plain">
        {contact.email && <li>E-mail : <a href={`mailto:${contact.email}`}>{contact.email}</a></li>}
        {contact.linkedin && <li>LinkedIn : <a href={contact.linkedin} target="_blank" rel="noreferrer">profil</a></li>}
        {contact.github && <li>GitHub : <a href={contact.github} target="_blank" rel="noreferrer">dépôts</a></li>}
      </ul>
    </section>
  );
}
