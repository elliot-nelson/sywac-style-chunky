# sywac-style-chunky

> A chunky style for your [sywac](https://sywac.io/) CLI application.

![Screenshot](screenshot.png)

## Install

```console
$ npm install sywac
$ npm install sywac-style-chunky
```

## Usage

```js
const sywac = require('sywac');
const chunky = require('sywac-style-chunky');

sywac.style(chunky);
```

> *NOTE* This style renders group headers without trailing colons and in uppercase, but
> the underlying group names aren't changed - keep this in mind if you use `.groupOrder`,
> for example.

```js
sywac
  .number('port', { group: 'Server Options:' })
  .groupOrder(['Arguments:', 'Options:', 'Server Options:'])
  .style(chunky);

// ARGUMENTS
//   ...
//
// OPTIONS
//   ...
//
// SERVER OPTIONS
//   ...
```

