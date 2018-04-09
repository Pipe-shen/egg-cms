'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  async index() {
    this.ctx.body = 'hi, article';
  }
}

module.exports = ArticleController;
