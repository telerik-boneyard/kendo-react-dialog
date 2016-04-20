---
title: Client-Side API
page_title: Client-Side API | Kendo UI Dialog for React
description: "Configure and customize the Kendo UI Dialog for React through its client-side API reference."
slug: api_dialog_kendouiforreact
position: 2
---

# Dialog Client-Side API (draft)

Represents the Kendo UI Dialog component for React.

## Title

#### title `String|Boolean`

Defines the title of the component. When set to `false`, the title bar is not displayed.

## State

#### onClose `Function`

As a stateless component, the Dialog fires its `onClose` event handler every time when a button is clicked. The function should be handled by its parent component.

##### action `Object`

Indicates which button has triggered the closing of the window. Passes the complete object provided in the `actions` array. This field is `undefined` when the titlebar close button is clicked.

## Buttons

#### actions `Array`

Displays buttons for interacting with the Dialog. Accepts `String`, `Object` and `React.Component` instances.

When an item is a `String`, a button with this string label is rendered.

When an item is an `Object`, it is passed as props to a Kendo UI Button.

When an item is a `React.Component`, it is rendered in the button area. Components do not trigger the `onClose` function automatically, and need to handle their click events manually.
