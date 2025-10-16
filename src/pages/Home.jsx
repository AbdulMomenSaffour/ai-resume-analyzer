import Navbar from "../components/Navbar";

function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar></Navbar>
      <section className="main-section">
        <div className="page-heading">
          <h1>Track Your Application & Resume Rating</h1>
          <h2>Review your submission and check AI-powered feedback. </h2>
        </div>
      </section>
    </main>
  );
}

export default Home;
