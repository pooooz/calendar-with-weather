import ReactDOM from 'react-dom';

interface ModalProps {
  isOpened: boolean;
  children: JSX.Element;
}
const root = document.getElementById('root') as HTMLElement;

export const Modal = ({ isOpened, children }: ModalProps) =>
  isOpened ? ReactDOM.createPortal(children, root) : null;
