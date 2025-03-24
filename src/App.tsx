import "./App.css";
import Navbar from "./components/navbar";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Navbar changePage={setPage} />
      <div
        className="hero"
        style={{
          backgroundImage: "url(/photos/airport.jpeg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay h-full"></div>
        <div className="hero-content py-36 text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to RadioReady</h1>
            <p className="mb-5">
              Select one of the simulations from below to get started.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
