import React, { useEffect, useState } from 'react';

export default function useLocalStorage(key, initialValue) {
    const [storedValue,setStoredValue] = useState(initialValue)
    useEffect(()=>{
        window.localStorage.setItem(key,storedValue)
    },[key,storedValue])
    return [storedValue, setStoredValue];
}
