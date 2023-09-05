import React from "react";
import { Modal } from "react-bootstrap";

function Modal(props) {
  const [visible, setVisible] = useState(false);

  function fetchDetails(val) {
    console.log("val", val);
    if (val !== " ") {
      setVisible(true);
    }
  }
  return (
    <div>
      <Modal show={visible} onHide={() => setVisible(props)}>
        <Modal.Header>
          <Modal.Title>
            <h1 text-color="red">Book details</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Details />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}
export default Modal;
