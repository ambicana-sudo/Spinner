import Button from "../button"
import { useState } from "react";

const ChatBox = (props)=>{
	const [userMessasge, setMessage] = useState()
	const [displayMsg, setDisplayMsg] = useState()
	const [othersMessasge, setOthersMessage] = useState()
	const [displayOthersMsg, setDisplayOthersMsg] = useState()

	const submitFisrtUser = ()=>{
		setDisplayMsg(userMessasge)
	}

	const submitSecUser = ()=>{
		setDisplayOthersMsg(othersMessasge)
	}

	return(
		<>
			<div className={props.cname}>
				<div className="userTitle"><h2>{props.name}</h2></div>
				<div className="msg-body">{displayMsg}</div>

				<div className="text-type">
					<textarea onKeyUp={(e)=> setMessage(e.target.value)}></textarea>
					<button  onClick={()=> submitFisrtUser()}>
						<img src='https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/send-icon.png'/>
					</button>
				</div>
			</div>
		</>
	)
}
export default ChatBox