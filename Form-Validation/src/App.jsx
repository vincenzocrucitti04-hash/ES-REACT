import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    age: "",
    country: "",
    gender: "",
    newsletter: false,
    interests: [],
  });

  const [errors, setErrors] = useState({});

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Rimuovi l'errore se l'utente inizia a digitare
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Username
    if (!formData.username.trim()) {
      newErrors.username = "Username obbligatorio";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username deve essere almeno 3 caratteri";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email obbligatoria";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Email non valida";
    }

    // Età
    if (!formData.age.trim()) {
      newErrors.age = "Età obbligatoria";
    } else if (isNaN(formData.age) || Number(formData.age) <= 0) {
      newErrors.age = "Inserisci un'età valida";
    }

    // Country
    if (!formData.country.trim()) {
      newErrors.country = "Seleziona un paese";
    }

    // Gender
    if (!formData.gender.trim()) {
      newErrors.gender = "Seleziona un genere";
    }

    // Interests
    if (formData.interests.length === 0) {
      newErrors.interests = "Seleziona almeno un interesse";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // true se nessun errore
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form valido! Registrazione completata.");
      console.log("Dati:", formData);
    } else {
      alert("Form non valido!");
    }
  };

  const handleInterestChange = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest) // rimuovi se già presente
        : [...prev.interests, interest], // aggiungi se non presente
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* Input username */}
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={formData.username}
            onChange={(e) => updateField("username", e.target.value)}
          />
          {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
        </div>

        {/* Input email */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        {/* Input age */}
        <div>
          <label>Età:</label>
          <input
            type="text"
            value={formData.age}
            onChange={(e) => updateField("age", e.target.value)}
          />
          {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
        </div>

        {/* Select dropdown */}
        <div>
          <label>Paese:</label>
          <select
            value={formData.country}
            onChange={(e) => updateField("country", e.target.value)}
          >
            <option value="">Seleziona un paese</option>
            <option value="italy">Italia</option>
            <option value="france">Francia</option>
            <option value="germany">Germania</option>
          </select>
          {errors.country && <p style={{ color: "red" }}>{errors.country}</p>}
        </div>

        {/* Radio buttons */}
        <div>
          <label>Genere:</label>
          <label>
            <input
              type="radio"
              value="male"
              checked={formData.gender === "male"}
              onChange={(e) => updateField("gender", e.target.value)}
            />
            Maschio
          </label>
          <label>
            <input
              type="radio"
              value="female"
              checked={formData.gender === "female"}
              onChange={(e) => updateField("gender", e.target.value)}
            />
            Femmina
          </label>
          {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
        </div>

        {/* Checkbox singolo */}
        <div>
          <label>
            <input
              type="checkbox"
              checked={formData.newsletter}
              onChange={(e) => updateField("newsletter", e.target.checked)}
            />
            Iscriviti alla newsletter
          </label>
        </div>

        {/* Checkbox multipli */}
        <div>
          <label>Interessi:</label>
          {["Sport", "Musica", "Viaggi", "Tecnologia"].map((interest) => (
            <label key={interest}>
              <input
                type="checkbox"
                checked={formData.interests.includes(interest)}
                onChange={() => handleInterestChange(interest)}
              />
              {interest}
            </label>
          ))}
          {errors.interests && (
            <p style={{ color: "red" }}>{errors.interests}</p>
          )}
        </div>

        <button type="submit">Registrati</button>
      </form>

      {/* Anteprima dati */}
      <div
        style={{
          marginTop: "20px",
          backgroundColor: "#f5f5f5",
          padding: "10px",
        }}
      >
        <h4>Anteprima dati:</h4>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </>
  );
}

export default App;
