import { Expense, Income } from "./Income,Expense";
import Wealth from "./Wealth";

export const WealthIncomeExpense = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "90vw",
        justifyContent: "space-around",
      }}
    >
      <Wealth />
      <Income />
      <Expense />
    </div>
  );
};
