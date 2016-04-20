import * as React from 'react';

import styles from '@telerik/kendo-theme-default/styles/dialog/main';
import { Animation } from '@telerik/kendo-react-animation';
import DialogTitleBar from '../src/DialogTitleBar';
import DialogActions from '../src/DialogActions';
import classNames from 'classnames';

const Dialog = (props) => {
    const hasTitle = props.title !== false;

    const wrapperClasses = classNames({
        [styles.widget]: true,
        [styles.window]: true,
        [styles.centered]: true,
        [styles['window-titleless']]: !hasTitle
    });

    const contentClasses = classNames(styles.content, styles['window-content']);

    let actions = null;
    if (props.actions) {
        actions = (
            <DialogActions actions={props.actions} onAction={props.onClose} />
        );
    }

    let title = null;
    if (hasTitle) {
        title = (
            <DialogTitleBar onClose={props.onClose}>
                {props.title}
            </DialogTitleBar>
        );
    }

    return (
        <div className={styles['dialog-wrapper']}>
            <div className={styles.overlay} onClick={props.onClose}></div>

            <Animation
                transitionAppear
                transitionAppearTimeout={300}
                transitionName={{
                    appear: styles['slide-in-appear'],
                    appearActive: styles['slide-in-appear-active']
                }}
            >
                <div className={wrapperClasses}>
                    {title}

                    <div className={contentClasses}>
                        {props.children}
                    </div>

                    {actions}
                </div>
            </Animation>
        </div>
    );
};

Dialog.propTypes = Object.assign({}, DialogActions.propTypes, {
    children: React.PropTypes.node,
    onClose: React.PropTypes.func,
    title: React.PropTypes.oneOfType([
        React.PropTypes.bool,
        React.PropTypes.string
    ])
});

export default Dialog;
