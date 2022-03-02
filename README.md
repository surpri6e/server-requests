# server-requests@1.2.1

A package that facilitates more concise writing of a request to the server using native JavaScript methods, the documentation can be read below. Also, this package can be used in your TypeScript projects.

## Start 

**Install npm package**
```
npm i server-requests       // Installation
npm i -D server-requests    // Installation how developer dependence
npm i server-requests -g    // Global installaion
```

**Imported modules** 
```js
import { XHRServerRequest, SettingsRequest, /* settingsRequest */ } from 'server-requests';
// When using TypeScript, you can import the settingsRequest type
// Or
import * as sr from 'server-requests';
```

## Aptitude 

In this block, the main methods stored in the library will be analyzed.

### XHRServerRequest

> XHRServerRequest(options, body?)
**JS**
```js
XHRServerRequest({
    _urlServer: 'http://example.com/example',
    _responseType: 'json',
    _method: 'GET',
})
```

> XHRServerRequest(options: settingsRequest, body?: any)
**TS**
```ts
const sets: settingsRequest = {
    _urlServer: 'http://example.com/example',
    _responseType: 'blob',
    _method: 'POST',
}

XHRServerRequest(sets, {name: 'John'});
```

### SettingsRequest

This class allows you to create a setting object for the function, it is better to create it in this way, in TypeScript you can also use the type as shown above.

> constructor(urlServer, method?, responseType?)
```js
const sets = new SettingsRequest('http://example.com/example');

// method? = 'GET'
// responseType? = 'json'
```

---

Ending*