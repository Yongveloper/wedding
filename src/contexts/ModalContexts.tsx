import { createContext, useContext, ComponentProps, useState } from 'react';

import Modal from '@shared/Modal';
import { createPortal } from 'react-dom';

type ModalProps = ComponentProps<typeof Modal>;
type ModalOptions = Omit<ModalProps, 'open'>;

interface IModalContextValue {
  open: (options: ModalOptions) => void;
  close: () => void;
}

const Context = createContext<IModalContextValue | undefined>(undefined);

const defaultValues: ModalProps = {
  open: false,
  body: null,
  onRightButtonClick: () => {},
  onLeftButtonClick: () => {},
};

export function ModalContext({ children }: { children: React.ReactNode }) {
  const [modalState, setModalState] = useState<ModalProps>(defaultValues);
  const $portal_root = document.getElementById('root-portal');

  const open = (options: ModalOptions) => {
    setModalState({ ...options, open: true });
  };

  const close = () => {
    setModalState(defaultValues);
  };

  const values = { open, close };

  return (
    <Context.Provider value={values}>
      {children}
      {$portal_root && createPortal(<Modal {...modalState} />, $portal_root)}
    </Context.Provider>
  );
}

export function useModalContext() {
  const values = useContext(Context);

  if (!values) {
    throw new Error('ModalContext 안에서 사용해주세요.');
  }

  return values;
}
