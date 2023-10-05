const fs = require('fs');
const DefaultFile = require('../objects/DefaultFile');
const File = require('../objects/File');
class FileFactory {
    /**
     * @param {string} name
     * @param {string} type
     * @returns {File}
     */
    createFileObject(name ,type){
        return new DefaultFile(name, type);
    }

    /**
     * 
     * @param {string} name
     * @param {string} type
     */
    createFileOS(name ,type) {
        /** @type {string} */ const filePath = process.cwd();
        const file = this.createFileObject(name, type);
        fs.writeFileSync(`${filePath}/${file.name}.${file.type}`, file.content());
    }
}

module.exports = FileFactory;