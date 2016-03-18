import * as React from 'react';

import styles from '@telerik/kendo-theme-default/styles/dialog/main';
//import Animation from '@telerik/kendo-react-animation';
import DialogTitleBar from '../src/DialogTitleBar';
import DialogActions from '../src/DialogActions';
import classNames from 'classnames';

const Dialog = (props) => {
    const wrapperClasses = classNames(styles.widget, styles.window);

    const contentClasses = classNames(styles.content, styles['window-content']);

    let overlay = null;
    if (props.modal) {
        overlay = (
            <div className={styles.overlay} onClick={props.onClose}></div>
        );
    }

    let actions = null;
    if (props.actions) {
        actions = (
            <DialogActions actions={props.actions} onClose={props.onClose} />
        );
    }

    return (
        <div>
            {overlay}

            {/*<Animation effect="k-top">*/}
                <div className={wrapperClasses}>
                    <DialogTitleBar onClose={props.onClose}>
                        {props.title}
                    </DialogTitleBar>

                    <div className={contentClasses}>
                        {props.children}
                    </div>

                    {actions}
                </div>
            {/*</Animation>*/}
        </div>
    );
};

Dialog.propTypes = Object.assign({}, DialogActions.propTypes, {
    children: React.PropTypes.node,
    onClose: React.PropTypes.func,
    title: React.PropTypes.string
});

export default Dialog;
