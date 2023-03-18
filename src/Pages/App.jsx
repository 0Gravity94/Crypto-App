import { useState } from "react";
import Layout from "../Components/Layout";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import TopMenu from "../Components/TopMenu";
import Table from "../Components/Table";

import "../Styles/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Layout>
        <Navbar />
        <TopMenu />
        <Table />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
