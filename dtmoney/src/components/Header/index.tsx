import logoImg from "./../../assets/logo.svg";
import { Container, Content } from "./styles";
import { useState } from "react";
import Modal from "react-modal";

export function Header() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModalOpen() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModalOpen() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo dt Money" />
        <button type="button" onClick={handleOpenNewTransactionModalOpen}>New transaction</button>

        <Modal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModalOpen}
        >
          <h2>Testing Modal</h2>
        </Modal>
      </Content>
    </Container>
  );
}
