export const getCurrentTime = () => new Date().toISOString().slice(0, 10);
export const isNumber = (n) => { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }