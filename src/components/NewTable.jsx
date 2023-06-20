import styles from "./NewTable.module.css";

const format = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export default function NewTable({ data, savings }) {
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((i) => {
          return (
            <tr key={i.year}>
              <td>{i.year}</td>
              <td>{format.format(i.savingsEndOfYear)}</td>
              <td>{format.format(i.yearlyInterest)}</td>
              <td>
                {format.format(
                  i.savingsEndOfYear - savings - i.yearlyContribution * i.year
                )}
              </td>
              <td>{format.format(savings + i.yearlyContribution * i.year)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
