import { Notification } from "../../src/application/entities/notification";
import { NotificationRepository } from "../../src/application/repositories/Notifications-Repository";

export class InMemorynotificationsRepository 
    implements NotificationRepository 
    {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
