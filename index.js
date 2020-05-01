'use strict';

const c = require('chalk');

module.exports = {
  usagePrefix: function (s) {
    let w = s.indexOf(' ');
    return c.yellow(s.slice(0, w).toUpperCase().replace(':', ''))
      + this.lineSep + this.indent + c.dim(this._examplePrefix)
      + c.magenta(s.slice(w + 1));
  },
  usageCommandPlaceholder: s => c.magenta(s),
  usagePositionals: s => c.green(s),
  usageArgsPlaceholder: s => c.green(s),
  usageOptionsPlaceholder: s => c.cyan(s),
  group: s => c.yellow(s.toUpperCase().replace(':', '')),
  flags: (s, type) => {
    if (type.datatype === 'command') {
      s = s.split(' ')
      return c.magenta(s[0]) + (s[1] ? ' ' + c.green(s.slice(1).join(' ')) : '')
    }
    return s[0] === '-' ? c.cyan(s) : c.green(s)
  },
  hints: s => c.dim(s),
  example: s => c.dim(s[0]) + s.slice(1),
  flagsError: s => c.red(s),
  descError: s => c.red(s),
  hintsError: s => c.red(s),
  messages: s => c.red(s),
};
