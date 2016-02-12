import * as React from 'react';

import styles from '@telerik/kendo-theme-default/styles/main';
import KendoDialogTitleBar from '../src/KendoDialogTitleBar';

const KendoDialog = (props) => (
    <div className={styles.widget + " " + styles.window}>
        <KendoDialogTitleBar>{props.title}</KendoDialogTitleBar>

        <div className={styles.content + " " + styles['window-content']}>
            {props.children}
        </div>
    </div>
);

KendoDialog.propTypes = {
    children: React.PropTypes.node,
    title: React.PropTypes.string
};

export default KendoDialog;
