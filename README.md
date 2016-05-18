[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![npm version](https://badge.fury.io/js/%40telerik%2Fkendo-react-dialog.svg)](https://badge.fury.io/js/%40telerik%2Fkendo-react-dialog)
[![Build Status](https://travis-ci.org/telerik/kendo-react-dialog.svg?branch=master)](https://travis-ci.org/telerik/kendo-react-dialog)

## Kendo UI Dialog for React

* [Overview](https://github.com/telerik/kendo-react-dialog#overview)
* [Basic Usage](https://github.com/telerik/kendo-react-dialog#basic-usage)
* [Installation](https://github.com/telerik/kendo-react-dialog#installation)
* [Browser Support](https://github.com/telerik/kendo-react-dialog#browser-support)
* [Glossary](https://github.com/telerik/kendo-react-dialog#glossary)
  * [Component](https://github.com/telerik/kendo-react-dialog#component)
  * [Package](https://github.com/telerik/kendo-react-dialog#package)

## Overview

This repository contains the source code and documentation of the Kendo UI Dialog package for React.

For more information on upcoming Dialog features, refer to the [Roadmap](https://github.com/telerik/kendo-react-dialog/blob/master/docs/roadmap.md).

## Basic Usage

The Dialog asks users for input, blocking other parts of the page.

```html-preview
    <div id="app"></div>
```
```jsx
    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = { welcomeShown: false };
            this.closeHandler = this.onClose.bind(this);
        }

        onClose() {
            this.setState({ welcomeShown: true });
        }

        render() {
            const dialog = (
                <Dialog
                    modal
                    actions={[ "OK" ]}
                    title="You can do anything."
                    onClose={this.closeHandler}
                >
                    Welcome to Zombo.com.
                </Dialog>
            );

            return (
                <section>
                    { !this.state.welcomeShown ? dialog : null }

                    <p>Anything at all.</p>
                </section>
            );
        }
    };

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );

```

For more examples and available configuration options, refer to the [Dialog documentation](https://github.com/telerik/kendo-react-dialog/tree/master/docs/index.md).

## Installation

The Dialog is published as a [public scoped NPM package](https://docs.npmjs.com/misc/scope) in the [Telerik organization](https://www.npmjs.com/~telerik) in http://npmjs.org/.

Install it using NPM.

```sh
npm install --save @telerik/kendo-react-dialog;
```

Once installed, import the module.

```jsx
// ES2015 module syntax
import { Dialog } from 'kendo-react-dialog';
```
```jsx
// CommonJS format
var Dialog = require('kendo-react-dialog').Dialog;
```

## Browser Support

The Dialog component works in all browsers supported by the React framework&mdash;Internet Explorer 9 and later versions.

## Glossary

Below are explained the basic terms that Kendo UI suite for React applies.

### Component

A Component refers to a [React Component](https://facebook.github.io/react/docs/jsx-in-depth.html#html-tags-vs.-react-components).

### Package

A package contains one or more components, developed in a single repository and distributed in a single NPM package.
