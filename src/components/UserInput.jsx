import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInverstment: 10000,
    annualInverstment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  function handelChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <section id="user-input">
      <form action="">
        <div className="input-group">
          <p>
            <label>Initial Inverstment </label>
            <input
              type="number"
              required
              value={userInput.initialInverstment}
              onChange={(event) =>
                handelChange("initialInverstment", event.target.value)
              }
            />
          </p>
          <p>
            <label htmlFor="name">Annual Inverstment</label>
            <input
              type="number"
              required
              value={userInput.annualInverstment}
              onChange={(event) =>
                handelChange("annuaInverstment", event.target.value)
              }
            />
          </p>
        </div>

        <div className="input-group">
          <p>
            <label>Expected Return</label>
            <input
              type="number"
              required
              value={userInput.expectedReturn}
              onChange={(event) =>
                handelChange("expectedReturn", event.target.value)
              }
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              type="number"
              required
              value={userInput.duration}
              onChange={(event) => handelChange("duration", event.target.value)}
            />
          </p>
        </div>
      </form>
    </section>
  );
}
