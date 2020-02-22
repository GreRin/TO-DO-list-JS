// Мгновенное время
export function currentTime() {
    const timestamp = new Date();
    const time = `${timestamp.getHours()}:${timestamp.getMinutes()}   ${timestamp.getDate()}.${timestamp.getMonth()}.${timestamp.getFullYear()}`;
    return time;
}
