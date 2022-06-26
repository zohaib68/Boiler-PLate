import React from "react";
import "./Login.css";
export default function Login() {
  const [formValues, setformValues] = React.useState({
    name: "",
    password: "",
  });
  const [formErrors, setFormErrors] = React.useState({
    name: "",
    password: "",
  });
  const onChange = (e, key) => {
    let { value } = e.target;
    setformValues((p) => ({
      ...p,
      [key]: value,
    }));
  };
  const errorHandler = (key, msg) => {
    setFormErrors((p) => ({
      ...p,
      [key]: msg,
    }));
  };
  const onSubmit = () => {
    alert("done");
  };
  const validate = (id, field) => {
    let value = document.getElementById(id).value;

    switch (field) {
      case "name":
        if (!value) {
          errorHandler("name", "*Required");
        } else if (value?.length > 0 && value?.length < 10) {
          console.log(formErrors, "formErrors");
          errorHandler("name", "");
        }
        break;
      case "password":
        if (!value) {
          errorHandler("password", "*Required");
        } else if (value?.length > 10) {
          errorHandler(
            "password",
            "Password should be less than 10 n characters!"
          );
        } else {
          errorHandler("password", "");
        }
        break;
      default:
        return null;
    }
  };

  return (
    <center style={{ marginTop: "100px" }}>
      <label>*Name :</label>
      <div>
        <input
          type={"text"}
          id="userName"
          name="userName"
          value={formValues?.name}
          onChange={(e) => {
            onChange(e, "name");
            validate("userName", "name");
          }}
        />
      </div>

      <p className="error">{formErrors?.name}</p>
      <label>*Password :</label>
      <div>
        <input
          type={"password"}
          id="password"
          name="userName"
          value={formValues?.password}
          onChange={(e) => {
            onChange(e, "password");
            validate("password", "password");
          }}
        />
      </div>

      <p className="error">{formErrors?.password}</p>
      <button onClick={onSubmit}>Login</button>
    </center>
  );
}
