import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

export default function Notifications () {
    return (
        <div className="Notifications">
        
            <p>Here is the list of notifications</p>
            <ul>
                <NotificationItem type="default" value="New course available" />
                <NotificationItem type="urgent" value="New resume available" />
                <NotificationItem type="urgent" html={getLatestNotification()} />
    
            </ul>
            <button
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    padding: '5px 10px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
                aria-label="Close"
                onClick={() => console.log('Close button has been clicked')}
            >
                <img
                    src={closeIcon}
                    alt="Close Icon"
                />
            </button>
        </div>
    );
}
