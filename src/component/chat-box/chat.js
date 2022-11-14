import { useState } from "react";
import ChatBox from "./chatbox";

const Chat = ()=>{

	return(
		<section className="chat-box">
			<h1 style={{width: `100%`, marginBottom: `20px`}}>Chat Box</h1>

			<ChatBox  name="User1" cname="left-box"/>

			<ChatBox  name="User2" cname="right-box"/>
		</section>
	)
}
export default Chat