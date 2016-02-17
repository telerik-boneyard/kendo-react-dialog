import * as React from 'react';

import styles from '@telerik/kendo-theme-default/styles/dialog/main';
import KendoButton from '@telerik/kendo-react-button/src/bundle';

const KendoDialogActions = (props) => (
    <div className={styles['action-buttons']}>
        {props.actions.map(
            action => <KendoButton key={action}>{action}</KendoButton>
        )}
    </div>
);

KendoDialogActions.propTypes = {
    actions: React.PropTypes.arrayOf(
        React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.instanceOf(KendoButton)
        ])
    )
};

export default KendoDialogActions;
