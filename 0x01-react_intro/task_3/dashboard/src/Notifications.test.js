import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';

describe('<Notififactions />', () => {
    it ('renders without crashing', () => {
        shallow(<Notifications />);
    })

    it('renders three list items', () => {
        const wrapper = shallow(<Notification />);
        expect(wrapper.find('li')).toHaveLength(3);
    })
    it('renders the text Here is the list of notifications', () => {
        const text = 'Here is the list of notifications';
        const wrapper = shallow(<Notification />);
        expect(wrapper.find('p').text()).toBe(text);
    })
})