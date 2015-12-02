/**
 * Created by Frank on 15/11/30.
 */
'use strict';
const service = require('../../services');
const componentGroupService = service.componentGroup;

module.exports = function (router) {

    /**
     * @api {get} /api/componentGroups
     * @apiDescription 获取所有UI组件分组
     *
     */
    router.get('/', function*() {
        this.body = yield componentGroupService.findAll(this.query);
    });


    /**
     * @api {post} /api/componentGroups
     * @apiDescription 创建组件分组(支持批量添加)
     *
     */
    router.post('/', function*() {
        this.body = yield componentGroupService.create(this.request.body);
    });


    /**
     * @api {get} /api/componentGroups/:id
     * @apiDescription 获取指定组件分组
     *
     */
    router.get('/:id', function*() {
        this.body = yield componentGroupService.findById(this.params.id);
    });


    /**
     * @api {delete} /api/componentGroups/:id
     * @apiDescription 删除指定组件分组
     *
     */
    router.del('/:id', function*() {
        this.body = yield componentGroupService.destroyById(this.params.id);
    });


    /**
     * @api {put} /api/componentGroups/:id
     * @apiDescription 修改指定组件分组
     *
     */
    router.put('/:id', function*() {
        this.body = yield componentGroupService.updateById(this.params.id, this.request.body);
    });


    /**
     * @api {post} /api/componentGroups/:id/components
     * @apiDescription 添加新组件(支持批量添加)
     *
     */
    router.post('/:id/components', function*() {
        this.body = yield componentGroupService.addComponents(this.params.id, this.request.body);
    });


    /**
     * @api {delete} /api/componentGroups/:id/components
     * @apiDescription 删除指定组件
     *
     */
    router.del('/:id/components/:index', function*() {
        this.body = yield componentGroupService.removeComponent(this.params.id, this.params.index);
    });


    return router;
};