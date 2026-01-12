import { Link, useNavigate } from "react-router-dom";
import s from "./Login.module.scss";
import { useState } from "react";

export function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const user = { email, password };
    const expiresAt = Date.now() + 60 * 1000;

    localStorage.setItem("auth-user", JSON.stringify(user));
    localStorage.setItem("auth-expires-at", String(expiresAt));

    setUser(user);
    navigate("/");
  };

  return (
    <div className={s.login}>
      <section className={s.leftSection}>
        <div>
          <h1>Bem-vindo de volta!</h1>
          <p>Insira suas credenciais para acessar sua conta.</p>
          <form onSubmit={handlerSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Digite sua senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Entrar</button>
            <Link className={s.backLink} to="/">Voltar</Link>
            
          </form>
        </div>
      </section>
      <section className={s.rightSection}></section>
    </div>
  );
}
