import { Notification } from "src/application/entities/notification";
import { NotificationRepository } from "src/application/repository/notification-repository";


export class InMemoryNotificationsRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }
}
