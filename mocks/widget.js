// 控件

const someWidgets = require('./someWidgets');

module.exports = {
  // ===== 控件列表 =====
  'GET /widget/list.json': function (req, res) {
    delay(
      res,
      [
        {
          // 控件标题
          name: 'hello',
          // 控件 ID
          id: '1234',
          // 控件代码
          code: someWidgets.code1,
        },
        {
          name: '对话框2',
          id: '56',
          code: someWidgets.code2,
        }
      ],
      1000
    );
  },

  // ===== 获取所有群组列表 =====
  'GET /widget/group/getAll.json': function (req, res) {
    delay(
      res,
      [
        {
          // 群组名称
          name: 'AntD 默认组件',
          // 群组类型
          type: 'react',
          // 群组 ID
          id: '12',
          // 群组控件
          widgets: [
            {
              // 控件标题
              name: 'Modal',
              // 控件 ID
              id: '1234',
              // 控件描述
              description: '对话框',
              // 控件代码
              source: someWidgets.code1,
            },
            {
              name: 'Widget2',
              id: '56',
              description: 'just a test widget2',
              source: someWidgets.code2,
            },
            {
              name: 'Widget3',
              id: '12344',
              description: 'just3',
              source: someWidgets.code1,
            },
            {
              name: 'Switch',
              id: '564',
              description: '开关',
              source: someWidgets.code4,
            }
          ]
        },
        {
          name: 'AntD 业务组件',
          type: 'react',
          id: '34',
          widgets: [
            {
              name: 'slider-unlock',
              id: '12344',
              description: '滑动解锁',
              source: someWidgets.code3,
              style: someWidgets.style1
            }
          ]
        }
      ],
      500
    );
  },

  // ===== 创建控件 =====
  'POST /widget/create.json': function (req, res) {
    res.json(createSuccessData(
      {
        // 标题
        name: 'test-widget',
        // 描述
        description: 'just a test widget',
        // 是否公开，默认公开
        private: false,
        // 所属群组
        group: 'Ant Design',
        // 合作者，控件可多人编辑
        //collaborators: 'a, b',
        // 标签，用于快速分类
        //tags: 'x, y',
        // 原型稿 owner 可转让，默认即为创建者
        //ownerId: '76483',
        // 数据，用于还原控件
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

  // ===== 控件详细信息 =====
  'GET /widget/detail.json': function (req, res) {
    res.json(createSuccessData(
      {
        name: 'hello world',
        description: 'just a test prototypo',
        private: false,
        group: 'Ant Design',
        //collaborators: 'a, b',
        //tags: 'x, y',
        //ownerId: '76483',
        state: [],
        creatorId: '76483',
        createTime: '2016-03-30 10:12:11',
        modifyTime: '2016-03-30 18:22:43',

        // 原型稿 ID，创建后系统生成，便于外链查看
        id: '1234',
      }
    ));
  },

  // ===== 修改控件 =====
  // 精确修改，前台发送发生变化的数据，后台只处理这部分数据
  'POST /widget/modify.json': function (req, res) {
    delay(res, null, 1000);
  },

  // ===== 删除控件 =====
  'POST /widget/delete.json': function (req, res) {
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
