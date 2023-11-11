import { SignupCredential, SignupError } from "./definitions";

export default function validation(data: SignupCredential) {
  const emailPattern = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
  const passwordPattern =
    /^([@#](?=[^aeiou]{7,13}$)(?=[[:alnum:]]{7,13}$)(?=.*[A-Z]{1,}.*$).+)$/gm;
  let error: SignupError = { name: "", email: "", password: "" };

  if (data.name === "") {
    error.name = "Name should not be empty";
  } else {
    error.name = "";
  }

  if (data.email === "") {
    error.email = "Email should not be empty";
  } else if (!emailPattern.test(data.email)) {
    error.email = "Email didn't match";
  } else {
    error.email = "";
  }

  if (data.password === "") {
    error.password = "Password should not be empty";
  } else if (!passwordPattern.test(data.password)) {
    error.password = "Password didn't match";
  } else {
    error.password = "";
  }

  return error;
}