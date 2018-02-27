'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');
const CommonLogFormatter = require('../../../dst/lib/formatters/index').CommonLogFormatter;
const Formatters = require('../../../dst/lib/formatters/index').Formatters;

describe('formatters/index.js tests', () => {
  describe('#get()', () => {
    it('expect to get a CommonLog Formatter.', () => {
      // arranges

      // acts
      const formatter = Formatters.get('CommonLog');

      // asserts
      expect(formatter).to.equal(CommonLogFormatter);
    });
  });
});
