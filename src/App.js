import React from "react";
import "./App.scss";
import FormComboBox from "./FormComboBox";
import Header from "./Header";
import Footer from "./Footer";
require("uswds");

function App() {
  return (
    <div>
      <Header />
      <div className="grid-container">
        <div className="grid-row">
          <div className="grid-col">
            <FormComboBox />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
