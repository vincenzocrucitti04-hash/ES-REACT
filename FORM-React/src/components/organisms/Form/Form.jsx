import { useState } from "react";
import InputField from "../../molecules/InputField";
import Button from "../../atoms/Button/Button";

export default function Form() {
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
    setInputValue({ name: "", email: "", telephone: "", password: "" });
  };

  return (
    <>
      <h1>Form - React</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Name:"
          type="text"
          value={inputValue.name}
          placeholder="Inserisci il tuo Nome"
          onChange={(e) => updateField("name", e.target.value)}
        />
        <InputField
          label="Email:"
          type="text"
          value={inputValue.email}
          placeholder="Inserisci la tua email"
          onChange={(e) => updateField("email", e.target.value)}
        />
        <InputField
          label="Telephone:"
          type="number"
          value={inputValue.telephone}
          placeholder="Inserisci il tuo numero di telefono"
          onChange={(e) => updateField("telephone", e.target.value)}
        />
        <InputField
          label="Password:"
          type="password"
          value={inputValue.password}
          placeholder="Inserisci la tua password"
          onChange={(e) => updateField("password", e.target.value)}
        />

        <Button type="submit">Invia</Button>
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
