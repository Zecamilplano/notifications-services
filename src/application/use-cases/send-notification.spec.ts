import { InMemorynotificationsRepository } from "../../../test/repositories/in-memory-notification-repositories";
import { FakeNotificationRepository } from "../repositories/Notifications-Repository";
import { SendNotification } from "./send-notification"


describe('Send notification', () => {
    it('should be able to send a notification', async () => {
        const NotificationRepository = new InMemorynotificationsRepository()
        const sendNotification = new SendNotification( new FakeNotificationRepository());
        
        const {notification} = await sendNotification.execute({
            content: 'This is a notification',
            category: 'social',
            recipientId: 'example-recipient-id',
        });

        expect(NotificationRepository.notifications).toHaveLength(1)
        expect(NotificationRepository.notifications[0]).toEqual(notification)
    });
}); 