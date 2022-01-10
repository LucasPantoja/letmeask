import { useState } from "react";

// type ButtonProps = {
//     children?: string;
// }

// export function Button(props: ButtonProps) {
//     return (
//         <button>{props.children || 'Click'}</button>
//     )
// }

export function Button() {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
    }

    return (
        <button onClick={increment}>
            {counter}
        </button>
    )
}