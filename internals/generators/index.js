const path = require('path');
const { exec } = require('child_process');
const componentGenerator = require('./component/index');
const containerGenerator = require('./container/index');

module.exports = plop => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('container', containerGenerator);
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
  plop.setActionType('prettify', (answers, config) => {
    const folderPath = `${path.join(
      __dirname,
      '/../../src/',
      config.path,
      plop.getHelper('properCase')(answers.name),
      '**.js',
    )}`;
    exec(`yarn run prettify -- "${folderPath}"`);

    return folderPath;
  });
};
