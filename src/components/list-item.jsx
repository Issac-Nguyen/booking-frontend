import React from 'react';
import {Row, Col, Button} from 'antd'
import "./list-item.css"

const ListItem = (props) => {
    return (
        <Row className="booking-item" align="middle">
            <Col span={6}>
                {props.item.event.name}
            </Col>
            <Col span={6}>
                {props.item.location}
            </Col>
            <Col span={6} className="propose-date">
                <ul>
                    {props.item.propose_date.map((d, index) => <li key={index}>{d.propose_date ? d.propose_date.substring(0, 10) : ''}</li>)}
                </ul>
            </Col>
            <Col span={6}>
                <Button type={props.item.status.name == 'Rejected' ? 'danger' : 'primary'} shape="round">{props.item.status.name}</Button>
            </Col>
        </Row>
    )
}

export default ListItem;