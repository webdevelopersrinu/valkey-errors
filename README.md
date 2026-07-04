# valkey-errors

Error classes used in Valkey clients and parsers (e.g. [valkey-parser](https://www.npmjs.com/package/valkey-parser)).

This is a Valkey-native port of [`redis-errors`](https://github.com/NodeRedis/redis-errors) — same classes and behavior, with no Redis naming.

## Install

```bash
npm install valkey-errors
```

## Usage

```js
const { ValkeyError, ReplyError, ParserError, AbortError, InterruptError } = require('valkey-errors')

throw new ReplyError('ERR unknown command')
```

## Error classes

| Class            | Extends        | Description                                        |
| ---------------- | -------------- | -------------------------------------------------- |
| `ValkeyError`    | `Error`        | Base class for all Valkey errors.                  |
| `ReplyError`     | `ValkeyError`  | An error returned by the server (RESP `-` reply).  |
| `ParserError`    | `ValkeyError`  | A protocol parsing error (carries `buffer`/`offset`). |
| `AbortError`     | `ValkeyError`  | A command was aborted.                             |
| `InterruptError` | `AbortError`   | A command was aborted due to an interrupt.         |

## License

[MIT](LICENSE) — a fork of `redis-errors` (© 2017 Ruben Bridgewater).
