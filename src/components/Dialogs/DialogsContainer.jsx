import React from 'react'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialog-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'

/*
const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    };

    return <Dialogs state={state} onSendMessageClick={onSendMessageClick} onNewMessageChange={onNewMessageChange}/>;
};
*/

let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: () => {
            dispatch(sendMessageCreator())
        },
        onNewMessageChange: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
