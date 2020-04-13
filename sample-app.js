'use strict';

process.argv[1] = 'pizza';

const sywac = require('sywac');

sywac
  .command({
    flags: 'order',
    desc: 'place a pizza order',
    run: argv => {
      console.log(1);
    }
  })
  .command({
    flags: 'cancel <order-id>',
    desc: 'cancel an existing order',
    run: argv => {
      console.log(1);
    }
  })
  .boolean('--json', { desc: 'print output in JSON format', group: 'Global Options:' })
  .style(require('.'))
  .showHelpByDefault()
  .parseAndExit();
