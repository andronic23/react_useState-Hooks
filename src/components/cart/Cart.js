import { useState } from "react"

const Cart = (props ) =>{
    let [count, setCount] = useState(props.count)

    return (
        <>
        <button onClick={() => {
           setCount(--count)
            console.log(count)
        }}
        >-</button>

        <button>cart ({count})</button>
        <button onClick={() => {
           setCount(++count)
            console.log(count)
        }}>+</button>
        </>
        
    )
}

export {Cart}