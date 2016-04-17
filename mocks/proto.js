// 原型稿

const someWidgets = require('./someWidgets');

module.exports = {
  // ===== 原型稿列表 =====
  'GET /proto/list.json': function (req, res) {
    delay(
      res,
      [
        {
          // 原型稿标题
          name: 'hello',
          // 原型稿 ID
          id: '1',
          description: 'test proto',
          createTime: '2016-03-30 10:12:11',
        },
        {
          name: 'hello2',
          id: '2',
          description: 'test proto2',
          createTime: '2016-03-30 10:12:12',
        },
        {
          name: 'hello3',
          id: '3',
          description: 'test proto3',
          createTime: '2016-03-30 10:12:12',
        },
      ],
      1000
    );
  },

  // ===== 创建原型稿 =====
  'POST /proto/create.json': function (req, res) {
    res.json(createSuccessData(
      {
        // 标题
        name: 'hello world',
        // 描述
        description: 'just a test prototypo',
        // 是否公开，默认公开
        private: false,
        // 所属群组
        //group: 'a',
        // 合作者，原型稿可多人编辑
        //collaborators: 'a, b',
        // 订阅者，原型稿修改后发送通知，合作者默认发送
        //subscribers: 'a, b',
        // 标签，用于快速分类
        //tags: 'x, y',
        // 原型稿 owner 可转让，默认即为创建者
        //ownerId: '76483',
        // 数据，用于还原
        state: [],
        // 创建人
        creatorId: '76483',
        // 创建时间
        createTime: '2016-03-30 10:12:11',
        // 修改时间
        modifyTime: '2016-03-30 18:22:43',
      }
    ));
  },

  // ===== 原型稿详细信息 =====
  'POST /proto/detail.json': function (req, res) {
    res.json(createSuccessData(
      {
        name: 'hello world',
        description: 'just a test prototypo',
        private: false,
        //group: 'a',
        //collaborators: 'a, b',
        //subscribers: 'a, b',
        //tags: 'x, y',
        //ownerId: '76483',
        creatorId: '76483',
        createTime: '2016-03-30 10:12:11',
        modifyTime: '2016-03-30 18:22:43',

        // 原型稿 ID，创建后系统生成，便于外链查看
        id: '1234',
      }
    ));
  },

  // ===== 原型稿 state 信息 =====
  'POST /proto/state.json': function (req, res) {
    res.json(createSuccessData(
      {
        layouts: [
          {i: 'a', x: 0, y: 0, w: 2, h: 1},
          {i: 'b', x: 2, y: 0, w: 2, h: 2},
          {i: 'c', x: 4, y: 0, w: 2, h: 3},
          {i: 'd', x: 6, y: 0, w: 2, h: 2},
          {i: 'e', x: 8, y: 0, w: 2, h: 2},
          {i: 'f', x: 10, y: 0, w: 2, h: 2},
          {i: 'g', x: 0, y: 2, w: 2, h: 2}
        ],
        gridToWidgetMap: {
          b: {
            source: someWidgets.code4,
            mounted: false,
            style: '',
            id: '564'
          },
          c: {
            source: someWidgets.code3,
            mounted: false,
            style: someWidgets.style1,
            id: '34'
          }
        }
      }
    ));
  },

  // ===== 修改原型稿 =====
  // 精确修改，前台发送发生变化的数据，后台只处理这部分数据
  'POST /proto/modify.json': function (req, res) {
    delay(res, null, 1000);
  },

  // ===== 删除原型稿 =====
  'POST /proto/delete.json': function (req, res) {
    delay(res, null, 1000);
  },

  // ===== 添加合作者 =====
  'POST /proto/collaborators/add.json': function (req, res) {
    delay(res, null, 1000);
  },

  // ===== 删除合作者 =====
  'POST /proto/collaborators/delete.json': function (req, res) {
    delay(res, null, 1000);
  },

  // ===== 添加订阅者 =====
  'POST /proto/subscribers/add.json': function (req, res) {
    delay(res, null, 1000);
  },

  // ===== 删除订阅者 =====
  'POST /proto/subscribers/delete.json': function (req, res) {
    delay(res, null, 1000);
  },

  // ===== 转移 owner =====
  'POST /proto/owner/transform.json': function (req, res) {
    delay(res, null, 1000);
  },

  // ===== 添加标签 =====
  'POST /proto/tags/add.json': function (req, res) {
    delay(res, null, 1000);
  },

  // ===== 删除标签 =====
  'POST /proto/tags/delete.json': function (req, res) {
    delay(res, null, 1000);
  },
};


function createSuccessData(data) {
  return {
    data: data || {},
    success: true,
    msg: 'ok'
  }
}

function createFailData() {
  return {
    success: false,
    msg: 'something went wrong'
  }
}

function delay(res, data, ms) {
  setTimeout(
    () => {
      res.json(createSuccessData(data));
    },
    ms
  )
}
