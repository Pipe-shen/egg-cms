'use strict';

const Controller = require('egg').Controller;

class MediaController extends Controller {
  async index() {
    this.ctx.body = 'hi, media';
  }
}

module.exports = MediaController;
