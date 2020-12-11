export const abbreviateNumber = (value) => {
    let newValue = value;
    if (value >= 1000) {
        value = parseInt(value);
        let suffixes = ["", "K", "M", "B", "T"];
        let suffixNum = Math.floor(("" + value).length / 3);
        let shortValue = '';
        for (let precision = 2; precision >= 1; precision--) {
            shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(precision));
            let dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '');
            if (dotLessShortValue.length <= 2) { break; }
        }
        if (shortValue % 1 != 0)  shortValue = shortValue.toFixed(1);
        newValue = shortValue + suffixes[suffixNum];
    }
    return newValue;
}

export const getFirstCurMonthDate = () => {
    const d = new Date()
    let month = '' + (d.getMonth() + 1)
    const year = d.getFullYear()

    if (month.length < 2)
        month = '0' + month
    return `${year}-${month}-01`
}

export const getCurDateTime = () => {
    const d = new Date()

    const year = d.getFullYear()

    let month = '' + (d.getMonth() + 1)
    if (month.length < 2)
        month = '0' + month

    let day = d.getDate()
    day = '' + day;
    if (day.length < 2)
        day = '0' + day

    let hour = '' + d.getHours()
    if (hour.length < 2)
        hour = '0' + hour

    let min = '' + d.getMinutes()
    if (min.length < 2)
        min = '0' + min

    let sec = '' + d.getSeconds()
    if (sec.length < 2)
        sec = '0' + sec

    const strDate = `${year}-${month}-${day} ${hour}:${min}:${sec}`

    return strDate
}
