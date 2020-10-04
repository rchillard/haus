haus
====

HTML And Useful Styling (HAUS) is a CLI for web development

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/haus.svg)](https://npmjs.org/package/haus)
[![CircleCI](https://circleci.com/gh/rchillard/haus/tree/master.svg?style=shield)](https://circleci.com/gh/rchillard/haus/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/haus.svg)](https://npmjs.org/package/haus)
[![License](https://img.shields.io/npm/l/haus.svg)](https://github.com/rchillard/haus/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g haus
$ haus COMMAND
running command...
$ haus (-v|--version|version)
haus/0.0.0 linux-x64 node-v12.18.4
$ haus --help [COMMAND]
USAGE
  $ haus COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`haus hello [FILE]`](#haus-hello-file)
* [`haus help [COMMAND]`](#haus-help-command)

## `haus hello [FILE]`

describe the command here

```
USAGE
  $ haus hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ haus hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/rchillard/haus/blob/v0.0.0/src/commands/hello.ts)_

## `haus help [COMMAND]`

display help for haus

```
USAGE
  $ haus help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_
<!-- commandsstop -->
