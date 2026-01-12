import { BrowserRouter } from "react-router-dom";
import { PagesRouter } from "./routers/PagesRouter";
import "./index.scss";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [remainingSeconds, setRemainingSeconds] = useState(null);
  const [sessionExpired, setSessionExpired] = useState(false);

  // 1) Carrega user + expiração do localStorage (reload)
  useEffect(() => {
    const savedUser = localStorage.getItem("auth-user");
    const savedExpiresAt = localStorage.getItem("auth-expires-at");

    if (savedUser && savedExpiresAt) {
      const expiresAt = Number(savedExpiresAt);
      const now = Date.now();

      if (now < expiresAt) {
        setUser(JSON.parse(savedUser));
        const diffSeconds = Math.floor((expiresAt - now) / 1000);
        setRemainingSeconds(diffSeconds);
      } else {
        localStorage.removeItem("auth-user");
        localStorage.removeItem("auth-expires-at");
      }
    }
  }, []);

  // 2) Reage a mudanças em user (login/logout)
  useEffect(() => {
    if (!user) {
      // logout / sessão expirada
      localStorage.removeItem("auth-user");
      localStorage.removeItem("auth-expires-at");
      setRemainingSeconds(null);
      return;
    }

    // user acabou de ser definido (login)
    const savedExpiresAt = localStorage.getItem("auth-expires-at");
    if (savedExpiresAt) {
      const expiresAt = Number(savedExpiresAt);
      const now = Date.now();

      if (now < expiresAt) {
        const diffSeconds = Math.floor((expiresAt - now) / 1000);
        setRemainingSeconds(diffSeconds);
      } else {
        setUser(null);
        localStorage.removeItem("auth-user");
        localStorage.removeItem("auth-expires-at");
        setRemainingSeconds(null);
      }
    }
  }, [user]);

  // 3) Timer de sessão (contador)
  useEffect(() => {
    if (!user || remainingSeconds == null) return;

    const intervalId = setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev === null) return prev;
        if (prev <= 1) {
          clearInterval(intervalId);
          setUser(null);
          setSessionExpired(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [user, remainingSeconds]);

  return (
    <>
      <BrowserRouter>
        {user && remainingSeconds != null && (
          <div
            style={{
              position: "fixed",
              top: 70,
              right: 10,
              background: "#222",
              color: "#fff",
              padding: "8px 12px",
              borderRadius: "4px",
              fontSize: "14px",
            }}
          >
            Sessão expira em: {remainingSeconds} segundos
          </div>
        )}

        {sessionExpired && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "8px",
                maxWidth: "320px",
                textAlign: "center",
              }}
            >
              <h2>Sessão expirada</h2>
              <p>Seu tempo de sessão acabou. Faça login novamente para continuar.</p>
              <button onClick={() => setSessionExpired(false)}>OK</button>
            </div>
          </div>
        )}

        <PagesRouter user={user} setUser={setUser} />
      </BrowserRouter>
    </>
  );
}

export default App;
