# server-requests@1.1.1

This library allows us to send and receive various data from the server, it is in this library that both native methods and functions and advanced ones are implemented. And our library was created both under JavaScript and under Typescript.

## Install 

**Via npm**
```
npm i server-requests   // Installation
npm i -D server-requests    // Installation how developer dependencies
npm i server-requests -g    // Installaion global
```

**Imported modules in JS** 
```js
import { XHRServerRequest } from 'server-requests'; // specific methods
// (***)

import * as sq from 'server-requests'; // all modules and types 
```
## Methodes 

```js
XHRServerRequest({
    _urlServer: 'https://***',
    _responseType: 'json',
    _method: 'GET',
});
// Everything! Basic request is ready!
```