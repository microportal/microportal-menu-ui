import React from 'react'
import {connect} from 'react-redux'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import StarIcon from '@material-ui/icons/Star'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'

class Menu extends React.Component {

    componentWillMount() {
        console.log('menu will mount')
    }

    componentDidMount() {
        console.log('menu did mount')
    }

    componentDidCatch(error, info) {
        console.log(error, info)
    }

    render() {
        return (
            <div>
                <Divider/>
                <List>
                    <div>
                        <ListItem>
                            <ListItemIcon>
                                <InboxIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Dashboard"/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <StarIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Services"/>
                        </ListItem>
                    </div>
                </List>
                <Divider/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        menus: state.menus,
    }
}

export default connect(mapStateToProps, null)(Menu)
