import taxi from "./../assets/data/airports/ymmb/scenarios/taxi.json";
import takeoff from "./../assets/data/airports/ymmb/scenarios/takeoff.json";
import arrival from "./../assets/data/airports/ymmb/scenarios/arrival.json";
import landing from "./../assets/data/airports/ymmb/scenarios/landing.json";
import ScenarioCard from "./ScenarioCard";

// Fetch the data for YMMB (./../assets/data/airports/ymmb/ymmb.json) & the scenarios (./../assets/data/airports/ymmb/scenarios/*.json)
const scenarios = [taxi, takeoff, arrival, landing];

function ScenarioCarousel(props: { setPage: (page: string) => void }) {
  return (
    <div className="carousel w-full carousel-center bg-base rounded-box space-x-4 p-4">
      {scenarios.map((scenario) => (
        <div className="carousel-item" key={scenario.id}>
          <ScenarioCard
            setPage={props.setPage}
            scenarioDescription={scenario.description}
            scenarioID={scenario.id}
            scenarioIcon={scenario.icon}
            scenarioName={scenario.name}
          />
        </div>
      ))}
    </div>
  );
}

export default ScenarioCarousel;
