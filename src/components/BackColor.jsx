import { useState, useEffect } from "react";

function BackColor() {
    const [color, useColor] = useState('#ffffff');

    const generateRandomColor = () => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); /* Gera um valor (entre 0 e 1), que é multiplicado
        por 16777215 (maior valor de cor), e depois convertido em hexadecimal, formato no qual as cores são "lidas" */
        return randomColor;
    };

    const changeBackColor = () => {
        const newColor = generateRandomColor();
        useColor(newColor);
    };

    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color]);

    return(
        <>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>A cor atual é {color}</h1>
                <button onClick={changeBackColor} style={{borderRadius: '8px', borderColor: '#ddd', padding: '8px 20px', cursor: "pointer"}}>Mudar cor</button>
            </div>
        </>
    )
}

export default BackColor