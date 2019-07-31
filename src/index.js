import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import {RootMenuComponent} from './root.component.jsx'

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: RootMenuComponent,
    domElementGetter,
})

export function bootstrap(props) {
    console.log('bootstrap menu-ui')
    return reactLifecycles.bootstrap(props)
}

export function mount(props) {
    console.log('mount menu-ui')
    return reactLifecycles.mount(props)
}

export function unmount(props) {
    console.log('unmount menu-ui')
    return reactLifecycles.unmount(props)
}

function domElementGetter() {
    return document.getElementById('menu-ui')
}
