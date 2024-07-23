import React, { useState } from "react";
import PropTypes from "prop-types";

export default function NewMessageForm({ onSend }) {
	NewMessageForm.propTypes = {
		onSend: PropTypes.func.isRequired,
	};
	const [inputText, setInputText] = useState("");

	function handleTextChange(event) {
		setInputText(event.target.value);
	}

	function handleSend() {
		onSend(inputText);
		setInputText("");
	}

	return (
		<React.Fragment>
			<input
				type="text"
				data-testid="messageText"
				value={inputText}
				onChange={handleTextChange}
			/>
			<button
				data-testid="sendButton"
				onClick={handleSend}
			>
				Send
			</button>
		</React.Fragment>
	);
}
