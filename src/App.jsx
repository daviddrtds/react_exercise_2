import NewForm from "./components/NewForm";
import NewHeader from "./components/NewHeader";
import NewTable from "./components/NewTable";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState(null);

  const noInput = () => {
    setUserInput(null);
  };

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput.currentSav;
    const yearlyContribution = +userInput.yearlySav;
    const expectedReturn = +userInput.expectedSav / 100;
    const duration = +userInput.durationSav;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <NewHeader />
      <NewForm calculate={calculateHandler} isUser={noInput} />
      {!userInput ? (
        <p>No results yet.</p>
      ) : (
        <NewTable data={yearlyData} savings={userInput.currentSav} />
      )}
    </div>
  );
}

export default App;
