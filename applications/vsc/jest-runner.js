const { sep } = require("path");
const { exec } = require('child_process');

const args = process.argv;

const unixPath = args[2];
const win32Path = args[3];
const filename = args[4];
const jestPath = args[5];

const jestConfigPath = jestPath
    .split(`${sep}src${sep}`)[0]
    .concat(`${sep}jest.config.js`)
;

const path = process.platform === "win32"
    ? win32Path
    : unixPath
;

exec(`${path} ${filename} --config ${jestConfigPath}`, (error, out, err) => {
    if (error) {
        console.log(error);
    }
    if (out) {
        console.log(out);
    }
    if (err) {
        console.log(err);
    }
});
