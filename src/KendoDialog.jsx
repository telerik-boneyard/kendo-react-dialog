import * as React from 'react';

import styles from '@telerik/kendo-theme-default/styles/dialog/main';
import KendoDialogTitleBar from '../src/KendoDialogTitleBar';
import KendoDialogActions from '../src/KendoDialogActions';
import classNames from 'classnames';

const KendoDialog = (props) => {
    const wrapperClasses = classNames(styles.widget, styles.window);

    const contentClasses = classNames(styles.content, styles['window-content']);

    return (
        <div className={wrapperClasses}>
            <KendoDialogTitleBar>{props.title}</KendoDialogTitleBar>

            <div className={contentClasses}>
                {props.children}
            </div>

            {props.actions ? <KendoDialogActions actions={props.actions} /> : null}
        </div>
    );
};

KendoDialog.propTypes = Object.assign({}, KendoDialogActions.propTypes, {
    children: React.PropTypes.node,
    title: React.PropTypes.string
});

export default KendoDialog;
