import * as React from 'react';

const KendoDialogTitleBar = (props) => (
  <div className="k-reset k-window-titlebar k-header">
    <span className="k-window-title">{props.children}</span>
  </div>
);

KendoDialogTitleBar.propTypes = {
  children: React.PropTypes.node
};

export default KendoDialogTitleBar;
