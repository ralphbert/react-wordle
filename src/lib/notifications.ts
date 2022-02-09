import {NotificationInstance} from 'rc-notification/lib/Notification';
import Notification from 'rc-notification';

let notificationInstance: NotificationInstance | null = null;
Notification.newInstance({
    style: {
        top: 0,
        right: '1em',
        left: 'auto',
    }
}, n => {
    notificationInstance = n;
});

export function notify(content: string) {
    notificationInstance?.notice({
        content
    });
}
