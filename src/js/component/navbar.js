import React from "react";
import PropTypes from "prop-types";

export function NavBar(props) {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-dark">
				<a className="navbar-brand text-white active" href="#">
					Start Bootstrap
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div
					className="collapse navbar-collapse justify-content-end"
					id="navbarSupportedContent">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link text-white" href="#">
								{props.home}
								<span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-muted" href="#">
								{props.about}
							</a>
						</li>
						<li className="nav-item ">
							<a className="nav-link text-muted" href="#">
								{props.services}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-muted" href="#">
								{props.contact}
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

NavBar.propTypes = {
	//proptypes here
	home: PropTypes.string,
	about: PropTypes.string,
	services: PropTypes.string,
	contact: PropTypes.string
};
