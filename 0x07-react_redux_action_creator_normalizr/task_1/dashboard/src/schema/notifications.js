import * as notificationData from '../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAtrribute: 'guid' });
const notification = new schema.Entity('notifications', {
    author: user,
    context: message
});

const normalized = normalize(notificationData, [notification]);


export default function getAllNotificationsByUser(userId) {
    return notificationData.filter(obj => obj.author.id === userId)
}

export { normalized };