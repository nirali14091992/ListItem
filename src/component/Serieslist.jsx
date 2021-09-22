import React from "react";
import Amazon from "./Amazon";
import Netfilx from "./Netflix";

const favSeries = 'netflix';

const FavS = () => {

	if(favSeries === 'netflix') {
		return <Netfilx />;
	}else{
		return <Amazon />;
	}
};

const Serieslist = () => (	
	<div>
		<h1>List of Top 5 Netflix Series 2@2@</h1>
		{/* <Card 
			imgsrc={carddata[0].imgsrc}
			title={carddata[0].title}
			sname={carddata[0].sname}
			link={carddata[0].link}
		/> */}
		{ favSeries === 'netflix' ? <Netfilx /> : <Amazon />}
		{/* <FavS /> */}
		
{/* 
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
		})} */}
	</div>	
		// <Compoeg />
		// <App />
		/* <Challenge />
		<Challenge2 /> */
	
);

export default Serieslist;
