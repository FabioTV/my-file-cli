const File = require("./File");
/**
 * @class
 */
class DefaultFile extends File {

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
        return ``;
    }
}

module.exports = DefaultFile;