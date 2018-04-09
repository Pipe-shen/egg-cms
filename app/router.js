/**
 * TODO 路由设计 Router
 * 控制台、栏目、内容、媒体库、留言、用户、系统、
 */

'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/dashboard', controller.dashboard.index);
  router.get('/category', controller.category.index);
  router.get('/article', controller.article.index);
  router.get('/media', controller.media.index);
  router.get('/feedback', controller.feedback.index);
  router.get('/user', controller.user.index);
  router.get('/system', controller.system.index);
};
