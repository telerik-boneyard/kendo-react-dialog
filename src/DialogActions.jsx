import * as React from 'react';

import styles from '@telerik/kendo-theme-default/styles/dialog/main';
import { Button } from '@telerik/kendo-react-buttons';

const actionMethodsFrom = (props) => props.actions.map(
    (action) => (
        !React.isValidElement(action) &&
            (() => props.onAction({ action }))
    )
);

class DialogActions extends React.Component {
    constructor(props) {
        super(props);

        this.state = { actions: actionMethodsFrom(props) };
    }

    componentWillReceiveProps(nextProps) {
        this.state = { actions: actionMethodsFrom(nextProps) };
    }

    render() {
        return (
            <div className={styles['action-buttons']}>
                {this.props.actions.map(
                    (action, index) => {
                        let button = action;

                        if (!React.isValidElement(button)) {
                            button = (
                                <Button
                                    key={index}
                                    onClick={this.state.actions[index]}
                                    { ...button }
                                >
                                    {button.text}
                                </Button>
                            );
                        }

                        return button;
                    }
                )}
            </div>
        );
    }
}

DialogActions.propTypes = {
    actions: React.PropTypes.arrayOf(React.PropTypes.object),
    onAction: React.PropTypes.func
};

export default DialogActions;
