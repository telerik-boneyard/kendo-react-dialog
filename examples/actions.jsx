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

    onClose(e) {
        console.log(e);
        this.setState({ sessionExpired: false });
    }

    onOpen() {
        this.setState({ sessionExpired: true });
    }

    render() {
        const actions = [
            // Custom JSX element
            <Button onClick={ this.closeHandler }>Custom JSX</Button>,

            // Text for Kendo UI button
            "Simple text",

            // Options for Kendo UI button
            { text: "Button options", primary: true }
        ];

        const dialog = (
            <Dialog
                actions={actions}
                onClose={this.closeHandler}
                title="Example dialog"
            >
              <p>This example shows how to specify dialog actions.</p>
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
