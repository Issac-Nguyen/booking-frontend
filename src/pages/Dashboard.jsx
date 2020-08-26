import React, {useState, useEffect, useMemo} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {useHistory } from 'react-router-dom'
import {Row, Col, message, Spin, Modal} from 'antd'

import actions from '../actions';
import config from '../config'
import NavBar from '../components/navbar'
import ActionsPanel from '../components/actionsPanel'
import ListContainer from '../components/list-container'
import ShowBookingModal from '../components/showBookingModal'
import BookingModal from '../components/bookingModal'

const DashboardPage = (props) => {

    const dispath = useDispatch();
    const history = useHistory();
    const authenState = useSelector(state => state.authen)
    const bookingState = useSelector(state => state.booking)
    const appState = useSelector(state => state.app)
    const [state, setState] = useState({titleModal: '', action: 'new'})
    const err = useSelector(state => state.app.error);
    let BKModal = useMemo(() => ShowBookingModal(BookingModal), [state.action, bookingState.selected_booking]);

    useEffect(() => {
        dispath(actions.bookingAtions.bookingDataRequest());
        dispath(actions.bookingAtions.bookingRequest())
    }, []);

    const onLogout = (e) => {
        e.preventDefault();
        dispath(actions.authenActions.logout());
        history.push('/login');
    }
    const onNewBooking = (e) => {
        e.preventDefault();
        dispath(actions.appActions.modal(true));
        setState({...state, titleModal: 'New Booking', action: 'new'})
    }

    const onCreateBooking = (values) => {
        const params = {
            event: values.event,
            location: values.location,
            propose_date: [].concat(values.propose1.format(config.formatDate)).concat(values.propose2.format(config.formatDate)).
            concat(values.propose3.format(config.formatDate))
        };

        const status = bookingState.status.find(st => st.name == 'Pending Review');
        if(status) {
            params.status = status._id;
        }

        dispath(actions.bookingAtions.createBooking(params));
    }

    const onEditItem = (item) => {
        dispath(actions.bookingAtions.bookingUpdate(item))
    }

    const onClickItem = (item) => {
        dispath(actions.bookingAtions.bookingSelected(item));
        dispath(actions.appActions.modal(true));
        setState({...state, titleModal: 'Edit booking', action: 'edit'});
    }

    const onChangePage = (page) => {
        console.log('onChangePage')
        dispath(actions.appActions.pageChange(page));
    }

    useEffect(() => {
        err != '' && message.error(err)
    }, [err]);

    return (
        <div>
            <Row justify="center">
                <Col span={20}>
                    <NavBar username={authenState.username} onLogout={onLogout}/>
                    <ActionsPanel role={authenState.role} onNewBooking={onNewBooking}/>
                    <ListContainer bookings={bookingState.bookings} onClickItem={onClickItem} page={appState.page}
                    pageSize={config.pageSize} onChangePage={onChangePage} totalPage={appState.totalPage}/>
                </Col>
            </Row>
           <BKModal action={state.action} title={state.titleModal} visible={appState.visibleModal}
           role={authenState.role}
           footer={null}
           item={bookingState.selected_booking}
           maskClosable={false}
           events={bookingState.events}
           statuses={state.action == 'new' ? bookingState.status.filter(sta => sta.name !== 'Approved') : bookingState.status}
           onFinish={state.action == 'new' ? onCreateBooking : onEditItem}
           onCancel={() => dispath(actions.appActions.modal(false))}/>

                <Spin size="large" spinning={appState.loading} />
        </div>
    )
}

export default DashboardPage;