import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';

export default function Notifications () {
    const notificationData = [{
        type: 'info',
        html: '<strong>Important:</strong> Please read this!',
        value: 'A notification with HTML content',

    },
    {
        type: 'error',
        html: '<em>Error:</em> Something went wrong.',
        value: 'An error notification',
    }
];
    return (
        <div className="Notifications">
        
            <p>Here is the list of notifications</p>
            <ul>
                {notificationsData.map((notifications, index) => {
                    <NotificationItem key={index} {...notification} />
                })}
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
