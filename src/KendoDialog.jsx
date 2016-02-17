import * as React from 'react';

import styles from '@telerik/kendo-theme-default/styles/dialog/main';
import KendoDialogTitleBar from '../src/KendoDialogTitleBar';
import KendoDialogActions from '../src/KendoDialogActions';

const KendoDialog = (props) => (
    <div className={styles.widget + " " + styles.window}>
        <KendoDialogTitleBar>{props.title}</KendoDialogTitleBar>

        <div className={styles.content + " " + styles['window-content']}>
            {props.children}
        </div>

        {props.actions ? <KendoDialogActions actions={props.actions} /> : null}
    </div>
);

KendoDialog.propTypes = Object.assign({}, KendoDialogActions.propTypes, {
    children: React.PropTypes.node,
    title: React.PropTypes.string
});

export default KendoDialog;
