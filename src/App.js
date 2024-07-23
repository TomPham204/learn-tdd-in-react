import React, { useState } from "react";
import NewMessageForm from "./NewMessageForm";
import MessageList from "./MessageList";

export default function App() {
	const [messages, setMessages] = useState([]);

	function handleSend() {
		setMessages([...messages, "New message"]);
	}

	return (
		<React.Fragment>
			<NewMessageForm onSend={handleSend} />
			<MessageList data={messages} />
		</React.Fragment>
	);
}
