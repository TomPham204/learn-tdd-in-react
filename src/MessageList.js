import React from "react";
import PropTypes from "prop-types";

export default function MessageList({ data }) {
	return (
		<ul>
			{data.map((message, index) => (
				<li key={index}>{message}</li>
			))}
		</ul>
	);
}

MessageList.propTypes = {
	data: PropTypes.array.isRequired,
};
