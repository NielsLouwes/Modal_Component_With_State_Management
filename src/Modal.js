import styled from "styled-components";
import { useState } from "react";

const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
  background-color: white;
  margin: 10% auto;
  padding: 20px;
  width: 80%;
  height: 500px;
`;

export const Modal = ({ children, selectedItems }) => {
  const [showModal, setshowModal] = useState(false);

  return (
    <>
      <button onClick={() => setshowModal(true)}>Show Modal</button>
      {showModal && (
        <ModalBackground onClick={() => setshowModal(false)}>
          <ModalBody onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setshowModal(false)}>Hide Modal</button>
            {children}
          </ModalBody>
        </ModalBackground>
      )}
    </>
  );
};
