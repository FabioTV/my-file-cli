const File = require("./File");
/**
 * @class
 */
class Html extends File {

    /**
     * 
     * @param {string} name 
     * @param {string} type 
     */
    constructor(name , type) {
        super();
        this._name = name;
        this._type = type;
    }
    /**
     * @returns {string}
     * @override
     */
    get name(){
        return this._name;
    }

    /**
     * @returns {string}
     */
    get type(){
        return this._type
    }

    /**
     * @returns {void}
     */
    set name(name){
        this._name = name;
    }

    /**
     * @returns {void}
     */
    set type(type){
        this._type = type;
    }

    /**
     * 
     * @returns {string}
     */
    content(){
        return `
<!DOCTYPE html>
<html>
<head>
    <title>My Web Page</title>
</head>
<body>
    <header>
        <h1>Welcome to My Web Page</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section>
            <h2>About Me</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </section>
        <section>
            <h2>Services</h2>
            <ul>
                <li>Web Design</li>
                <li>Graphic Design</li>
                <li>SEO</li>
            </ul>
        </section>
    </main>
    <footer>
        <p>&copy; 2023 My Web Page</p>
    </footer>
</body>
</html>
        `;
    }
}

module.exports = Html;