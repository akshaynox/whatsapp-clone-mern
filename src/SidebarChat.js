import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'

export const SidebarChat = () => {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat_info">
                <h2>Room name</h2>
                <p>Last message</p>
            </div>
        </div>
    )
}
