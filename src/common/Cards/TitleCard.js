import React from "react";

const styles = {
	title: {
		fontSize: "1.2rem",
		color: "var(--secondary)",
		marginBottom: "5px",
	},
};

const CardTitle = ({ title, children }) => {
	return (
		<div>
			<div style={styles.title}>{title}</div>
			{children}
		</div>
	);
};

export default CardTitle;