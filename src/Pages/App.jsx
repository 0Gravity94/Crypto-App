import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import "../Styles/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
