import Modal from "react-modal";
import { Container } from "./styles";
import closeImage from '../../assets/close.svg'

Modal.setAppElement("#root");
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={"react-modal-overlay"}
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImage} alt="X to close" />
      </button>
      <Container>
        <h2>Fill transaction</h2>
        <input type="text" placeholder="Title" />
        <input type="number" placeholder="Value" />
        <input type="text" placeholder="Category" />
        <button type="submit">Submit</button>
      </Container>
    </Modal>
  );
}
