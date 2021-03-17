import React from "react";
import ReactDOM from "react-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Division from "./components/Division";
import Inventory from "./components/Inventory";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import "./App.css";
import "./bootstrap.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Header />
    <About />
    <Division />
    <Inventory />
    <ContactSection />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
