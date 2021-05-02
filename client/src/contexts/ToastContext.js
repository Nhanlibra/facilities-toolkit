import React, {createContext, useCallback, useEffect, useState} from 'react';
import {Alert, Toast} from 'react-bootstrap';

const ToastContext = createContext();

export default ToastContext;

export function ToastContextProvider({children}) {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(
          () => setToasts((toasts) => toasts.slice(1)),
          3000,
      );
      return () => clearTimeout(timer);
    }
  }, [toasts]);

  const addToast = useCallback(
      function(toast) {
        setToasts((toasts) => [...toasts, toast]);
      }, [setToasts],
  );

  const [show, setShow] = useState(true);

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      <div style={{
        position: 'absolute',
        bottom: 15,
        right: 15,
      }}>
        {toasts.map((toast) => (
          <Toast key={toast} autohide delay={5000}
            onClose={() => setShow(false)} show={show}>
            <Toast.Body as={Alert} variant="warning"
              style={{margin: 0, minWidth: '250px'}}>{toast}</Toast.Body>
          </Toast>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
