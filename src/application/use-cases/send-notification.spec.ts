import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notification-repository";
import { SendNotification } from "./send-notification";


describe('Send notification', () => {

  it('Should be able to send a notification', async () => {
    const repository = new InMemoryNotificationsRepository();
    const sut = new SendNotification(repository);
    const { notification } = await sut.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
    expect(repository.notifications).toHaveLength(1);
  })
})
