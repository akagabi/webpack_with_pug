require('./assets/scss/_main.scss')

export default class App {
    constructor() {
        this.getPug()
    }

    getPug() {
        function requireAll(r) { r.keys().filter(r => r.forEach(r)) }
        requireAll(require.context('./', true, /\.pug$/));
    }
}