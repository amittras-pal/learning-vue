### `Data` is reactive, but JS by itself, _isnt_

- In vue, the `data` property defined is a reactive object.
- Vue internally uses `Proxy` [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) to refer to this object.
- This helps vue to get notified whenever a property in that object hass changed.
- Vue then scans the component to find what could require a re-render.

### How Vue updates the DOM.

- It uses the VirtualDOM
  - It's all the same.
