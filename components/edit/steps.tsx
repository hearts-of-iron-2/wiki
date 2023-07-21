type Props = {
  next: Function;
  previous: Function;
  state: any;
};

const StepsComponent = ({ next, previous, state }: Props) => {
  const generateSteps = () => {
    const machine = state.machine;
    let res = [];
    let i = 0;
    let passedCurrent = false;
    for (let step in machine.states) {
      res.push(
        <li
          key={i++}
          className={`step capitalize ${!passedCurrent ? "step-primary" : ""}`}
        >
          {step}
        </li>
      );
      passedCurrent = passedCurrent || step === state.value;
    }
    return res;
  };

  const hasNext = (): boolean => {
    const next = state.machine.config.states[state.value].on["NEXT"];
    return next && state.value !== "auth";
  };

  const hasPrevious = (): boolean => {
    const previous = state.machine.config.states[state.value].on["PREV"];
    return previous;
  };

  return (
    <div className="container h-fit w-full mx-auto flex flex-row justify-between">
      <button
        onClick={() => previous()}
        className={`btn btn-outline ${hasPrevious() ? "" : "invisible"}`}
      >
        Previous
      </button>
      <ul className="steps">{generateSteps()}</ul>
      <button
        onClick={() => next()}
        className={`btn btn-outline ${hasNext() ? "" : "invisible"}`}
      >
        Next
      </button>
    </div>
  );
};

export default StepsComponent;
