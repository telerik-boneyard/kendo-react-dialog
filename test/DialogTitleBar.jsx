import * as React from 'react';
import { shallow } from 'enzyme';
import DialogTitleBar from '../src/DialogTitleBar';

describe('DialogTitleBar', () => {
    it('should render a div', () => {
        const titleBar = shallow(<DialogTitleBar />);

        expect(titleBar.type()).toEqual('div');
    });

    it('renders passed children', () => {
        const titleBar = shallow(
            <DialogTitleBar>
                <i className="icon" />

                Title
            </DialogTitleBar>
        );

        expect(titleBar.contains(<i className="icon" />)).toBe(true);
        expect(titleBar.contains("Title")).toBe(true);
    });

    it('onClose handler is called when close button is clicked', () => {
        const spy = jasmine.createSpy('click');
        const dialogActions = shallow(<DialogTitleBar onClose={spy} />);

        dialogActions.find('.k-button').simulate('click');

        expect(spy).toHaveBeenCalled();
    });
});


