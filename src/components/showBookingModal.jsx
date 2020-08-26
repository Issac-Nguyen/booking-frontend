import React, { Fragment, useRef } from 'react';
import NewBookingForm from './newBookingForm'
import EditBookingForm from './editBookingForm'

const showBookingModal = WrapModalComponent => (props) => {
    return (
        <Fragment>
            {props.action == "new" && <WrapModalComponent  {...props}><NewBookingForm onFinish={props.onFinish} events={props.events}/></WrapModalComponent>}
            {props.action == "edit" && <WrapModalComponent {...props}><EditBookingForm item={props.item} role={props.role} events={props.events} onFinish={props.onFinish} statuses={props.statuses}/></WrapModalComponent>}
        </Fragment>
    )
}

export default showBookingModal;

