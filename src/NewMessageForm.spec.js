import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewMessageForm from "./NewMessageForm";

describe("<NewMessageForm />", () => {
	describe("clicking the send button", () => {
		let sendHandler;
		function sendMessage() {
			sendHandler = jest.fn().mockName("sendHandler");
			render(<NewMessageForm onSend={sendHandler} />);

			userEvent.type(screen.getByTestId("messageText"), "New message");
			userEvent.click(screen.getByTestId("sendButton"));
		}

		it("clears the text field", async () => {
			sendMessage();
			expect(screen.getByTestId("messageText").value).toEqual("");
		});

		it("calls the send handler", async () => {
			sendMessage();
			expect(sendHandler).toHaveBeenCalledWith("New message");
		});
	});
});
