import React, { useState } from "react";
import { Link, Route, useRouteMatch, Switch } from "react-router-dom";
import "./InfoMenu.css";

import Overview from "../InfoContainer/Overview/Overview.js";

const InfoView = () => {
	const { url, path } = useRouteMatch();
	const [activeOption, setOption] = useState("overview");

	const menuOptions = {
		overview: Overview,
		videos: Overview,
		staff: Overview,
		companies: Overview,
		recomendations: Overview,
		similar: Overview,
	};

	return (
		<div className="info-view">
			<nav className="navbar">
				{Object.keys(menuOptions).map((option) => {
					return (
						<Link
							key={option}
							onClick={() => setOption(option)}
							to={`${url}/${option}`}
							className={
								option === activeOption ? "navbar-item active" : "navbar-item"
							}
						>
							{option}
						</Link>
					);
				})}
			</nav>
			<Switch>
				{Object.keys(menuOptions).map((option) => (
					<Route
						key={option}
						exact
						path={`${path}/${option}`}
						component={menuOptions[option]}
					/>
				))}
			</Switch>
		</div>
	);
};

export default InfoView;