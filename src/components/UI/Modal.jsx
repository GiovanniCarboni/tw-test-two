import ReactDOM from "react-dom";
import StyledModal from "../../styles/StyledModal";
import StyledBackdrop from "../../styles/StyledBackdrop";

const Backdrop = ({ onClose }) => (
  <StyledBackdrop onClick={onClose}></StyledBackdrop>
);

const ModalOverlay = ({ children, onClose }) => (
  <StyledModal>
    <div className="close-btn">
      <button onClick={onClose}>&times;</button>
    </div>
    <div>{children}</div>
  </StyledModal>
);

const portalElement = document.getElementById("overlays");

export default function Modal({ children, onClose }) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={onClose}>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}
