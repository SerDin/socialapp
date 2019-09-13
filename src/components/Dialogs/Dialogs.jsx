import React from "react";
import s from "./Dialogs.module.css";
import DialogItems from "./DialogItems/DialogItems";
import Messages from "./Message/Messages";

const Dialogs = (props) => {
    let state = props.state
    let dialogsElements = state.dialogsData.map(d => <DialogItems id={d.id} name={d.name} key={d.id}/>)
    let messagesElements = state.messageData.map(m => <Messages message={m.message} key={m.id}/>)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.onSendMessageClick()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.onNewMessageChange(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>{dialogsElements}</div>
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                                value={newMessageBody}
                                onChange={onNewMessageChange}
                                placeholder='Enter your message'
                        >
                    </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>GO</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
