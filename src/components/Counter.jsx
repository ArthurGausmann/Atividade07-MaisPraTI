import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0)

    const add = () => {
        setCount(count + 1)
    }

    const reset = () => {
        setCount(0)
    }

    return(
        <>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>Contador: {count}</h1>
                <button onClick={add} style={{borderRadius: '8px', borderColor: '#ddd', padding: '8px 20px', margin: '5px', cursor: "pointer"}}>Adicionar</button>
                <button onClick={reset} style={{borderRadius: '8px', borderColor: '#ddd', padding: '8px 20px', margin: '5px', cursor: "pointer"}}>Resetar</button>
            </div>
        </>
    )
}

export default Counter