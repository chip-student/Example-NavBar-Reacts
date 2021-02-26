import React from "react";
import PropTypes from "prop-types";

export function Cards(props) {
	return (
		<div className="col-md d-flex">
			<div className="card flex-fill justify-content-center">
				<img
					className="card-img-top"
					src={props.image}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title d-flex justify-content-center">
						{props.title}
					</h5>
					<p className="blockquote">{props.description}</p>
				</div>
				<div className="d-flex justify-content-center bg-light border-top w-100">
					<a href={props.buttonURL} className="btn btn-primary m-2">
						{props.buttonLabel}
					</a>
				</div>
			</div>
		</div>
	);
}

Cards.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string
};
