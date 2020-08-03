/* eslint-disable no-undef */
const byId = (id) => element(by.id(id));

describe('Login flow', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should login successfully', async () => {
    await expect(byId('EmailInput')).toBeVisible();

    await byId('EmailInput').typeText('accenture@com');
    await byId('PasswordInput').typeText('1234*');
    await byId('LoginButton').tap();

    await expect(byId('Home')).toBeVisible();
  });
});
