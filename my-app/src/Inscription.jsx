import React, { useState } from 'react';

export default function Inscription() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [genre, setGenre] = useState('');
  const [filiere, setFiliere] = useState('');
  const [langages, setLangages] = useState([]);
  const [presentation, setPresentation] = useState('');
  const [envoye, setEnvoye] = useState(false);

  // 1. Gestion des cases à cocher (sélection multiple)
  const handleLangageChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setLangages([...langages, value]);
    } else {
      setLangages(langages.filter((lang) => lang !== value));
    }
  };

  // 2. Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    setEnvoye(true);
  };

  // 3. Gestion de la réinitialisation
  const handleReset = () => {
    setNom('');
    setPrenom('');
    setEmail('');
    setGenre('');
    setFiliere('');
    setLangages([]);
    setPresentation('');
    setEnvoye(false);
  };

  return (
    <div className="container" style={{ margin: '20px', fontFamily: 'Arial' }}>
      <h2>Formulaire d'inscription</h2>

      {!envoye ? (
        <form onSubmit={handleSubmit}>
          {/* Champs texte */}
          <div>
            <label>Nom : </label>
            <input
              type="text"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              required
            />
          </div>
          <br />
          <div>
            <label>Prénom : </label>
            <input
              type="text"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              required
            />
          </div>
          <br />
          <div>
            <label>Email : </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <br />

          {/* Boutons radio (Genre) */}
          <div>
            <label>Sexe : </label>
            <label>
              <input
                type="radio"
                name="genre"
                value="Masculin"
                checked={genre === 'Masculin'}
                onChange={(e) => setGenre(e.target.value)}
              />{' '}
              Masculin
            </label>
            <label style={{ marginLeft: '10px' }}>
              <input
                type="radio"
                name="genre"
                value="Féminin"
                checked={genre === 'Féminin'}
                onChange={(e) => setGenre(e.target.value)}
              />{' '}
              Féminin
            </label>
          </div>
          <br />

          {/* Liste déroulante (Filière) */}
          <div>
            <label>Filière : </label>
            <select
              value={filiere}
              onChange={(e) => setFiliere(e.target.value)}
              required
            >
              <option value="">-- Choisir une filière --</option>
              <option value="Développement Web">Développement Web</option>
              <option value="Réseaux">Réseaux</option>
              <option value="Data/IA">Data/IA</option>
              <option value="Autre">Autre</option>
            </select>
          </div>
          <br />

          {/* Cases à cocher (Langages) */}
          <div>
            <label>Langages maîtrisés : </label>
            <br />
            {['HTML/CSS', 'JavaScript', 'PHP', 'Python'].map((lang) => (
              <label key={lang} style={{ marginRight: '10px' }}>
                <input
                  type="checkbox"
                  value={lang}
                  checked={langages.includes(lang)}
                  onChange={handleLangageChange}
                />{' '}
                {lang}
              </label>
            ))}
          </div>
          <br />

          {/* Zone de texte (Présentation) */}
          <div>
            <label>Présentation : </label>
            <br />
            <textarea
              value={presentation}
              onChange={(e) => setPresentation(e.target.value)}
              rows="4"
              cols="40"
            />
          </div>
          <br />

          {/* Boutons d'action */}
          <button type="submit">Valider</button>
          <button type="button" onClick={handleReset} style={{ marginLeft: '10px' }}>
            Réinitialiser
          </button>
        </form>
      ) : (
        /* Récapitulatif après soumission */
        <div style={{ background: '#f9f9f9', padding: '15px', border: '1px solid #ccc' }}>
          <h3>Récapitulatif des informations</h3>
          <p><strong>Nom :</strong> {nom}</p>
          <p><strong>Prénom :</strong> {prenom}</p>
          <p><strong>Email :</strong> {email}</p>
          <p><strong>Sexe :</strong> {genre}</p>
          <p><strong>Filière :</strong> {filiere}</p>
          <p>
            <strong>Langages :</strong>{' '}
            {langages.length > 0 ? langages.join(', ') : 'Aucun'}
          </p>
          <p><strong>Présentation :</strong> {presentation || 'Aucune'}</p>
          
          <button onClick={handleReset}>Retour au formulaire</button>
        </div>
      )}
    </div>
  );
}