'use strict';

const Controller = require('egg').Controller;

class CategoriesController extends Controller {
  async index() {
    this.ctx.body = 'hi, category index';
  }
  async new() {
    this.ctx.body = 'hi, category new';
  }
  async create() {
    this.ctx.body = 'hi, category create';
  }
  async show() {
    this.ctx.body = 'hi, category show';
  }
  async edit() {
    this.ctx.body = 'hi, category edit';
  }
  async update() {
    this.ctx.body = 'hi, category update';
  }
  async destory() {
    this.ctx.body = 'hi, category destory';
  }
}

module.exports = CategoriesController;
