import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import Challenge from "./component/Challenge";
// import Challenge2 from "./component/Challenge2";
// import Compoeg from "./component/Compoeg";
// import Card from "./component/Card";
import "./component/Card.css";
// import Sdata from "./component/Sdata";
// import Serieslist from './component/Serieslist';
// import Slotgame from "./component/Slotgame";
// import Examplestate from "./component/hooks/ExampleState";
// import TimeUpdate from "./component/hooks/TimeUpdate";
// import DigitalClock from "./component/hooks/DigitalClock";
// import Exampleevent from "./component/event/Exampleevent";
// import Forms from "./component/forms/Forms";
// import FormExample from "./component/forms/Formexample";
import Todolist from "./component/todolist/Todolist";
import Challenge3 from "./component/challenge/Challenge3";

ReactDOM.render(
	// <TimeUpdate />
	// <DigitalClock />
	// <Exampleevent />
	// <Forms />
	// <FormExample />
	// <Todolist />
	<Challenge3 />
	,
	//<Examplestate />
	// <Slotgame />
	// <Serieslist />
	// <Compoeg />
	// <App />
	/* <Challenge />
		<Challenge2 /> */
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
