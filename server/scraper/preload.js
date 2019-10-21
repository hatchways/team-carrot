// overwrite the `languages` property to use a custom getter
Object.defineProperty(navigator, "languages", {
    get: function() {
        return ["en-US", "en"];
    }
});

// overwrite the `plugins` property to use a custom getter
Object.defineProperty(navigator, 'plugins', {
    get: function() {
        // this just needs to have `length > 0`, but we could mock the plugins too
        return [1, 2, 3, 4, 5];
    }
});
// Pass web driver test
Object.defineProperty(navigator, 'webdriver', {
    get: () => false,
});

// Avoid chrome test
window.navigator.chrome = {
    runtime: {}
    // etc.
};
// pass through to the original navigator.permissions.query method if the query name isn’t notifications
const originalQuery = window.navigator.permissions.query;
return window.navigator.permissions.query = (parameters) => (
    parameters.name === 'notifications' ?
    Promise.resolve({ state: Notification.permission }) :
    originalQuery(parameters)
);