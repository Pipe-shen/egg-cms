'use strict';

const Controller = require('egg').Controller;

class CategoryController extends Controller {
  async index() {
    this.ctx.body = 'hi, category';
  }
}

module.exports = CategoryController;
