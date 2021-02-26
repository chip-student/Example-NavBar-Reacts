import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import { NavBar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Cards } from "./cards.js";
import { FooterPage } from "./footer.js";

//create your first component
export function Home() { 
	return (
		<div>
			<NavBar
				home="Home"
				about="About"
				services="Services"
				contact="Contact"
			/>
			<div className="container">
				<Jumbotron
					title="A Warm Welcome!"
					description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat."
					buttonLabel="Call to action!"
					buttonURL="#"
				/>

				<div className="row">
					<Cards
						image="https://cdn.brujulabike.com/media/374/conversions/orbe-850.jpg"
						title="Card title"
						description="Lorem ipsum dolor sit amet, consectetur adispisicing elit. Sapiente esse necessitatibus neque."
						buttonLabel="Find Out More!"
						buttonURL="#"
					/>
					<Cards
						image="https://cdn.brujulabike.com/media/374/conversions/orbe-850.jpg"
						title="Card title"
						description="Lorem ipsum dolor sit amet, consectetur adispisicing elit. Explicabo magni sapiente, tempore debitis beatea culpa natus architecto."
						buttonLabel="Find Out More!"
						buttonURL="#"
					/>
					<Cards
						image="https://cdn.brujulabike.com/media/374/conversions/orbe-850.jpg"
						title="Card title"
						description="Lorem ipsum dolor sit amet, consectetur adispisicing elit. Sapiente esse necessitatibus neque."
						buttonLabel="Find Out More!"
						buttonURL="#"
					/>
					<Cards
						image="https://cdn.brujulabike.com/media/374/conversions/orbe-850.jpg"
						title="Card title"
						description="Lorem ipsum dolor sit amet, consectetur adispisicing elit. Explicabo magni sapiente, tempore debitis beatea culpa natus architecto."
						buttonLabel="Find Out More!"
						buttonURL="#"
					/>
				</div>
			</div>
			<FooterPage />
		</div>
	);
}
