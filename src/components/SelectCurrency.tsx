import { MoneyIcon } from "@/icons/money";
import Button from "@mui/material/Button";
import axios from "axios";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface SelectCurrencyProps {
  currencyOptions: string[];
  setActiveStep: Dispatch<SetStateAction<number>>;
}
const Selectcurrency: React.FC<SelectCurrencyProps> = ({
  currencyOptions,
  setActiveStep,
}) => {
  const selectCurrency = async (e: ChangeEvent<HTMLSelectElement>) => {
    const id = localStorage.getItem("id");
    console.log(id);
    try {
      await axios.put(`http://localhost:9090`, {
        currency_type: e.target.value,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const nextStep = () => {
    setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
  };
  return (
    <div
      style={{
        color: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div
        style={{
          width: "45px",
          height: "45px",
          backgroundColor: "#0166FF",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MoneyIcon />
      </div>
      <h2 style={{ fontFamily: "sans-serif" }}>Select base currency</h2>
      <select
        onChange={selectCurrency}
        style={{
          backgroundColor: "white",
          color: "black",
          fontFamily: "sans-serif",
          height: "50px",
          padding: "10px",
          borderRadius: "10px",
          width: "40vw",
        }}
      >
        {currencyOptions.map((currency: string) => (
          <option key={currency}>{currency}</option>
        ))}
      </select>
      <p
        style={{
          fontFamily: "sans-serif",
          color: "#475569",
          width: "37vw",
        }}
      >
        Your base currency should be the one you use most often. All transaction
        in other currencies will be calculated based on this one{" "}
      </p>
      <Button
        onClick={nextStep}
        style={{
          padding: "20px",
          backgroundColor: "#0166FF",
          color: "white",
          width: "40vw",
          borderRadius: "30px",
        }}
      >
        Confirm
      </Button>
    </div>
  );
};
export default Selectcurrency;
