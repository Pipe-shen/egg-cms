'use strict';

const Controller = require('egg').Controller;

class FeedbackController extends Controller {
  async index() {
    this.ctx.body = 'hi, feedback';
  }
}

module.exports = FeedbackController;
