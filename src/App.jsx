import Modal from "./components/Modal";

function App() {
  // 주석을 추가했을 경우
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
