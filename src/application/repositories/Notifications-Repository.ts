import { Notification } from "../entities/notification";

export abstract class NotificationRepository {
    abstract create(notification: Notification): Promise<void>;
}

export class FakeNotificationRepository extends NotificationRepository {
    create(notification: Notification): Promise<void> {
        // throw new Error("Method not implemented.");
        console.log(Notification)
        return new Promise <void> ((resolve, reject) => {
            resolve ()
        }) 
    }

}