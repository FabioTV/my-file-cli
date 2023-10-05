const Html = require("../objects/Html");
const FileFactory = require("./FileFactory");
class HtmlFileFactory extends FileFactory {

    /**
     * 
     * @param {string} name 
     * @param {string} type 
     * @returns {Html}
     * @override
     */
    createFileObject(name, type) {
        const html = new Html(name, 'html');
        return html;
    }
    
}
module.exports = HtmlFileFactory;