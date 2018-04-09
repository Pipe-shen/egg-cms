'use strict';

const Controller = require('egg').Controller;

class DashboardController extends Controller {
  async index() {
    this.ctx.body = 'hi, dashboard';
  }
}

module.exports = DashboardController;
