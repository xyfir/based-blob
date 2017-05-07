Convert blobs to and from base64 data url strings.

Used by [Xyfir Books](https://books.xyfir.com/) and other projects in the [Xyfir Network](https://xyfir.com/).

# Usage

```js
(async function() {
  const b = require('based-blob');

  const base64String = 'some base64 data...';

  const blob = b.toBlob(base64String);
  const b64s = await b.toBase64(blob);

  console.log(b64s == base64String); // true
})();
```

# API

## toBlob(base64[, contentType])

Converts a base64 data url string to a blob.

### Parameters

- `base64: string` - The string to convert.
- `contentType: string` - *Optional* - Used for the Blob constructor.

### Returns

`Blob` - The blob built from the base64 string.

## toBase64(blob)

Converts a blob to a base64 data url string.

### Parameters

- `blob: Blob` - The blob to convert.

### Returns

`Promise` - A promise that resolves to the base64 string.