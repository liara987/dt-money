import Modal from "react-modal";
import incomeImage from "../../assets/income.svg";
import outcomeImage from "../../assets/outcome.svg";
import { Container, TransactionTypeContainer, RadioType } from "./styles";
import closeImage from "../../assets/close.svg";
import { FormEvent, useState } from 'react';
import { api } from './../../services/api';

Modal.setAppElement("#root");

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModalProps) {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [value, setValue] = useState(0)
  const [type, setType] = useState('deposit')

  function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault()
    const data = {
      title,
      category,
      value,
      type
    };
    
    api.post('/transactions', data)
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
          onChange={event => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Value" 
          value={value}
          onChange={event => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioType
            isActive={type === 'deposit'}
            type="button"
            onClick={() => setType('deposit')}
            backgroundColor="green"
          >
            <img src={incomeImage} alt="Income" />
            <span>Income</span>
          </RadioType>
          
          <RadioType
            isActive={type === 'withdraw'}
            type="button"
            onClick={() => setType('withdraw')}
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
          onChange={event => setCategory(event.target.value)}
        />
        <button type="submit">Submit</button>
      </Container>
    </Modal>
  );
}
