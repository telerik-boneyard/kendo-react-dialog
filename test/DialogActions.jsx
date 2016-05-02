import * as React from 'react';
import { shallow } from 'enzyme';
import DialogActions from '../src/DialogActions';
import { Button } from '@telerik/kendo-react-buttons';

describe('DialogActions', () => {
    it('renders div', () => {
        const dialogActions = shallow(<DialogActions actions={[ { text: 'OK' } ]} />);

        expect(dialogActions.type()).toEqual('div');
    });

    it('renders buttons for each action', () => {
        const actions = [ { text: 'Yes' }, { text: 'No' } ];
        const dialogActions = shallow(<DialogActions actions={actions} />);

        const buttons = dialogActions.find('Button');

        expect(buttons.length).toBe(2);
        expect(buttons.nodes[0].props.children).toBe('Yes');
        expect(buttons.nodes[1].props.children).toBe('No');
    });

    it('accepts button instances for actions', () => {
        const actions = [ <Button key="1">(image)</Button> ];
        const dialogActions = shallow(<DialogActions actions={actions} />);

        const buttons = dialogActions.find('Button');

        expect(buttons.length).toBe(1);
        expect(buttons.nodes[0].props.children).toBe('(image)');
    });

    it('onAction handler is called when action is clicked', () => {
        const spy = jasmine.createSpy('click');
        const dialogActions = shallow(
            <DialogActions onAction={spy} actions={[ { text: 'OK' } ]} />
        );

        dialogActions.find('Button').simulate('click');
        expect(spy).toHaveBeenCalled();
    });

    it('provides clicked action to onAction handler', () => {
        const spy = jasmine.createSpy('click');
        const ok = { primary: true, text: 'OK' };
        const cancel = { text: 'Cancel' };

        const dialogActions = shallow(
            <DialogActions onAction={spy} actions={[ ok, cancel ]} />
        );

        const buttons = dialogActions.find('Button');
        buttons.first().simulate('click');
        buttons.last().simulate('click');

        expect(spy).toHaveBeenCalledWith({ action: cancel });
        expect(spy).toHaveBeenCalledWith({ action: ok });
    });

    it('passed object is used to populate button', () => {
        const dialogActions = shallow(
            <DialogActions actions={[ { primary: true, text: 'Yup' } ]} />
        );

        const buttons = dialogActions.find('Button');

        expect(buttons.nodes[0].props.primary).toBe(true);
        expect(buttons.nodes[0].props.children).toBe('Yup');
    });
});

