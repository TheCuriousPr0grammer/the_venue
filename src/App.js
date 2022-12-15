import React from "react";
import Featured from "./components/featured";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./resources/styles.css";

function App() {
	return (
		<div className="App">
			<Header />
			<Featured />
			<div style={{ height: "300px", backgroundColor: "red" }}></div>
			<div style={{ height: "300px", backgroundColor: "green" }}></div>
			<div style={{ height: "300px", backgroundColor: "blue" }}></div>
			<div style={{ height: "300px", backgroundColor: "yellow" }}></div>
			<Footer />
		</div>
	);
}

export default App;
