import React, { Component } from "react";
import Entry from "./pages/Entry";
import About from "./pages/About";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Entry />
        <About />
        <Work />
        <Blog />
        <Contact />
      </div>
    );
  }
}

export default App;
