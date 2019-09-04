import React from "react";
import s from "./Dialogs.module.css";
import DialogItems from "./DialogItems/DialogItems";
import Messages from "./Message/Messages";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map(d => <DialogItems id={d.id} name={d.name} key={d.id}/>);
    let messagesElements = props.state.messageData.map(m => <Messages message={m.message} key={m.id}/>);

    let newMessage = React.createRef();

    let newMessagePost = () => {
        let message = newMessage.current.value;
        alert (message)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>{dialogsElements}</div>
            </div>
            <div className={s.messages}>{messagesElements}</div>
            <textarea ref={newMessage}></textarea>
            <button onClick={newMessagePost}>GO</button>
        </div>
    );
};

export default Dialogs;
