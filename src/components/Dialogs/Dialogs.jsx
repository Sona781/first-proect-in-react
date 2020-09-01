import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogsItem/DialogsItem';
import { reduxForm, Field } from 'redux-form';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map((d) => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = state.messagesData.map((m) => <Message message={m.message} />);
    
    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.user_dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageReduxForm onSubmit={addNewMessage}/>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"addMessage"} placeholder="Enter your message"/>
            </div>
            <div><button >Send</button></div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({
    form: "addMessage"
})(AddMessageForm)

export default Dialogs;