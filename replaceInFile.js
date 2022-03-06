const replace = require('replace-in-file');

const options = {
  files: './dist/index.html',
  from: '<link href="/dist/output.css" rel="stylesheet" />',
  to: '<link href="./output.css" rel="stylesheet" />',
};

const run = async () => {
  try {
    const results = await replace(options);
    console.log('Replacement results:', results);
  } catch (error) {
    console.error('Error ocurred:', error);
  }
};

run();
