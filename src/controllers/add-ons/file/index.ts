import fs from 'fs';
import path  from 'path';

import formidable from 'formidable';

const processUploadFile = (req, res) => {
    return new Promise((resolve, reject) => {
        try {
            const form = formidable({ multiples: false });
            form.parse(req, (err, fields, files) => {
                if (err) throw err;

                console.log('BEGIN PROCESS FILE ', fields, files);
                const theFile = files.filepond;
                console.log('theFile: ' + JSON.stringify(theFile, null, 2));

                const destFile = path.join(__dirname, '/uploads/', theFile.newFilename);
                fs.rename(theFile.filepath, destFile, function (err) {
                    if (err) throw err;
                    console.log('Successfully renamed');
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end('file://' + destFile);
                    resolve({});
                });
            });
        } catch (e) {
            reject(e);
        }
    });
};

const revertUploadFile = async (req, res) => {
    const {} = req.body;
    return {};

};

export {
    processUploadFile,
    revertUploadFile
};