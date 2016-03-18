import * as React from 'react';
import ReactDOM from 'react-dom';
import { Dialog } from '@telerik/kendo-react-dialog';
import { Button } from '@telerik/kendo-react-buttons';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { sessionExpired: true };
        this.openHandler = this.onOpen.bind(this);
        this.closeHandler = this.onClose.bind(this);
    }

    onClose() {
        this.setState({ sessionExpired: false });
    }

    onOpen() {
        this.setState({ sessionExpired: true });
    }

    render() {
        const dialog = (
            <Dialog
                actions={[ 'OK' ]}
                modal={true}
                onClose={this.closeHandler}
                title="Session expired"
            >
              <p>Your session has expired.</p>
              <p>You have been signed out.</p>
            </Dialog>
        );

        const button = (
            <Button onClick={this.openHandler}>Open dialog</Button>
        );

        return (
            <section>
                { this.state.sessionExpired ? dialog : button }
            </section>
        );
    }
};


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
