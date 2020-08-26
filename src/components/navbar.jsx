import React from 'react';
import {Row, Col} from 'antd'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import './navbar.css'
const NavBar = (props) => {
    return (
        <Row className="navbar" justify="end">
            <Col span={4} sm={24} md={12}>
                <ul>
                    <li>
                        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                    </li>
                    <li>
                        <a className="logout" onClick={props.onLogout}>Log out</a>
                    </li>
                </ul>
                
            </Col>
        </Row>
    )
}

export default NavBar;