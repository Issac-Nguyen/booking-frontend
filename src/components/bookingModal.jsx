import React, {useRef} from 'react';
import {Modal} from 'antd'

const BookingModal = (props) => {
    return (
        <Modal
          title={props.title}
          visible={props.visible}
          onOk={props.onOk}
          onCancel={props.onCancel}
          footer={props.footer}
          maskClosable={props.maskClosable}
        >
          {props.children}
        </Modal>
    )
}

export default BookingModal;