import * as React from 'react';
import ReactDOM from 'react-dom';
import { KendoDialog } from '@telerik/kendo-react-dialog';

ReactDOM.render(
  <KendoDialog actions={[ 'OK' ]} title="Loss of data">
    <p>This operation will result in loss of data.</p>
    <p>Are you sure you want to continue?</p>
  </KendoDialog>,
  document.getElementById('app')
);
