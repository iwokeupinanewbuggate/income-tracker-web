import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import styles from "@/styles/editStyle.module.css";
import { EditIcon } from "@/icons/Edit";
import { EditValue } from "./EditValue";
const style = {
  position: "absolute",
  top: "30%",
  left: "25vw",
  right: "25vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "50vw",
  height: "49vh",
  border: "none",
  backgroundColor: "white",
  borderRadius: "20px",
  color: "black",
};

interface TransactionType {
  _id: string;
  transactionType: string;
  transactionTitle: string;
  amount: number;
  category: string;
  note: string;
  createdAt: string;
}

export default function EditTransaction({
  transactionInfo,
  transactionId,
  transaction,
  setTransaction,
}: {
  transactionInfo: TransactionType;
  transactionId: string;
  transaction: TransactionType[];
  setTransaction: React.Dispatch<React.SetStateAction<TransactionType[]>>;
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <div className={styles.EditButton}>
          <EditIcon />
        </div>
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <EditValue
            transactionInfo={transactionInfo}
            handleClose={handleClose}
            transactionId={transactionId}
            transaction={transaction}
            setTransaction={setTransaction}
          />
        </Box>
      </Modal>
    </div>
  );
}
