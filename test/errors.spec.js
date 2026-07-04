'use strict'

/* eslint-env mocha */

const assert = require('assert')
const Buffer = require('buffer').Buffer
const errors = require('../')
const ReplyError = errors.ReplyError
const ParserError = errors.ParserError
const ValkeyError = errors.ValkeyError
const AbortError = errors.AbortError
const InterruptError = errors.InterruptError

describe('errors', function () {
  const valkeyError = new ValkeyError('test')
  const replyError = new ReplyError('test')
  const parserError = new ParserError('test', Buffer.from('\r\nt+est\r\n'), 3)
  const abortError = new AbortError('test')
  const interruptError = new InterruptError('test')

  it('errors should have a stack trace with error message', function () {
    assert(valkeyError.stack)
    assert(replyError.stack)
    assert(parserError.stack)
    assert(abortError.stack)
    assert(interruptError.stack)
    assert(/ValkeyError: test/.test(valkeyError.stack))
    assert(/ReplyError: test/.test(replyError.stack))
    assert(/ParserError: test/.test(parserError.stack))
    assert(/AbortError: test/.test(abortError.stack))
    assert(/InterruptError: test/.test(interruptError.stack))
  })

  it('should properly inherit from each other', function () {
    assert(valkeyError instanceof Error)
    assert(replyError instanceof ValkeyError)
    assert(parserError instanceof ValkeyError)
    assert(abortError instanceof ValkeyError)
    assert(interruptError instanceof Error)
    assert(interruptError instanceof ValkeyError)
    assert(interruptError instanceof AbortError)
  })

  it('parser errors should contain properties', function () {
    assert(parserError.offset)
    assert(parserError.buffer)
  })

  it('first stack line should be the error itself', function () {
    assert(/at Suite/.test(valkeyError.stack.split('\n')[1]))
    assert(/at Suite/.test(replyError.stack.split('\n')[1]))
    assert(/at Suite/.test(parserError.stack.split('\n')[1]))
    assert(/at Suite/.test(abortError.stack.split('\n')[1]))
    assert(/at Suite/.test(interruptError.stack.split('\n')[1]))
  })
})
