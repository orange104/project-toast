import React from 'react'

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
    const [message, setMessage] = React.useState('');
    const [variant, setVariant] = React.useState('notice');
    const [ToastList, setToastList] = React.useState([]);

    const handleMsgChange = (event) => {
        setMessage(event.target.value);
    }
    const handleVariantChange = (event) => {
        setVariant(event.target.value);
    }

    const handleDismiss = (id) => {
        setToastList(ToastList.filter((toast) => toast.id !== id));
    }

    const handlePopToast = (event) => {
        event.preventDefault();
        setToastList([...ToastList, {
            id: crypto.randomUUID(),
            message,
            variant,
        }]);
    }

    return (
        <ToastContext.Provider value={{ message, variant, ToastList, handleMsgChange, handleVariantChange, handleDismiss, handlePopToast }}>
            {children}
        </ToastContext.Provider>
    )
}

export default ToastProvider;