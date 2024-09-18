class Data {
    #day
    #month
    #year
    constructor(day, month, year) {
        this.#day = day;
        this.#month = month;
        this.#year = year;
    }
    get day() {
        return this.#day;
    }
    set day(day) {
        this.#day = day;
    }
    get month() {
        return this.#month;
    }
    set month(month) {
        this.#month = month;
    }
    get year() {
        return this.#year;
    }
    set year(year) {
        this.#year = year;
    }
    toString() {
        return `${this.#day}/${this.#month}/${this.#year}`;
    }
}
let data = new Data(10, 12, 2008);
console.log(data.toString());