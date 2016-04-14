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

//a screen to be added

1. Ttitle
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

## Configuration

### Title

The [`title`]({% slug api_dialog_kendouiforreact %}#title) property of the Dialog defines the title of the component by accepting `string` parameters.  

```html-preview

```
```jsx

```

### State

The Dialog enables you to set specific actions to be taken upon its closing by the user through setting the [`onClose`] property.

```html-preview

```
```jsx

```

## Keyboard Navigation

Below is the list with the keyboard shortcuts the Slider supports.

| SHORTCUT                            | DESCRIPTION         |
|:---                                 |:---                 |
| `...` keys    | Increase the displayed Dialog value with a small step. |
| `...` keys    | Decrease the displayed Dialog value with a small step. |


## Accessibility

The Dialog is WAI ARIA-accessible through the `Tab` key. The `aria-valuemin`, `aria-valuemax`, and `aria-valuetext` properties define the accessibility values when the user drags the handle of the Dialog or interacts with the Dialog through its buttons.

## Responsiveness

One of the solutions for dynamic resizing in React applications is the [`css-element-queries`](http://marcj.github.io/css-element-queries/) package. It provides resize events using CSS and can be easily implemented along with the Kendo UI Dialog for React.

For an example of a possible implementation, refer to [this GitHub repository](https://github.com/telerik/kendo-react-inputs/blob/master/examples/cdn.html).

## Suggested Links

* [Client-Side API Reference for the Kendo UI Dialog Component]({% slug api_dialog_kendouiforreact %})
