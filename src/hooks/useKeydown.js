import React from 'react';

export default function useEscapeKey(key, callback) {
    React.useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === key) {
                callback();
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [key, callback])
}