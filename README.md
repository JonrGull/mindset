# Testing

## This is the testing branch which using [Playwright](https://playwright.dev/) to handle E2E testing.

<br> 
You can run the test by using the following command:

```bash
npx playwright test
```

## Or you can install the VsCode extension [Playwright Test for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright).

<br>

# Install

- Install all packages and start the server.

      yarn install && yarn dev

## Environmental variables

- A firebase account and web app is needed to run this app.
- Use the `example.env.local` to fill in your firebase credentials.
- Add these variables to their corresponding values found in your firebase project settings:

      NEXT_PUBLIC_API_KEY=
      NEXT_PUBLIC_AUTH_DOMAIN=
      NEXT_PUBLIC_PROJECT_ID=
      NEXT_PUBLIC_STORAGE_BUCKET=
      NEXT_PUBLIC_MESSAGING_SENDER_ID=
      NEXT_PUBLIC_APP_ID=
