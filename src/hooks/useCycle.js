import { useState, useRef } from 'react';

export default function useCycle(...args) {
    const [mode, setMode] = useState(args[0]);
    const indexRef = useRef(0);

    const cycle = () => {
        indexRef.current = (indexRef.current + 1) % args.length;
        setMode(args[indexRef.current]);
    }
     return [ mode, cycle ];
}