import "./App.css";
import { useState } from "react";

function Form() {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    telephone: "",
    password: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const updateField = (field, value) => {
    setInputValue((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(inputValue);

    setInputValue({
      name: "",
      email: "",
      telephone: "",
      password: "",
    });
  };

  return (
    <>
      <h1>Form - React</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Inserisci il tuo Nome"
            value={inputValue.name}
            onChange={(e) => updateField("name", e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            placeholder="Inserisci la tua email"
            value={inputValue.email}
            onChange={(e) => updateField("email", e.target.value)}
          />
        </div>
        <div>
          <label>Telephone:</label>
          <input
            type="number"
            placeholder="Inserisci il tuo numero di telefono"
            value={inputValue.telephone}
            onChange={(e) => updateField("telephone", e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Inserisci la tua password"
            value={inputValue.password}
            onChange={(e) => updateField("password", e.target.value)}
          />
        </div>

        <button type="submit">Invia</button>

        <p>Name: {inputValue.name}</p>
        <p>Email: {inputValue.email}</p>
        <p>Telephone: {inputValue.telephone}</p>
        <p>Password: {inputValue.password}</p>
      </form>
      {submittedData && (
        <div style={{ marginTop: "20px", color: "green" }}>
          <h2>Hai inviato correttamente!</h2>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Telephone:</strong> {submittedData.telephone}
          </p>
          <p>
            <strong>Password:</strong> {submittedData.password}
          </p>
        </div>
      )}
    </>
  );
}

export default Form;
