import { useState } from "react";

const TabsNav = () => {
    const [activeTab, setActiveTab] = useState("sobre");
  
    // Função para mudar a aba ativa
    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
  
    return (
      <div style={{ textAlign: "center", marginTop: "50px", width: '80%', margin: '0 auto' }}>
        <h1>Tabs Navegáveis</h1>
  
        {/* Abas */}
        <div style={{ display: "flex", borderBottom: "2px solid #ccc" }}>
          <button onClick={() => handleTabClick("sobre")} style={{ padding: "10px 20px", fontSize: "16px", border: "none", 
          backgroundColor: activeTab === "sobre" ? "#007bff" : "#f0f0f0", color: activeTab === "sobre" ? "#fff" : "#000", cursor: "pointer", marginRight: "10px",
          borderRadius: "4px 4px 0 0", transition: "background-color 0.3s ease" }}>
            Sobre
          </button>
          <button onClick={() => handleTabClick("contato")} style={{ padding: "10px 20px", fontSize: "16px", border: "none",
            backgroundColor: activeTab === "contato" ? "#007bff" : "#f0f0f0", color: activeTab === "contato" ? "#fff" : "#000", cursor: "pointer",
            borderRadius: "4px 4px 0 0", transition: "background-color 0.3s ease" }}>
            Contato
          </button>
        </div>
  
        {/* Conteúdo das Abas */}
        <div style={{ padding: "20px", border: "1px solid #ccc", borderTop: "none", borderRadius: "0 0 4px 4px" }}>
          {activeTab === "sobre" && (
            <div>
              <h2>Sobre</h2>
              <p>Esta é a aba Sobre. Aqui você pode adicionar informações sobre o seu projeto ou empresa.</p>
            </div>
          )}
          {activeTab === "contato" && (
            <div>
              <h2>Contato</h2>
              <p>Esta é a aba Contato. Aqui você pode adicionar informações de contato, como e-mail e telefone.</p>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default TabsNav;