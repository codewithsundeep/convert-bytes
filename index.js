function convertBytes(bytes, precision = 2) {
    const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let unitIndex = 0;

    while (bytes >= 1024 && unitIndex < units.length - 1) {
        bytes /= 1024;
        unitIndex++;
    }

    return bytes.toFixed(precision) + ' ' + units[unitIndex];
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = convertBytes;
} else {
    export default convertBytes;
}
