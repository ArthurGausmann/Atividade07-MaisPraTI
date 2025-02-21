import { useState } from "react";

function ImageGallery() {
    const [open, setOpen] = useState(false);

    const [selectedImg, setSelectedImg] = useState('')

    const openModal = (image) => {
        setSelectedImg(image);
        setOpen(true);
    }

    const closeModal = () => {
        setOpen(false);
    }

    return(
        <>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Galeria de imagens</h1>
            <h3>Clique para visualizar as imagens em maior escala</h3>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '1fr 1fr 1fr',
                width: '60%', margin: '0 auto'}}>
                <div>
                    <img src="/105px-0001Bulbasaur.png" alt="Bulbasaur" onClick={() => openModal('/105px-0001Bulbasaur.png')} style={{margin: '15px'}}/>
                    <h3>Bulbasaur</h3>
                </div>
                <div>
                    <img src="/105px-0002Ivysaur.png" alt="Ivysaur" onClick={() => openModal('/105px-0002Ivysaur.png')} style={{margin: '15px'}}/>
                    <h3>Ivysaur</h3>
                </div>
                <div>
                    <img src="/105px-0003Venusaur.png" alt="Venusaur" onClick={() => openModal('/105px-0003Venusaur.png')} style={{margin: '15px'}}/>
                    <h3>Venusaur</h3>
                </div>
                <div>
                    <img src="/105px-0004Charmander.png" alt="Charmander" onClick={() => openModal('/105px-0004Charmander.png')} style={{margin: '15px'}}/>
                    <h3>Charmander</h3>
                </div>
                <div>
                    <img src="/105px-0005Charmeleon.png" alt="Charmeleon" onClick={() => openModal('/105px-0005Charmeleon.png')} style={{margin: '15px'}}/>
                    <h3>Charmeleon</h3>
                </div>
                <div>
                    <img src="/105px-0006Charizard.png" alt="Charizard" onClick={() => openModal('/105px-0006Charizard.png')} style={{margin: '15px'}}/>
                    <h3>Charizard</h3>
                </div>
                <div>
                    <img src="/105px-0007Squirtle.png" alt="Squirtle" onClick={() => openModal('/105px-0007Squirtle.png')} style={{margin: '15px'}}/>
                    <h3>Squirtle</h3>
                </div>
                <div>
                    <img src="/105px-0008Wartortle.png" alt="Wartortle" onClick={() => openModal('/105px-0008Wartortle.png')} style={{margin: '15px'}}/>
                    <h3>Warttortle</h3>
                </div>
                <div>
                    <img src="/105px-0009Blastoise.png" alt="Blastoise" onClick={() => openModal('/105px-0009Blastoise.png')} style={{margin: '15px'}}/>
                    <h3>Blastoise</h3>
                </div>
                {open && (
                    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.8)", display: "flex", 
                        justifyContent: "center", alignItems: "center", zIndex: 1000 }} onClick={closeModal}>

                        <div style={{ position: "relative", backgroundColor: "#fff", padding: "20px", borderRadius: "8px",
                        maxWidth: "90%", maxHeight: "90%", overflow: "auto"}}
                        onClick={(e) => e.stopPropagation()}>

                        <button onClick={closeModal} style={{ position: "absolute", top: "10px", right: "10px", padding: "5px 10px", fontSize: "16px", 
                            backgroundColor: "#dc3545",color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer"}}>
                            Fechar
                        </button>

                        <img src={selectedImg} style={{ width: "200px", height: "auto" }}/>
                        </div>
                    </div>
                )}
            </div>
        </div>
        </>
    )
}


export default ImageGallery