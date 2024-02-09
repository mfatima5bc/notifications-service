import { Content } from "./content"
import { Notification } from "./notification"

describe('Notification', () => {
  it('Should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Compra de 250 feita em onlyfans com cartão final 5509'),
      category: 'financial',
      recipientId: 'example-user-123',
    });

    expect(notification).toBeTruthy()
  })
})