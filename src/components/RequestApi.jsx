import { useEffect, useState } from "react";

function RequestApi() {
    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=7')

            const result = await response.json();

            setData(result);
        };

        fetchData();
    }, []);

    return(
        <>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Requisição API</h1>
            <h3>Exemplo utilizando JSON Placeholder - Posts (limitado a 7)</h3>
            <ul style={{ listStyle: 'none', display: "flex", flexDirection: "column", alignItems: "center"}}>
                {data && data.map((post) => (
                    <li key={post.id} style={{padding: "8px", margin: "8px 30px", width: '80%', backgroundColor: "#f9f9f9",
                        border: "1px solid #ddd", borderRadius: "4px",}}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}


export default RequestApi