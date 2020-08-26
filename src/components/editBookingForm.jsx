import React from 'react';
import { Form, Input, Button, Select, DatePicker, Radio } from 'antd';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const EditBooking = (props) => {

    const [form] = Form.useForm();

    const chooseProposeDate = props.item.propose_date.find(pro => pro.choose) ? props.item.propose_date.find(pro => pro.choose)._id: '';

    const initialValues = {
        _id: props.item._id,
        event: props.item.event._id,
        location: props.item.location,
        propose_date: chooseProposeDate,
        propose1: props.item.propose_date[0].propose_date ? props.item.propose_date[0].propose_date.substring(0, 10) : '',
        propose2: props.item.propose_date[1].propose_date ? props.item.propose_date[1].propose_date.substring(0, 10) : '',
        propose3: props.item.propose_date[2].propose_date ? props.item.propose_date[2].propose_date.substring(0, 10) : '',
        status: props.item.status._id,
        updatedAt: props.item.updatedAt
    }

    const statuses = props.role == 'user' ? props.statuses.filter(sta => sta.name != 'Approved') : props.statuses;

    const proposeDateRender = (props.role === 'admin' || chooseProposeDate) ? (
        <Form.Item name={'propose_date'} label="Propose Date" rules={[{ required: true, message: 'Need to select Propose Date'  }]}>
            <Radio.Group disabled={props.rule == 'user'}>
                {props.item.propose_date.map(pro => <Radio value={pro._id}>{pro.propose_date ? pro.propose_date.substring(0, 10) : ''}</Radio>)}
            </Radio.Group>
        </Form.Item>
        
    ) : (<>
                <Form.Item name="propose1" label="Propose Date 1">
                    <Input disabled/>
                </Form.Item>
                <Form.Item name="propose2" label="Propose Date 2">
                    <Input disabled/>
                </Form.Item>
                <Form.Item name="propose3" label="Propose Date 3">
                    <Input disabled/>
                </Form.Item>
        </>
    )
    return (
        <div>
            <Form {...layout} form={form} name="new_booking_form" onFinish={props.onFinish}
            initialValues={initialValues}>
                <Form.Item name="_id" label="">
                    <Input type={'hidden'} disabled/>
                </Form.Item>
                <Form.Item name="event" label="Event" rules={[{ required: true, message: 'Need to select Event'  }]}>
                    <Select disabled
                    placeholder="Select an event"
                    allowClear
                    >
                    {props.events.map(event => <Option key={event._id} value={event._id}>{event.name}</Option>)}
                    </Select>
                </Form.Item>
                <Form.Item name="location" label="Location" rules={[{ required: true, message: 'Need to fill location' }]}>
                    <Input disabled/>
                </Form.Item>
                {proposeDateRender}
                <Form.Item name="status" label="Status" rules={[{ required: true, message: 'Need to select status'  }]}>
                    <Select disabled={props.role == 'user' && statuses.find(sta => sta._id === props.item.status._id && sta.name == 'Rejected')}
                    placeholder="Select an status"
                    allowClear
                    >
                    {statuses.map(status => <Option key={status._id} value={status._id} disabled={status.name == 'Pending Review' && props.role == 'admin'}>{status.name}</Option>)}
                    </Select>
                </Form.Item>
                <Form.Item name="updatedAt" label="">
                    <Input type={'hidden'} disabled/>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" disabled={props.role == 'user' && statuses.find(sta => sta._id === props.item.status._id && sta.name == 'Rejected')}>
                        Update
                    </Button>
            </Form.Item>
            </Form>
        </div>
    )
}

export default EditBooking;