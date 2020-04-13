# sywac-style-bunker

> A chunky style for your [sywac](https://sywac.io/) CLI application.

![Screenshot](screenshot.png)

## Install

```console
$ npm install sywac
$ npm install sywac-style-bunker
```

## Usage

```js
const sywac = require('sywac');
const bunker = require('sywac-style-bunker');

sywac.style(bunker);
```

> *NOTE* This style renders group headers without trailing colons and in uppercase, but
> the underlying group names aren't changed - keep this in mind if you use `.groupOrder`,
> for example.

```js
sywac
  .number('port', { group: 'Server Options:' })
  .groupOrder(['Arguments:', 'Options:', 'Server Options:'])
  .style(bunker);

// Renders as ARGUMENTS, OPTIONS, and SERVER OPTIONS.
```

