import React from "react";
import s from "./Dialogs.module.css";
import DialogItems from "./DialogItems/DialogItems";
import Messages from "./Message/Messages";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialog-reducer";

const Dialogs = (props) => {
    let stater = props.store.getState().dialogsPage;
    let dialogsElements = stater.dialogsData.map(d => <DialogItems id={d.id} name={d.name} key={d.id}/>);
    let messagesElements = stater.messageData.map(m => <Messages message={m.message} key={m.id}/>);
    let newMessageBody = stater.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };

    let onNewMessageChange = (e) => {
       let body =  e.target.value;
       props.store.dispatch(updateNewMessageBodyCreator(body));
    };

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
