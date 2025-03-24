import { Airport, Scenario } from "./types";

function ScenarioPage(props: { airport: Airport; scenario: Scenario }) {
  return <>{JSON.stringify(props)}</>;
}

export default ScenarioPage;
