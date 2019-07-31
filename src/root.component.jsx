import React from 'react'
import {Provider} from 'react-redux'

import Menu from './Menu.jsx'

class RootMenuComponent extends React.Component {

    state = {
        store: this.props.store,
        globalEventDistributor: this.props.globalEventDistributor,
    }

    componentDidMount() {
        console.log('root did mount')
    }

    componentWillMount() {
        console.log('root will mount')
    }

    componentDidCatch(error, info) {
        console.log(error, info)
    }

    render() {
        return (
            <Provider store={this.state.store}>
                <Menu globalEventDistributor={this.state.globalEventDistributor}/>
            </Provider>
        )
    }
}

export {RootMenuComponent}
