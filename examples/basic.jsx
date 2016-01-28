import * as React from 'react';
import ReactDOM from 'react-dom';
import KendoDialog from '../src/kendo-dialog';

ReactDOM.render(
  <KendoDialog title="Loss of data">
    <p>This operation will result in loss of data.</p>
    <p>Are you sure you want to continue?</p>

    <button className="k-button k-primary">Yep</button>
    <button className="k-button">Nope</button>
  </KendoDialog>,
  document.getElementById('app')
);
