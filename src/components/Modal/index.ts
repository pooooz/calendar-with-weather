import ReactDOM from 'react-dom';

import { ModalProps } from './interfaces';

const root = document.getElementById('root') as HTMLElement;

export const Modal = ({ isOpened, children }: ModalProps) =>
  isOpened ? ReactDOM.createPortal(children, root) : null;
