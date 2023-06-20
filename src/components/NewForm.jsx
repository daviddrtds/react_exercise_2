import styles from "./NewForm.module.css";
import { useState } from "react";

const inputFields = {
  currentSav: "",
  yearlySav: "",
  expectedSav: "",
  durationSav: "",
};

export default function NewForm({ calculate, isUser }) {
  const [formData, setFormData] = useState(inputFields);

  const onChangeInput = (event) => {
    setFormData((current) => {
      return { ...current, [event.target.name]: +event.target.value };
    });
  };

  const onReset = () => {
    setFormData(inputFields);
    isUser();
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    calculate(formData);
  };

  return (
    <form onSubmit={onSubmitForm} className={styles.form}>
      <div className={styles.inputGroup}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={formData.currentSav}
            name="currentSav"
            onChange={onChangeInput}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={formData.yearlySav}
            name="yearlySav"
            onChange={onChangeInput}
          />
        </p>
      </div>
      <div className={styles.inputGroup}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={formData.expectedSav}
            name="expectedSav"
            onChange={onChangeInput}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={formData.durationSav}
            name="durationSav"
            onChange={onChangeInput}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button onClick={onReset} type="reset" className={styles.buttonAlt}>
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
}
