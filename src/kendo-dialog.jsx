import * as React from 'react';

import KendoDialogTitleBar from './kendo-dialog-title-bar';

const KendoDialog = (props) => (
    <div className="k-widget k-window">
        <KendoDialogTitleBar>{props.title}</KendoDialogTitleBar>
        {props.children}
    </div>
);

KendoDialog.propTypes = {
  children: React.PropTypes.node,
  title: React.PropTypes.string
};

export default KendoDialog;
