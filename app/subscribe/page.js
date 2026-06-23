export default function SubscribePage() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Subscribe</h1>
      <p>Get early access to exclusive Velvet Whispers content.</p>

      <form style={{ marginTop: 20 }}>
        <label>Email:</label>
        <br />
        <input type="email" placeholder="you@example.com" style={{ padding: 8, width: "100%", maxWidth: 300 }} />
        <br /><br />
        <button style={{ padding: "10px 20px" }}>Subscribe</button>
      </form>

      <br />
      <a href="/">Back to Home</a>
    </main>
  );
}
