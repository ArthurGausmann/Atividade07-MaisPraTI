import { useState } from "react";

function Forms() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const sendForm = () => {
        alert(`Seja bem-vindo(a) ${name}, de e-mail ${email}, e senha ${pass}`)
    }

    return(
        <>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Formulário Simples</h1>
            <form>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" 
                style={{ padding: "8px", width: "20%", margin: "10px" }}/>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" 
                style={{ padding: "8px", width: "30%", margin: "10px" }}/>
                <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Senha" 
                style={{ padding: "8px", width: "20%", margin: "10px" }}/>

                <button onClick={sendForm} style={{borderRadius: '8px', padding: '8px 12px', borderColor: '#ddd', cursor: "pointer"}}>Enviar</button>
            </form>
        </div>
        </>
    )
}

export default Forms