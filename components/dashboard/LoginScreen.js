import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        username,
        password,
      });

      // Save JWT token to localStorage
      localStorage.setItem("token", response.data.token);

      // Redirect to the dashboard
      router.push("/dashboard");
    } catch (err) {
      setError("Invalid credentials or something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.stars}></div>
      <div style={styles.card}>
        <h1 style={styles.title}>Login</h1>
        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
            style={styles.input}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            style={styles.input}
          />
          <a href="/forgot-password" style={styles.forgotPassword}>
            Forgot Password?
          </a>
          <button
            type="submit"
            style={styles.button}
            disabled={loading}
            className="login-button"
          >
            {loading ? <span style={styles.spinner}></span> : "Login"}
          </button>
        </form>
        {error && <p style={styles.error}>{error}</p>}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#080e10",
    color: "#c9d1d9",
    overflow: "hidden",
    position: "relative",
    padding: "20px",
  },
  stars: {
    position: "absolute",
    width: "500%",
    height: "500%",
    backgroundImage: `
      radial-gradient(circle, white 1px, transparent 1px),
      radial-gradient(circle, white 1px, transparent 1px)
    `,
    backgroundPosition: "0 0, 50px 50px",
    backgroundSize: "100px 100px",
    opacity: 0.3,
    zIndex: 0,
    animation: "move 60s linear infinite",
  },
  card: {
    width: "100%",
    maxWidth: "400px",
    padding: "2rem",
    backgroundColor: "#171e20",
    borderRadius: "2rem 0 2rem 0",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
    textAlign: "center",
    zIndex: 1,
  },
  title: {
    fontSize: "1.5rem",
    marginBottom: "1.5rem",
    color: "#c9d1d9",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "0.75rem",
    margin: "0.5rem 0",
    borderRadius: "1rem 0 1rem 0",
    border: "1px solid #30363d",
    backgroundColor: "#0d1117",
    color: "#c9d1d9",
    fontSize: "1rem",
  },
  button: {
    padding: "0.75rem",
    marginTop: "1rem",
    backgroundColor: "#ccff00",
    color: "#000",
    fontSize: "1rem",
    borderRadius: "1rem 0 1rem 0",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  spinner: {
    width: "20px",
    height: "20px",
    border: "3px solid #000",
    borderTop: "3px solid #ccff00",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  forgotPassword: {
    fontSize: "0.875rem",
    color: "#58a6ff",
    textDecoration: "none",
    margin: "0.5rem 0 1rem",
    alignSelf: "flex-start",
  },
  error: {
    marginTop: "1rem",
    color: "#ff7b72",
    fontSize: "0.875rem",
  },
};

const globalStyles = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@keyframes move {
  0% { transform: translateX(0%) translateY(0%) ; }
  50% { transform: translateX(10%) translateY(10%) ; }
  100% { transform: translateX(0%) translateY(0%);}
}
.login-button:hover {
  background-color: red;
}`;

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = globalStyles;
  document.head.appendChild(styleSheet);
}

export default LoginScreen;
