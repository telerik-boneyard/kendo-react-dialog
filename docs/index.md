---
title: Overview
page_title: Overview | Kendo UI Dialog for React
description: "Use the Kendo UI Dialog component in a React project."
slug: overview_dialog_kendouiforreact
position: 1
---

# Dialog Overview (draft)

The Kendo UI Dialog for React is a component that communicates information to the user and prompts them for a response through a modal dialog. It provides an easy way to display specific content to the audience and encourage the user to take a specific action.

The Kendo UI Dialog for React is part of the Dialog `npm` package of the Kendo UI suite for React.

**Figure 1. A template of the Kendo UI Dialog for React**

// TODO: add screenshot

1. Title
2. Interaction buttons
3. Content area

## Demos

### Default Setup

The example below demonstrates the default setup of a Kendo UI Dialog for React.

```html-preview
<div id="app"></div>
```
```jsx
class DialogContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { confirmation: false };
    }
    onClose(e) {
        this.setState({
            confirmation: true,
            action: e.action
        });
    }
    render() {
        const actions =  [ "Yes", "No" ];

        if (!this.state.confirmation) {
            return (
                <KendoReactDialog.Dialog
                    title="Action required"
                    actions={actions}
                    onClose={this.onClose.bind(this)}
                >
                    <p>Entropy happened.</p>
                    <p>Do you accept?</p>
                </KendoReactDialog.Dialog>
            );
        } else {
            return (
                <div>
                  <p>Confirmed: { this.state.action }.</p>

                  <button onClick={ () => this.setState({ confirmation: false }) }>
                      Ask again
                  </button>
                </div>
            );
        }
    }
}

ReactDOM.render(
    <DialogContainer />,
    document.getElementById('app')
);
```

## Configuration

### Title

The [`title`]({% slug api_dialog_kendouiforreact %}#title-string) property of the Dialog defines the title that the component will render.

```html-preview
<div id="app"></div>
```
```jsx
ReactDOM.render(
    <KendoReactDialog.Dialog title="Impressive title">
      No need for content, look at the awesome title!
    </KendoReactDialog.Dialog>,
    document.getElementById('app')
);
```

Setting `title: false` will instruct the component to render no title.

```html-preview
<div id="app"></div>
```
```jsx
ReactDOM.render(
    <KendoReactDialog.Dialog title={false}>
      <p>Subscribe to our newsletter!</p>
      <p>
          <input placeholder="Your e-mail here" />
          <button>I gladly accept</button>
      </p>
      <p>Resistance is futile.</p>
    </KendoReactDialog.Dialog>,
    document.getElementById('app')
);
```

The title accepts arbirary components, too.

```html-preview
<div id="app"></div>
```
```jsx
class LoadingIndicator {
  render() {
    return (
      <span>
        <img src="http://goo.gl/OAo2Mg" />
        <span> Very custom, much wow.</span>
      </span>
    );
  }
}

ReactDOM.render(
    <KendoReactDialog.Dialog title={<LoadingIndicator />}>
      And you thought the previous title was impressive!
    </KendoReactDialog.Dialog>,
    document.getElementById('app')
);
```

### State

The Dialog is designed as a astateless component. To store the state whether it is open, wrap it in a high-order component.

The [`onClose`](https://github.com/telerik/kendo-react-dialog/blob/master/docs/api.md#onclose-function) event fires each time a user clicks on a dialog button. If the button is an action button, its props are passed in the argument of the `onClose` callback.

```html-preview
<div id="app"></div>
```
```jsx
class DialogContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { confirmation: false };
    }
    onClose(e) {
        this.setState({
            confirmation: true,
            action: e.action
        });
    }
    render() {
        const actions =  [ "Yes", "No" ];

        if (!this.state.confirmation) {
            return (
                <KendoReactDialog.Dialog
                    title="Action required"
                    actions={actions}
                    onClose={this.onClose.bind(this)}
                >
                    Do you accept?
                </KendoReactDialog.Dialog>
            );
        } else {
            return (
                <div>
                  <p>Confirmed: { this.state.action }.</p>

                  <button onClick={ () => this.setState({ confirmation: false }) }>
                      Ask again
                  </button>
                </div>
            );
        }
    }
}

ReactDOM.render(
    <DialogContainer />,
    document.getElementById('app')
);
```

### Buttons

Setting the [`actions`]({% slug api_dialog_kendouiforreact %}#actions-string) configuration property allows you to display buttons for interacting with the Dialog.

```html-preview
<div id="app"></div>
```
```jsx
const actions = [
    "This is crazy!",
    "Maybe."
];

ReactDOM.render(
    <KendoReactDialog.Dialog title="I just met you..." actions={actions}>
      Call me, maybe?
    </KendoReactDialog.Dialog>,
    document.getElementById('app')
);
```

Actions can be specified as objects, which are passed to the Kendo UI Button for React. For a complete list of options, see its [API documentation](https://github.com/telerik/kendo-react-buttons/blob/master/docs/button/api.md).

```html-preview
<div id="app"></div>
```
```jsx
const actions = [
    { text: "Keep doing that", primary: true },
    { text: "Whatever", onClick: () => { alert('Whatever.') } }
];

ReactDOM.render(
    <KendoReactDialog.Dialog title="Reassuring title" actions={actions}>
      Do not worry, your data has not been deleted.
    </KendoReactDialog.Dialog>,
    document.getElementById('app')
);
```

Actions can be defined as custom components. When providing actions as components, clicking them will not trigger the onClose handler. Event handlers need to be provided explicitly on each action.

```html-preview
<div id="app"></div>
<style>button { margin: 0 1em; }</style>
```
```jsx

const actions = [
    <button>Accept</button>,
    <a href="#">Decline</a>
];

ReactDOM.render(
    <KendoReactDialog.Dialog title="Terms of service" actions={actions}>
      <p>The terms of service are not yet written.</p>
      <p>Nobody reads them anyway.</p>
    </KendoReactDialog.Dialog>,
    document.getElementById('app')
);
```

## Suggested Links

* [Client-Side API Reference for the Kendo UI Dialog Component]({% slug api_dialog_kendouiforreact %})
