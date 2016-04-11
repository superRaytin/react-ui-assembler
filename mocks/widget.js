// 控件

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
          code: widgetCode1,
        },
        {
          name: '对话框2',
          id: '56',
          code: widgetCode2,
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
              source: widgetCode1,
            },
            {
              name: 'Widget2',
              id: '56',
              description: 'just a test widget2',
              source: widgetCode2,
            },
            {
              name: 'Widget3',
              id: '12344',
              description: 'just3',
              source: widgetCode1,
            },
            {
              name: 'Switch',
              id: '564',
              description: '开关',
              source: 'import { Switch, Icon } from "antd";' +
              'ReactDOM.render(<div>' +
              '<Switch checkedChildren="开" unCheckedChildren="关" />' +
              '<span> </span>' +
              '<Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />} />' +
              '</div>, mountNode);',
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
              source: widgetCode3,
              style: '.slide-unlock {  position: relative;  padding: 0 30px;}.slide-unlock .anticon {  position: absolute;  top: -3px;  width: 16px;  height: 16px;  line-height: 1;  font-size: 16px;  color: #ccc;}.slide-unlock .anticon.anticon-highlight {  color: #666;}.slide-unlock .anticon-lock {  left: 0;}.slide-unlock .anticon-unlock {  right: 0;}'
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

var widgetCode1 = 'import { Modal, Button } from "antd";' +
  'const App = React.createClass({' +
  'getInitialState() {return { visible: false };},' +
  'showModal() {this.setState({visible: true});},' +
  'hideModal() {this.setState({visible: false});},' +
  'render() {' +
  'return (' +
  '<div>' +
  '<Button type="primary" onClick={this.showModal}>显示对话框1</Button>' +
  '<Modal title="第一个 Modal" visible={this.state.visible} ' +
  'onOk={this.hideModal} onCancel={this.hideModal}>' +
  '<p>对话框的内容</p>' +
  '</Modal>' +
  '</div>);' +
  '}' +
  '});' +
  'ReactDOM.render(<App />, mountNode);';

var widgetCode2 = 'import { Modal, Button } from "antd";' +
  'const App = React.createClass({' +
  'getInitialState() {return { visible: false };},' +
  'showModal() {this.setState({visible: true});},' +
  'hideModal() {this.setState({visible: false});},' +
  'render() {' +
  'return (' +
  '<div>' +
  '<Button type="primary" onClick={this.showModal}>显示对话框2</Button>' +
  '<Modal title="第一个 Modal" visible={this.state.visible} ' +
  'onOk={this.hideModal} onCancel={this.hideModal}>' +
  '<p>对话框的内容</p>' +
  '</Modal>' +
  '</div>);' +
  '}' +
  '});' +
  'ReactDOM.render(<App />, mountNode);';

var widgetCode3 = "import React from 'react';" +
  "import { Slider, Icon } from 'antd';" +
  "" +
  "const SliderUnlock = React.createClass({" +
  "  propTypes: {" +
  "    max: React.PropTypes.number," +
  "    min: React.PropTypes.number," +
  "    value: React.PropTypes.number," +
  "    onDrop: React.PropTypes.func," +
  "    onChange: React.PropTypes.func," +
  "    icon: React.PropTypes.array," +
  "    tip: React.PropTypes.string," +
  "  }," +
  "" +
  "  getDefaultProps() {" +
  "    return {" +
  "      icon: ['lock', 'unlock']," +
  "      max: 100," +
  "      min: 0," +
  "      value: 0," +
  "      tip: '滑动至最后解锁'," +
  "    };" +
  "  }," +
  "" +
  "  getInitialState() {" +
  "    const max = this.props.max;" +
  "    const min = this.props.min;" +
  "    const mid = ((max - min) / 2).toFixed(5);" +
  "" +
  "    return {" +
  "      preIconClass: this.props.value >= max ? '' : 'anticon-highlight'," +
  "      nextIconClass: this.props.value >= max ? 'anticon-highlight' : ''," +
  "      mid: mid," +
  "      sliderValue: this.props.value," +
  "    };" +
  "  }," +
  "" +
  "  onAfterChange(v) {" +
  "    const max = this.props.max;" +
  "" +
  "    this.setState({" +
  "      preIconClass: v < max ? 'anticon-highlight' : ''," +
  "      nextIconClass: v < max ? '' : 'anticon-highlight'," +
  "      sliderValue: v < max ? 0 : v," +
  "    });" +
  "" +
  "    if (this.props.onDrop) {" +
  "      this.props.onDrop.call(this, v === max);" +
  "    }" +
  "  }," +
  "" +
  "  handleChange(v) {" +
  "    const max = this.props.max;" +
  "" +
  "    this.setState({" +
  "      preIconClass: v === max ? '' : 'anticon-highlight'," +
  "      nextIconClass: v === max ? 'anticon-highlight' : ''," +
  "      sliderValue: v," +
  "    });" +
  "" +
  "    if (this.props.onChange) {" +
  "      this.props.onChange.call(this, v);" +
  "    }" +
  "  }," +
  "" +
  "  tipFormatter() {" +
  "    return this.props.tip;" +
  "  }," +
  "" +
  "  render() {" +
  "    return (" +
  "        <div className='slide-unlock'>" +
  "          <Icon className={this.state.preIconClass} type={this.props.icon[0]} key='random'/>" +
  "          <Icon className={this.state.nextIconClass} type={this.props.icon[1]} key='random2' />" +
  "          <Slider {...this.props} onChange={this.handleChange}" +
  "                                  onAfterChange={this.onAfterChange}" +
  "                                  value={this.state.sliderValue}" +
  "                                  tipFormatter={this.tipFormatter} />" +
  "        </div>" +
  "    );" +
  "  }," +
  "});" +
  "" +
  'ReactDOM.render(<div><SliderUnlock /></div>, mountNode);';
