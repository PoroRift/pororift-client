import React from "react";
import ReactDOM from "react-dom";
import Background from "./components/Background.js";
import Searchbar from "./components/Searchbar.js";
import './index.css';

const Index = () => {
	return  <div className= "Index">
					<Background />
					
					<Searchbar />
					</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
