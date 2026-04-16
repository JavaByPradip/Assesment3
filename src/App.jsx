import Header from "./components/Header";
import Footer from "./components/Footer";
import StatusCard from "./components/StatusCard";
import NavLink from "./components/NavLink";

function App() {
  return (
    <div>
      <Header />

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        
        <NavLink />

        <div style={{ marginTop: "20px" }}>
          <button className="btn">Click Me</button>
        </div>

        <div style={{ marginTop: "30px" }}>
          <StatusCard type="success" message="Success ✅" />
          <StatusCard type="error" message="Error ❌" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;