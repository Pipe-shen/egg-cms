'use strict';

const Controller = require('egg').Controller;

class SystemController extends Controller {
  async index() {
    this.ctx.body = 'hi, system';
  }
}

module.exports = SystemController;
