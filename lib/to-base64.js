/**
 * Converts a blob to a base64 data url string.
 * @param {Blob} blob
 * @returns {Promise} A promise that resolves to the base64 string.
 */
module.exports = function(blob) {
  
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
    
}