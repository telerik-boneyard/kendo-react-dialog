import * as React from 'react';
import { shallow } from 'enzyme';
import KendoDialog from '../src/KendoDialog';
import KendoDialogTitleBar from '../src/KendoDialogTitleBar';

describe('KendoDialog', () => {
    it('should render a div', () => {
        const dialog = shallow(<KendoDialog />);

        expect(dialog.type()).toEqual('div');
    });

    it('does not render the title prop', () => {
        const dialog = shallow(<KendoDialog title="Foo" />);

        expect(dialog.prop('title')).not.toEqual('Foo');
    });

    it('renders children when passed in', () => {
        const dialog = shallow(
            <KendoDialog>
                <div className="foo" />
            </KendoDialog>
        );

        expect(dialog.contains(<div className="foo" />)).toBe(true);
    });

    it('renders title bar', () => {
        const dialog = shallow(<KendoDialog title="Foo" />);

        const titleBar = dialog.find('KendoDialogTitleBar');

        expect(titleBar.length).not.toBe(0);
        expect(titleBar.prop('children')).toBe('Foo');
    });
});

describe('KendoDialogTitleBar', () => {
    it('should render a div', () => {
        const dialog = shallow(<KendoDialogTitleBar />);

        expect(dialog.type()).toEqual('div');
    });

    it('should render children props', () => {
        const dialog = shallow(
            <KendoDialogTitleBar>
                <i className="icon" />

                Title
            </KendoDialogTitleBar>
        );

        expect(dialog.contains(<i className="icon" />)).toBe(true);
        expect(dialog.contains("Title")).toBe(true);
    });
});
