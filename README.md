# server-requests@1.1.2

This library allows us to send and receive various data from the server, it is in this library that both native methods and functions and advanced ones are implemented. And our library was created both under JavaScript and under Typescript.

## Install 

**Install from npm**
```
npm i server-requests       // Installation
npm i -D server-requests    // Installation how developer dependence
npm i server-requests -g    // Global installaion
```

**Imported modules** 
```js
import { XHRServerRequest, SettingsRequest } from 'server-requests';
// Or
import * as sr from 'server-requests';
```
## Methodes 

In this block, the main methods stored in the library will be analyzed.

### XHRServerRequest(options, body?)

```js
XHRServerRequest({
    _urlServer: 'http://example.com/example',
    _responseType: 'json',
    _method: 'GET',
})
```