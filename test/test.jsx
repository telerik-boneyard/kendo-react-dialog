import * as React from 'react';
import { shallow } from 'enzyme';
import KendoDialog from '../src/KendoDialog';
import KendoDialogTitleBar from '../src/KendoDialogTitleBar';
import KendoDialogActions from '../src/KendoDialogActions';
import { KendoButton } from '@telerik/kendo-react-button';

describe('KendoDialog', () => {
    it('renders a div', () => {
        const dialog = shallow(<KendoDialog />);

        expect(dialog.type()).toEqual('div');
    });

    it('does not render the title prop', () => {
        const dialog = shallow(<KendoDialog title="Foo" />);

        expect(dialog.prop('title')).not.toEqual('Foo');
    });

    it('renders passed children', () => {
        const dialog = shallow(
            <KendoDialog>
                <div className="foo" />
            </KendoDialog>
        );

        expect(dialog.contains(<div className="foo" />)).toBe(true);
    });

    it('renders a title bar', () => {
        const dialog = shallow(<KendoDialog title="Foo" />);

        const titleBar = dialog.find('KendoDialogTitleBar');

        expect(titleBar.length).not.toBe(0);
        expect(titleBar.prop('children')).toBe('Foo');
    });

    it('should not render actions if not passed', () => {
        const dialog = shallow(<KendoDialog />);

        expect(dialog.find('KendoDialogActions').length).toBe(0);
    });
});

describe('KendoDialogTitleBar', () => {
    it('should render a div', () => {
        const titleBar = shallow(<KendoDialogTitleBar />);

        expect(titleBar.type()).toEqual('div');
    });

    it('renders passed children', () => {
        const titleBar = shallow(
            <KendoDialogTitleBar>
                <i className="icon" />

                Title
            </KendoDialogTitleBar>
        );

        expect(titleBar.contains(<i className="icon" />)).toBe(true);
        expect(titleBar.contains("Title")).toBe(true);
    });

    it('onClose handler is called when close button is clicked', () => {
        const spy = jasmine.createSpy('click');
        const dialogActions = shallow(<KendoDialogTitleBar onClose={spy} />);

        dialogActions.find('.k-button').simulate('click');

        expect(spy).toHaveBeenCalled();
    });
});

describe('KendoDialogActions', () => {
    it('renders div', () => {
        const dialogActions = shallow(<KendoDialogActions actions={[ 'OK' ]} />);

        expect(dialogActions.type()).toEqual('div');
    });

    it('renders buttons for each action', () => {
        const actions = [ 'Yes', 'No' ];
        const dialogActions = shallow(<KendoDialogActions actions={actions} />);

        const buttons = dialogActions.find('KendoButton');

        expect(buttons.length).toBe(2);
        expect(buttons.nodes[0].props.children).toBe('Yes');
        expect(buttons.nodes[1].props.children).toBe('No');
    });

    it('accepts button instances for actions', () => {
        const actions = [ <KendoButton key="1">(image)</KendoButton> ];
        const dialogActions = shallow(<KendoDialogActions actions={actions} />);

        const buttons = dialogActions.find('KendoButton');

        expect(buttons.length).toBe(1);
        expect(buttons.nodes[0].props.children).toBe('(image)');
    });

    it('onClose handler is called when action is clicked', () => {
        const spy = jasmine.createSpy('click');
        const dialogActions = shallow(
            <KendoDialogActions onClose={spy} actions={[ 'OK' ]} />
        );

        dialogActions.find('KendoButton').simulate('click');
        expect(spy).toHaveBeenCalled();
    });
});
