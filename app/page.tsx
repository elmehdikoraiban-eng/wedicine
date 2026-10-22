const TOPICS = [
  "Fièvre", "Rhume et toux", "Mal de gorge", "Maux de tête", "Tension artérielle", "Diabète",
  "Brûlures d'estomac", "Fatigue", "Mal au dos", "Sommeil", "Allergie", "Bilan de santé",
];

const FAQ = [
  ["Est-ce que Wedicine remplace mon médecin ?", "Non. Les réponses sont informatives et servent à préparer votre consultation. Seul un médecin peut vous examiner, poser un diagnostic et prescrire un traitement."],
  ["Qu'advient-il de ma question ?", "Avec votre accord explicite, votre question et votre ville sont partagées avec un médecin proche de chez vous pour qu'il prépare votre rendez-vous. Sans votre accord, rien n'est envoyé."],
  ["Mes données sont-elles protégées ?", "Les données de santé sont des données sensibles. Elles sont traitées conformément à la loi 09-08 et vous pouvez retirer votre consentement ou demander leur suppression à tout moment."],
  ["Et en cas d'urgence ?", "N'utilisez pas Wedicine. Appelez immédiatement le 15 (SAMU) ou le 141."],
  ["Combien ça coûte ?", "Poser une question est gratuit. Le prix de la consultation est fixé par le médecin et affiché sur son profil."],
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <h1>Une question santé avant votre rendez-vous&nbsp;?</h1>
        <p>
          Posez-la ici. Vous recevez une explication claire, les bonnes questions à poser à votre médecin,
          et un médecin proche de chez vous, noté par ses patients.
        </p>
        <a href="/question" className="btn">Poser ma question</a>
        <div className="badges">
          <span className="badge">Gratuit</span>
          <span className="badge">2 minutes</span>
          <span className="badge">Médecins près de chez vous</span>
        </div>
      </section>

      <section>
        <h2>Sujets fréquents</h2>
        <div className="chip-row">
          {TOPICS.map((t) => (
            <a key={t} className="chip" href={`/question?sujet=${encodeURIComponent(t)}`}>{t}</a>
          ))}
        </div>
      </section>

      <section id="comment">
        <h2>Comment ça marche</h2>
        <div className="grid">
          {[
            ["Posez votre question", "Décrivez ce qui vous préoccupe, avec vos mots."],
            ["Recevez une information claire", "Une explication simple et une liste de questions à poser à votre médecin."],
            ["Rencontrez un médecin proche", "Son profil, ses tarifs et les avis de ses anciens patients, à côté de votre réponse."],
          ].map(([t, d], i) => (
            <div className="card" key={t}>
              <div className="step-num">{i + 1}</div>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="notice notice-warn">
          <strong>Information, pas diagnostic.</strong> Les réponses de Wedicine sont informatives et ne
          remplacent jamais une consultation médicale.
        </div>
      </section>

      <section id="faq">
        <h2>Questions fréquentes</h2>
        {FAQ.map(([q, a]) => (
          <details key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </section>

      <section className="hero">
        <h2>Arrivez préparé à votre consultation.</h2>
        <a href="/question" className="btn">Commencer</a>
      </section>
    </main>
  );
}
