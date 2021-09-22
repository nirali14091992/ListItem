import React, { Component } from "react";

class Challenge extends React.Component {
	render() {
		const name = "Nirali";
		const currDate = new Date().toLocaleDateString();
		const currTime = new Date().toLocaleTimeString();
		const heading = {
			color: "fa9191",
			textTrasform: "capitalize",
			textAlign: "center",
		};

		return (
			<div>
				<h1
					style={heading}>
					My First Example {name}
				</h1>
				<p
					style={{
						textAlign: "center",
					}}>
					Todays date is {currDate}
				</p>
				<p
					style={{
						textAlign: "center",
					}}>
					Todays date is {currTime}
				</p>
			</div>
		);
	}
}

export default Challenge;
