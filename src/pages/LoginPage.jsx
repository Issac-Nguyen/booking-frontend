import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Row, Col, Form, Input, Button, Card, message } from 'antd';
import {useHistory } from 'react-router-dom'
import './LoginPage.css';

import actions from '../actions'

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };
  const tailLayout = {
    wrapperCol: { offset: 4, span: 20 },
  };

const LoginPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const login = useSelector(state => state.authen.login);
    const err = useSelector(state => state.app.error);
    if(login) {
        history.push("/");
    }
    const onFinish = values => {
        dispatch(actions.authenActions.loginRequest(values));
      };

    useEffect(() => {
        err != '' && message.error(err)
    }, [err]);

    return (
        <Row justify="center" className={'form-login'}>
            <Col span={12}>
                <Card title="Login">
                    <Form
                    {...layout}
                    name="login"
                    onFinish={onFinish}
                    >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                        Login
                        </Button>
                    </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    )
}

export default LoginPage;