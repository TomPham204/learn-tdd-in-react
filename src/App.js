import { useState } from "react";
import NewMessageForm from "./NewMessageForm";
import MessageList from "./MessageList";

export default function App() {
	const [messages, setMessages] = useState([]);

	function handleSend() {
		setMessages([...messages, "New message"]);
	}

	return (
		<>
			<NewMessageForm onSend={handleSend} />
			<MessageList data={messages} />
		</>
	);
}
