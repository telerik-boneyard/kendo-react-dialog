import * as React from 'react';

import styles from '@telerik/kendo-theme-default/styles/main';
import classNames from 'classnames';

const KendoDialogTitleBar = (props) => {
    const titleBarClasses = classNames(
        styles.reset, styles.header, styles['window-titlebar']
    );

    const buttonClasses = classNames(
        styles['window-action'], styles.button
    );

    return (
        <div className={titleBarClasses}>
            <span className={styles['window-title']}>{props.children}</span>

            <div className={styles['window-actions']}>
                <span className={buttonClasses} role="button">
                    &#x274c;
                </span>
            </div>
        </div>
    );
};

KendoDialogTitleBar.propTypes = {
    children: React.PropTypes.node
};

export default KendoDialogTitleBar;
