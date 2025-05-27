import { defaultTo } from "lodash";

const ModalTitle = ({ children }) => {
  return (
    <header>
      <div className="title">{children}</div>
      <button>닫기</button>
    </header>
  );
};

const ModalBody = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

const ModalFooter = ({ children }) => {
  return <>{children}</>;
};

const Modal = ({ children }) => {
  return (
    <>
      <div>
        <div>{children}</div>
      </div>
    </>
  );
};

// 네임스페이스처리를 해준다.
Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

// 하나의 모달 네임스페이스 안에서 공유되는 상태가 있어야 한다면
// Context API를 사용하면된다.

export default Modal;
// 객체로 표현하면 이렇게 되겠구나. 흠
// const Modal = {
//   default: function Modal({ children }) {
//     return (
//       <div>
//         <div>{children}</div>
//       </div>
//     );
//   },
//   Title: ModalTitle,
//   Body: ModalBody,
//   Footer: ModalFooter,
// };
