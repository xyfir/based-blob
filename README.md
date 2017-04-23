Convert blobs to and from base64 data url strings.

# Usage

```js
(async function() {
  const blob64 = require('blob64');

  const base64String = 'some base64 data...';

  const blob = blob64.toBlob(base64String);
  const b64s = await blob64.toBase64(blob);

  console.log(b64s == base64String); // true
})();
```

# API

## blob64.toBlob(base64[, contentType])

Converts a base64 data url string to a blob.

### Parameters

- `base64: string` - The string to convert.
- `contentType: string` - *Optional* - Used for the Blob constructor.

### Returns

`Blob` - The blob built from the base64 string.

## blob64.toBase64(blob)

Converts a blob to a base64 data url string.

### Parameters

- `blob: Blob` - The blob to convert.

### Returns

`Promise` - A promise that resolves to the base64 string.