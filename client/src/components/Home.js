import React from "react";
import logo from "../thumb-down-svgrepo-com.svg";
import drill from "../drill sargent pointing copy.png"
import axios from 'axios';

import "../App.css";

function Home() {
  const [data, setData] = React.useState(null);

  async function hey() {
    const sup = await axios.get("/api");
    console.log(sup);
    setData(sup.data.message);
  }

  React.useEffect(() => {
    hey()
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={drill} className="App-logo" alt="logo" />
        
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default Home;