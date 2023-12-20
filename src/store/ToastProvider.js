import React from 'react'

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
    const [ToastList, setToastList] = React.useState([]);

    const handleDismiss = (id) => {
        setToastList(ToastList.filter((toast) => toast.id !== id));
    }

    const createToast = (message, variant) => {
        setToastList([...ToastList, {
            id: crypto.randomUUID(),
            message,
            variant,
        }]);
    }
    const dismissAll = () => {
        setToastList([]);
    }

    return (
        <ToastContext.Provider value={{ ToastList, dismissAll, createToast, handleDismiss }}>
            {children}
        </ToastContext.Provider>
    )
}

export default ToastProvider;