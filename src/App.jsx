import Modal from "./components/Modal";

function App() {
  return (
    <>
      <div>
        <Modal>
          <Modal.Title>모달 제목</Modal.Title>
          <Modal.Body>모달 본문</Modal.Body>
          <Modal.Footer>
            <button>버튼</button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default App;
