// tslint:disable no-console strict-boolean-expressions
// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read http://bit.ly/CRA-PWA

const isLocalhost: boolean = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

type Config = {
  onSuccess? (registration: ServiceWorkerRegistration): void;
  onUpdate? (registration: ServiceWorkerRegistration): void;
};

export function register (config?: Config): void {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    const publicUrl: URL = new URL(process.env.PUBLIC_URL, window.location.href);

    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', async (): Promise<void> => {
      const swUrl: string = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        await checkValidServiceWorker(swUrl, config);

        // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.
        await navigator.serviceWorker.ready;

        console.log('This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA');
      } else {
        // Is not localhost. Just register service worker
        await registerValidSW(swUrl, config);
      }
    });
  }
}

async function registerValidSW (swUrl: string, config?: Config): Promise<void> {
  try {
    const registration: ServiceWorkerRegistration = await navigator.serviceWorker.register(swUrl);

    registration.onupdatefound = (): void => {
      const installingWorker: ServiceWorker | null = registration.installing;

      if (installingWorker === undefined || installingWorker === null) {
        return;
      }

      installingWorker.onstatechange = (): void => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA.');

            // Execute callback
            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.');

            // Execute callback
            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  } catch (e) {
    console.error('Error during service worker registration:', e);
  }
}

async function checkValidServiceWorker (swUrl: string, config?: Config): Promise<void> {
  try {
    // Check if the service worker can be found. If it can't reload the page.
    const response: Response = await fetch(swUrl);

    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType: string | null = response.headers.get('content-type');

    if (
      response.status === 404 ||
      (contentType !== undefined && contentType !== null && contentType.indexOf('javascript') === -1)
    ) {
      // No service worker found. Probably a different app. Reload the page.
      const registration: ServiceWorkerRegistration = await navigator.serviceWorker.ready;

      await registration.unregister();

      window.location.reload();
    } else {
      // Service worker found. Proceed as normal.
      await registerValidSW(swUrl, config);
    }
  } catch (e) {
    console.log('No internet connection found. App is running in offline mode.');
  }
}

export async function unregister (): Promise<void> {
  if ('serviceWorker' in navigator) {
    const registration: ServiceWorkerRegistration = await navigator.serviceWorker.ready;

    await registration.unregister();
  }
}