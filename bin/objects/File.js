/**
 * Interface for file object
 * @interface
 */
class File{

    /**
     * @returns {string} type 
     */
    content(){
        throw new Error("Subclasses must implement content method");
    }

    /**
     * @returns {string} name 
     */
    get name() {
        throw new Error("Subclasses must implement name method");
    }
    /**
     * @returns {string} type 
     */
    get type(){
        throw new Error("Subclasses must implement type method");
    }

    /**
     * @returns {void} type 
     */
    set name(name){
        throw new Error("Subclasses must implement type method");
    }

    /**
     * @returns {void} type 
     */
    set type(type){
        throw new Error("Subclasses must implement type method");
    }
}

module.exports = File;