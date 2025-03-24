function ScenarioCard(props: {
  scenarioName: string;
  scenarioID: string;
  scenarioIcon: string;
  scenarioDescription: string;
  setPage: (page: string) => void;
}) {
  return (
    <div className="card bg-base-100 w-96 pt-4 shadow-sm">
      <span className="material-symbols-rounded" style={{ fontSize: 50 }}>
        {props.scenarioIcon}
      </span>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{props.scenarioName}</h2>
        <p>{props.scenarioDescription}</p>
        <div className="card-actions w-full">
          <button
            onClick={() => {
              props.setPage(`sc_._${props.scenarioID}`);
            }}
            className="btn btn-primary w-full"
          >
            Go{" "}
            <span className="material-symbols-rounded">arrow_forward_ios</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ScenarioCard;
