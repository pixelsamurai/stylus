
/*!
 * CSS - BinOp
 * Copyright(c) 2010 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var Node = require('./node');

/**
 * Initialize a new `BinOp` with `op`, `left` and `right`.
 *
 * @param {String} name
 * @param {Node} val
 * @api public
 */

var BinOp = module.exports = function BinOp(op, left, right){
  this.op = op;
  this.left = left;
  this.right = right;
};

/**
 * Inherit from `Node.prototype`.
 */

BinOp.prototype.__proto__ = Node.prototype;