import { useEffect } from "react";
import { Link } from 'react-router-dom'

function Home() {
    {/* useEffect para ao retornar a home, a cor de fundo voltar ao branco padrão */}
    useEffect(() => {
        document.body.style.backgroundColor = '#ffffff';
    }, []);
    
    return(
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <h1 style={{ marginBottom: '30px' }}>Menu principal Trabalho 7 - Arthur Gausmann</h1>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '9px' }}>
                <Link to='/contador' style={{ textDecoration: 'none',  fontSize: '22px', color: 'black', border: '1px solid', borderRadius: '8px', 
                    padding: '10px', boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.2)' }}>1. Contador Simples</Link>

                <Link to='/corfundo' style={{ textDecoration: 'none',  fontSize: '22px', color: 'black', border: '1px solid', borderRadius: '8px', 
                    padding: '10px', boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.2)' }}>2. Alteração de Cor de Fundo</Link>

                <Link to='/listatarefas' style={{ textDecoration: 'none',  fontSize: '22px', color: 'black', border: '1px solid', borderRadius: '8px', 
                    padding: '10px', boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.2)' }}>3. Lista de Tarefas</Link>

                <Link to='/temporizador' style={{ textDecoration: 'none',  fontSize: '22px', color: 'black', border: '1px solid', borderRadius: '8px', 
                    padding: '10px', boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.2)' }}>4. Temporizador com useEffect</Link>

                <Link to='/filtronomes' style={{ textDecoration: 'none',  fontSize: '22px', color: 'black', border: '1px solid', borderRadius: '8px', 
                    padding: '10px', boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.2)' }}>5. Filtro de Lista</Link>

                <Link to='/formulario' style={{ textDecoration: 'none',  fontSize: '22px', color: 'black', border: '1px solid', borderRadius: '8px', 
                    padding: '10px', boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.2)' }}>6. Formulário de Registro Simples</Link>

                <Link to='/apidados' style={{ textDecoration: 'none',  fontSize: '22px', color: 'black', border: '1px solid', borderRadius: '8px', 
                    padding: '10px', boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.2)' }}>7. Aplicação de Requisição de Dados Simples</Link>

                <Link to='/galeriaimagens' style={{ textDecoration: 'none',  fontSize: '22px', color: 'black', border: '1px solid', borderRadius: '8px', 
                    padding: '10px', boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.2)' }}>8. Galeria de Imagens com Visualização Detalhada</Link>

                <Link to='/timer' style={{ textDecoration: 'none',  fontSize: '22px', color: 'black', border: '1px solid', borderRadius: '8px', 
                    padding: '10px', boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.2)' }}>9. Timer com Intervalo e Alerta</Link>

                <Link to='/tabs' style={{ textDecoration: 'none',  fontSize: '22px', color: 'black', border: '1px solid', borderRadius: '8px', 
                    padding: '10px', boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.2)' }}>10. Componentes com Tabs Navegáveis</Link>
            </div>
        </div>
    )
}

export default Home