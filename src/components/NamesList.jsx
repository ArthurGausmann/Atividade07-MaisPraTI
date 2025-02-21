import { useState } from "react";

function NamesList() {
    const names = [
        "Douglas", "Felipe", "Manuela", "Elias", "Anais", "Laura", "Igor"
    ];

    const [filter, setFilter] = useState('');

    const filterName = names.filter((name) => 
        name.toLocaleLowerCase().includes(filter.toLowerCase())
    );

    return(
        <>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Filtro de nomes</h1>

            <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} 
            placeholder="Nome para filtrar" style={{ padding: "8px", width: "50%", marginRight: "10px" }}/>

            <ul style={{listStyle: 'none', padding: '0', display: "flex"}}>
                {filterName.map((name, index) => (
                    <li key={index} style={{padding: "8px", margin: "8px 30px", width: '10%', backgroundColor: "#f9f9f9",
                     border: "1px solid #ddd", borderRadius: "4px",}}>
                        {name}
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default NamesList