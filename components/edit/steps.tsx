import { StateValue } from "xstate";

type Props = {
  next: Function;
  previous: Function;
  machine: any;
  state: StateValue;
};

const StepsComponent = ({ next, previous, machine, state }: Props) => {
  const generateSteps = () => {
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
      passedCurrent = passedCurrent || step === state;
    }
    return res;
  };

  const hasNext = (): boolean => {
    const allStates = Object.keys(machine.states);
    const statesLen = allStates.length;
    return state !== allStates[statesLen - 1] && state !== "auth";
  };

  const hasPrevious = (): boolean => {
    const allStates = Object.keys(machine.states);
    return state !== allStates[0];
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
