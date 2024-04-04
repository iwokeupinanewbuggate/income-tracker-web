import { WealthIncomeExpense } from "@/components/IncExpWealth";
import { VerticelDoughnutBars } from "@/components/Bars";
import { Record } from "@/components/Record";
import NavBar from "@/components/NavBar";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

type DataType = {
  _id: string;
  transactionType: string;
  transactionTitle: string;
  amount: string;
  category: string;
  note: string;
  createdAt: string;
};

export default function Home() {
  const [data, setData] = useState<DataType[]>([]);
  useEffect(() => {
    const getRecords = async () => {
      const id = localStorage.getItem("id");
      try {
        const res = await axios.get(`http://localhost:9090/getMyRecords/${id}`);
        console.log(res);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRecords();
  }, []);

  return (
    <>
      <NavBar transaction={data} setTransaction={setData} />
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <WealthIncomeExpense data={data} />
        </div>

        <div className={styles.BarsContainer}>
          <VerticelDoughnutBars />
        </div>

        <div className={styles.recordListContainer}>
          <Record data={data} />
        </div>
      </div>
    </>
  );
}
