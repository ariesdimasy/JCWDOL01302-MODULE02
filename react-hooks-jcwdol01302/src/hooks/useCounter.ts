import { useState } from "react"

function useCounter(val: number, step: number) {
    const [count, setCounter] = useState<number>(val)

    function increment() {
        setCounter(count + step);
    }

    function decrement() {
        setCounter(count - step)
    }

    return [count, increment, decrement]
}

export function useTest() {
    return "use test"
}

export default useCounter