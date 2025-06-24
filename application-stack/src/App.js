import React from "react";

function App() {
  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", margin: "2rem", maxWidth: "800px" }}>
      <header style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ color: "#007acc" }}>DevOps Learning Platform</h1>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>
          Empowering you to master DevOps tools and practices
        </p>
      </header>

      <section style={{ marginBottom: "2rem" }}>
        <h2>What You'll Learn</h2>
        <ul>
          <li>CI/CD pipelines with GitHub Actions and Azure DevOps</li>
          <li>Kubernetes deployment and orchestration</li>
          <li>Infrastructure as Code with Terraform and Helm</li>
          <li>Monitoring and Logging with Prometheus and Grafana</li>
          <li>Security best practices in cloud-native applications</li>
        </ul>
      </section>

      <section>
        <h2>Get Started</h2>
        <p>
          Start by exploring tutorials, building projects, and deploying applications to real Kubernetes clusters.
        </p>
        <button
          onClick={() => alert("Welcome to the DevOps Learning Platform!")}
          style={{
            backgroundColor: "#007acc",
            color: "white",
            padding: "0.7rem 1.5rem",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1rem"
          }}
        >
          Start Learning
        </button>
      </section>
    </div>
  );
}

export default App;
