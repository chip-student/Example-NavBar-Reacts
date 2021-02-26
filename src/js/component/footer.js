import React from "react";
// import PropTypes from "prop-types";

export function FooterPage() {
	return (
		<div className="d-flex justify-content-center bg-dark">
			<footer className="footer m-3">
				<div>
					<span className="text-white">
						Copyright &copy; Your Website {new Date().getFullYear()}
					</span>
				</div>
			</footer>
		</div>
	);
}
// Foter.prototype = {
// 	foterLabel: PropTypes.string,
// 	foterSystem: PropTypes.string
// };
