import React from 'react';
import {Row, Col, Button} from 'antd'

const ActionsPanel = (props) => {
    return (
        <Row justify={'end'}>
            <Col span={24}>
                {props.role == 'user' && <Button type="primary" shape="round" onClick={props.onNewBooking}>New Booking</Button>}
            </Col>
        </Row>
    )
}

export default ActionsPanel;