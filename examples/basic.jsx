import * as React from 'react';
import ReactDOM from 'react-dom';
import { Dialog } from '@telerik/kendo-react-dialog';

ReactDOM.render(
  <Dialog actions={[ 'OK' ]} title="Loss of data">
    <p>This operation will result in loss of data.</p>
    <p>Are you sure you want to continue?</p>
  </Dialog>,
  document.getElementById('app')
);
