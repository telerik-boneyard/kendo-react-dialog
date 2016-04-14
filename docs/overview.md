---
title: Overview
page_title: Overview | Kendo UI Dialog for React
description: "Use the Kendo UI Dialog component in a React project."
slug: overview_dialog_kendouiforreact
position: 1
---

# Dialog Overview

The Kendo UI Dialog for React is a component that lets developers ask for user input via a modal dialog. The component provides an easy way to specify the content and actions that are provided to the user.

The Kendo UI Dialog for React is distributed via the Dialog `npm` package of the Kendo UI suite for React.

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
          console.log(e);
          this.setState({ confirmation: true });
      }
      render() {
          const actions =  [ "Yes", "No" ];

          if (!this.state.confirmation) {
              return (
                  <KendoReactDialog.Dialog
                      modal
                      title="Action required"
                      actions={actions}
                      onClose={this.onClose.bind(this)}
                  >
                      Do you accept?
                  </KendoReactDialog.Dialog>
              );
          } else {
              return (
                  <span>Confirmed: { this.state.confirmation }.</span>
              );
          }
      }
  }

  ReactDOM.render(
      <DialogContainer />,
      document.getElementById('app')
  );
```
