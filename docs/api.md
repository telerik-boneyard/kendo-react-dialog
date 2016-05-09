---
title: API
page_title: API | Kendo UI Dialog for React
description: "Configure and customize the Kendo UI Dialog for React through its API reference."
slug: api_dialog_kendouiforreact
position: 2
---

# Dialog API

Represents the Kendo UI Dialog component for React.

## Title

#### title `String|Boolean`

Defines the title of the component. When set to `false`, the title bar is not displayed.

## Events

#### onClose `Function`

As a stateless component, the Dialog fires its `onClose` event handler every time when a button is clicked. The function should be handled by its parent component.

## Buttons

#### actions `Array`

Displays buttons for interacting with the Dialog. Accepts `Object` or `React.Component` instances.

* When an item is an `Object`, it is passed as props to a Kendo UI Button component for React. When the button is clicked, the object is passed as a parameter of the `onClose` function.
* When an item is a `React.Component`, it is rendered in the button area. Components do not trigger the `onClose` function automatically, and need to handle their click events manually.

#### action `Object`

Indicates which button triggered the closing of the Dialog. Passes the complete object provided in the `actions` array. This field is `undefined` when the title bar **Close** button is clicked.
