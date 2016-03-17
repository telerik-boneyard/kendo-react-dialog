import * as React from 'react';

import styles from '@telerik/kendo-theme-default/styles/dialog/main';
import { Button } from '@telerik/kendo-react-button';

const DialogActions = (props) => (
    <div className={styles['action-buttons']}>
        {props.actions.map(
            action => {
                let button = action;

                if (typeof button == "string") {
                    button = (
                        <Button key={action} onClick={props.onClose}>
                            {action}
                        </Button>
                    );
                }

                return button;
            }
        )}
    </div>
);

DialogActions.propTypes = {
    actions: React.PropTypes.arrayOf(
        React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.node
        ])
    ),
    onClose: React.PropTypes.func
};

export default DialogActions;
