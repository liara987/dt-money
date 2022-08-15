import { FormEvent, useContext, useState } from "react";
import Modal from "react-modal";
import incomeImage from "../../assets/income.svg";
import outcomeImage from "../../assets/outcome.svg";
import { Container, TransactionTypeContainer, RadioType } from "./styles";
import closeImage from "../../assets/close.svg";
import { api } from "./../../services/api";
import { TransactionContext } from "./../../TransactionsContext";

Modal.setAppElement("#root");

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionContext);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("deposit");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle("");
    setCategory("");
    setAmount(0);
    setType("deposit");

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={"react-modal-overlay"}
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImage} alt="X to close" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Fill transaction</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Value"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioType
            isActive={type === "deposit"}
            type="button"
            onClick={() => setType("deposit")}
            backgroundColor="green"
          >
            <img src={incomeImage} alt="Income" />
            <span>Income</span>
          </RadioType>

          <RadioType
            isActive={type === "withdraw"}
            type="button"
            onClick={() => setType("withdraw")}
            backgroundColor="red"
          >
            <img src={outcomeImage} alt="Outcome" />
            <span>Outcome</span>
          </RadioType>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">Submit</button>
      </Container>
    </Modal>
  );
}
