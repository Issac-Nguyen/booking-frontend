import React from 'react';
import {Row, Col, Pagination} from 'antd'
import ListItem from './list-item'

const ListContainer = (props) => {
    return (
        <div>
            <Row justify="center">
                <Col span={24} sm={24} xs={24}>
                    {props.bookings.length == 0 && <h1 style={{textAlign: 'center'}}>No available bookings!</h1>}
                    {props.bookings.length > 0 && <h1>List Bookings</h1>}
                    {props.bookings.map(item => <div key={item._id} onClick={() => props.onClickItem(item)}><ListItem item={item} /></div>)}
                </Col>
                <Col span={24} sm={24} xs={24}>
                    <Pagination pageSize={props.pageSize} total={props.totalPage} current={props.page} 
                    onChange={props.onChangePage}/>
                </Col>
            </Row>
        </div>
    )
}

export default ListContainer;