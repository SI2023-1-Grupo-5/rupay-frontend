import "./HomePage.css";

const HomePage = () => {

  const handleCredit = (event) => {};

  const handleConsultMenu = (event) => {};

  const handleExit = (event) => {};

  return (
    <div className="Container">
      <div
        style={{ backgroundColor: "#044569", padding: "20px", width: "300px" }}
      >
        <h1 style={{ color: "white", textAlign: "center" }}>Olá Felps</h1>
        <h2 style={{ color: "white", textAlign: "center" }}>Seu saldo é 25.00</h2>
          <div>
            <button className="" onClick={handleCredit}>Colocar créditos</button>
          </div>
          <div>
            <button className="" onClick={handleConsultMenu}>Consultar cardápio</button>
          </div>
          <div>
            <button className="SubmitButton" onClick={handleExit}>
              Sair
            </button>
          </div>
      </div>
    </div>
  );
};

export default HomePage;