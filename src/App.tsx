import "./App.css";
import Navbar from "./components/Navbar";
import ScenarioCarousel from "./components/ScenarioCarousel";
import { Scenario, Airport } from "./types";
import { useState, useEffect } from "react";
import ScenarioPage from "./ScenarioPage";

function Home(props: { setPage: (page: string) => void }) {
  return (
    <>
      <div
        className="hero"
        style={{
          backgroundImage: "url(/photos/airport.jpeg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay h-full"></div>
        <div className="hero-content py-36 text-neutral-content w-full text-left">
          <div className="w-full float-start text-left">
            <h1 className="mb-5 text-5xl font-bold">Welcome to RadioReady</h1>
            <p className="mb-5">
              Select one of the simulations from below to get started.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center p-12">
        <ScenarioCarousel setPage={props.setPage} />
      </div>
    </>
  );
}

function PagePicker(props: { page: string; setPage: (page: string) => void }) {
  const isScenario = props.page.slice(0, 2) == "sc";

  const [loading, setLoading] = useState(true);
  const [airport, setAirport] = useState<Airport | null>(null);
  const [scenario, setScenario] = useState<Scenario | null>(null);

  useEffect(() => {
    async function getScenarioData() {
      if (isScenario) {
        const scenarioData = props.page.split("_._")[1];
        const airportID = scenarioData.split("_")[0];
        const scenarioID = scenarioData.split("_")[1];
        // Attempt to import the scenario data (./assets/data/airports/${airportScenario}/scenarios/${scenarioID}.json)
        try {
          setAirport(
            (await import(
              `./assets/data/airports/${airportID}/${airportID}.json`
            )) as Airport
          );

          setScenario(
            (await import(
              `./assets/data/airports/${airportID}/scenarios/${scenarioID}.json`
            )) as Scenario
          );

          setLoading(false);
        } catch (error) {
          console.error("Failed to import scenario data: ", error);
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    }
    getScenarioData();
  }, [props.page, isScenario]);

  if (loading) {
    return <div>Loading...</div>;
  } else if (isScenario && scenario && airport) {
    return <ScenarioPage scenario={scenario} airport={airport} />;
  } else {
    return <Home setPage={props.setPage} />;
  }
}

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Navbar changePage={setPage} />
      <PagePicker page={page} setPage={setPage} />
    </>
  );
}

export default App;
