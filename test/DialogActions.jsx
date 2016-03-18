import * as React from 'react';
import { shallow } from 'enzyme';
import DialogActions from '../src/DialogActions';
import { Button } from '@telerik/kendo-react-buttons';

describe('DialogActions', () => {
    it('renders div', () => {
        const dialogActions = shallow(<DialogActions actions={[ 'OK' ]} />);

        expect(dialogActions.type()).toEqual('div');
    });

    it('renders buttons for each action', () => {
        const actions = [ 'Yes', 'No' ];
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

    it('onClose handler is called when action is clicked', () => {
        const spy = jasmine.createSpy('click');
        const dialogActions = shallow(
            <DialogActions onClose={spy} actions={[ 'OK' ]} />
        );

        dialogActions.find('Button').simulate('click');
        expect(spy).toHaveBeenCalled();
    });
});

