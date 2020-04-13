'use strict';

const c = require('chalk');

module.exports = {
  usagePrefix: s => {
    return c.yellow(
      s.slice(0, 6).replace(/:/, '\n\n ').toUpperCase()
    ) + ' ' + c.magenta(s.slice(7));
  },
  usageCommandPlaceholder: s => c.magenta(s),
  usagePositionals: s => c.green(s),
  usageArgsPlaceholder: s => c.green(s),
  usageOptionsPlaceholder: s => c.cyan(s),
  group: s => c.yellow(s.replace(/:?$/, '\n').toUpperCase()),
  flags: (s, type) => {
    if (type.datatype === 'command') {
      s = s.split(' ')
      return c.magenta(s[0]) + (s[1] ? ' ' + c.green(s.slice(1).join(' ')) : '')
    }
    return s[0] === '-' ? c.cyan(s) : c.green(s)
  },
  hints: s => c.dim(s),
  example: s => c.yellow(s[0]) + s.slice(1),
  /* groupError: s => c.red(s.replace(/:?$/, '\n').toUpperCase()) */
  flagsError: s => c.red(s),
  descError: s => c.red(s),
  hintsError: s => c.red(s),
  messages: s => c.red(s),
};
