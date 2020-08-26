import React from 'react';
import { Form, Input, Button, Select, DatePicker } from 'antd';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const NewBookingForm = (props) => {

    const [form] = Form.useForm();

    return (
        <div>
            <Form {...layout} form={form} name="new_booking_form" onFinish={props.onFinish}>
                <Form.Item name="event" label="Event" rules={[{ required: true, message: 'Need to fill Event'  }]}>
                    <Select
                    placeholder="Select an event"
                    allowClear
                    >
                    {props.events.map(event => <Option key={event._id} value={event._id}>{event.name}</Option>)}
                    </Select>
                </Form.Item>
                <Form.Item name="location" label="Location" rules={[{ required: true, message: 'Need to fill location' }]}>
                    <Input/>
                </Form.Item>
                <Form.Item name="propose1" label="Propose Date 1" rules={[{ required: true, message: 'Need to fill Propose Date 1'  }]}>
                    <DatePicker/>
                </Form.Item>
                <Form.Item name="propose2" label="Propose Date 2" rules={[{ required: true, message: 'Need to fill Propose Date 2'  }]}>
                    <DatePicker/>
                </Form.Item>
                <Form.Item name="propose3" label="Propose Date 3" rules={[{ required: true, message: 'Need to fill Propose Date 3'  }]}>
                    <DatePicker/>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Create
                    </Button>
            </Form.Item>
            </Form>
        </div>
    )
}

export default NewBookingForm;