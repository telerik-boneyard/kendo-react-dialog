import * as React from 'react';

import styles from '@telerik/kendo-theme-default/styles/dialog/main';
import { KendoButton } from '@telerik/kendo-react-button';

const KendoDialogActions = (props) => (
    <div className={styles['action-buttons']}>
        {props.actions.map(
            action => {
                let button = action;

                if (typeof button == "string") {
                    button = (
                        <KendoButton key={action} onClick={props.onClose}>
                            {action}
                        </KendoButton>
                    );
                }

                return button;
            }
        )}
    </div>
);

KendoDialogActions.propTypes = {
    actions: React.PropTypes.arrayOf(
        React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.node
        ])
    ),
    onClose: React.PropTypes.func
};

export default KendoDialogActions;
