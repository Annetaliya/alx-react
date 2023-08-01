import React from 'react';


export default function NotificationItem ({ type, html, value }) {
    return (
        <>
        {type && value ? <li data-notification-type={type}>{value}</li> : null}
        {html ? <li data-urgent dangerouslySetInnerHT={{__html: html}}></li> : null}
        </>
    );


}