import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const App = () => (	
	<div>
		<h1>List of Top 5 Netflix Series 2@2@</h1>
		{/* <Card 
			imgsrc={carddata[0].imgsrc}
			title={carddata[0].title}
			sname={carddata[0].sname}
			link={carddata[0].link}
		/> */}

		{Sdata.map((val) =>{
			return (
				<Card 
					key={val.id}
					imgsrc={val.imgsrc}
					title={val.title}
					sname={val.sname}
					link={val.link}
				/>
			);
		})}
	</div>	
		// <Compoeg />
		// <App />
		/* <Challenge />
		<Challenge2 /> */
	
);

export default App;
