import React from "react";
import ReactDOM from "react-dom";
import Background from "./components/Background.js";
import Topbar from "./components/Topbar.js";
import './styles/app.css'

import './index.css';

const Index = () => {
	return  <div className= "Index">
					<Background />
			  	<Topbar />
					</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
