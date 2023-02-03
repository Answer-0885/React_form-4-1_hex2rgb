import { useState } from "react";
import Converter from "./components/Converter";

function App(props) {
  const error = "Ошибка!!!";
  const validNumber = 7;

  const [form, setForm] = useState("#");
  const [valid, setValid] = useState(true);

  const RegExp = /^#[0-9A-F]{6}$/i;
  const validateValue = (value) =>
    RegExp.test(value) ? setValid(value) : setValid(RegExp.test(value));

  const handleChange = ({ target: { value } }) => {
    value.length === validNumber && validateValue(value);
    value.length <= validNumber && setForm(value);
  };

  return (
    <div
      className="App"
      style={valid ? { background: `${valid}` } : { background: "#ff0000" }}
    >
      <Converter
      valid={valid}
      error={error}
      form={form}
      handleChange={handleChange}
      />
    </div>
  );
}

export default App;