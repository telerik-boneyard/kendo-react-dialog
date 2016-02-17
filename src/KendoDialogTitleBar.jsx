import * as React from 'react';

import styles from '@telerik/kendo-theme-default/styles/main';

const KendoDialogTitleBar = (props) => (
    <div className={styles.reset + " " + styles.header + " " + styles['window-titlebar']}>
        <span className={styles['window-title']}>{props.children}</span>

        <div className={styles['window-actions']}>
            <span className={styles['window-action'] + " " + styles.button} role="button">
                &#x274c;
            </span>
        </div>
    </div>
);

KendoDialogTitleBar.propTypes = {
    children: React.PropTypes.node
};

export default KendoDialogTitleBar;
