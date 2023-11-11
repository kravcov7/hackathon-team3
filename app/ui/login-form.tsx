"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import validation from "../lib/login-validation";
import { LoginCredential, LoginError } from "../lib/definitions";

export default function LoginForm() {
  const [credential, setCredential] = useState<LoginCredential>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<LoginError>({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredential((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors(validation(credential));
  };

  return (
    <form
      action="#"
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-y-7 p-5 border-2 border-black rounded-lg"
    >
      <h2>Log In</h2>

      <label htmlFor="email" className="flex flex-col gap-y-1.5">
        Email
        <input
          className="p-2 border-2 border-black rounded-lg"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={credential.email}
          onChange={handleChange}
        />
        {errors.email && <span className="text-red-500">{errors.email}</span>}
      </label>

      <label htmlFor="password" className="flex flex-col gap-y-1.5">
        Password
        <input
          className="p-2 border-2 border-black rounded-lg"
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          value={credential.password}
          onChange={handleChange}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password}</span>
        )}
      </label>
      <button
        type="submit"
        className="py-2 px-5 rounded-lg bg-emerald-600 text-white"
      >
        Log In
      </button>
      <Link
        href="/form/signup"
        className="py-2 px-5 rounded-lg bg-indigo-600 text-white"
      >
        Create account
      </Link>
    </form>
  );
}
