/**
 * Convert base64 data url string to blob.
 * @param {string} base64 - The data string to convert.
 * @param {string} [contentType] - Used in Blob constructor.
 * @returns {Blob}
 */
module.exports = function(base64, contentType = '') {
  
  const sliceSize = 1024;
  const byteCharacters = atob(base64);
  const slicesCount = Math.ceil(byteCharacters.length / sliceSize);
  const byteArrays = new Array(slicesCount);

  for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
    const begin = sliceIndex * sliceSize;
    const end = Math.min(begin + sliceSize, byteCharacters.length);
    const bytes = new Array(end - begin);

    for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
      bytes[i] = byteCharacters[offset].charCodeAt(0);
    }

    byteArrays[sliceIndex] = new Uint8Array(bytes);
  }
  
  return new Blob(byteArrays, { type: contentType });

}