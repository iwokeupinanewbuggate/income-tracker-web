import styles from "@/styles/postRecordStyle/postRecord.module.css";
import axios from "axios";
import { useState } from "react";
import { NoteTitle } from "./RecordTItleNote";
import { AmountCategoryDate } from "./RecordValue";
import { ToastContainer, toast } from "react-toastify";
export const PostValue = ({ handleClose }: { handleClose: () => void }) => {
  const [expense, setExpense] = useState("#0166FF");
  const [income, setIncome] = useState("#F3F4F6");
  const [transactionType, setTransactionType] = useState("expense");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [buttonColor, setButtonColor] = useState("#0166FF");
  const handleExpIncClick = (buttonNumber: number) => {
    if (buttonNumber === 1) {
      setExpense("#0166FF");
      setIncome("#F3F4F6");
      setTransactionType("expense");
      setButtonColor("#0166FF");
    } else if (buttonNumber === 2) {
      setExpense("#F3F4F6");
      setIncome("#16A34A");
      setTransactionType("income");
      setButtonColor("#16A34A");
    }
  };
  const PostTrancsaction = async () => {
    const RealAmount = parseInt(amount, 10);
    if (category !== "" && date !== "" && title !== "") {
      try {
        const res = await axios.post(
          `http://localhost:9090/CreateTransaction`,
          {
            transactionType: transactionType,
            amount: RealAmount,
            transactionTitle: title,
            note: note,
            category: category,
            createdAt: date,
          }
        );
        console.log(res);
        handleClose();
        toast.success("Successfully posted");
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("Fill in the inputs");
    }
    console.log(category, date, title, transactionType, RealAmount);
  };

  return (
    <>
      <ToastContainer />
      <div className={styles.container}>
        <div className={styles.navbar}>
          <h3>Add Record</h3>
          <button onClick={handleClose} className={styles.closeButton}>
            X
          </button>
        </div>
        <div className={styles.valueContainer}>
          <AmountCategoryDate
            PostTrancsaction={PostTrancsaction}
            handleExpIncClick={handleExpIncClick}
            setAmount={setAmount}
            setCategory={setCategory}
            setDate={setDate}
            buttonColor={buttonColor}
            income={income}
            expense={expense}
            amount={amount}
            category={category}
            date={date}
          />
          <NoteTitle
            setTitle={setTitle}
            title={title}
            setNote={setNote}
            note={note}
          />
        </div>
      </div>
    </>
  );
};
