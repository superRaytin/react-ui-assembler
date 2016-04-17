const code1 = 'import { Modal, Button } from "antd";' +
  'const App = React.createClass({' +
  'getInitialState() {return { visible: false };},' +
  'showModal() {this.setState({visible: true});},' +
  'hideModal() {this.setState({visible: false});},' +
  'render() {' +
  'return (' +
  '<div>' +
  '<Button type="primary" onClick={this.showModal}>显示对话框</Button>' +
  '<Modal title="第一个 Modal" visible={this.state.visible} ' +
  'onOk={this.hideModal} onCancel={this.hideModal}>' +
  '<p>对话框的内容</p>' +
  '</Modal>' +
  '</div>);' +
  '}' +
  '});' +
  'ReactDOM.render(<App />, mountNode);';

const code2 = 'import { Modal, Button } from "antd";' +
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

const code3 = "import React from 'react';\n" +
  "import { Slider, Icon } from 'antd';\n" +
  "\n" +
  "const SliderUnlock = React.createClass({\n" +
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

const code41 = 'import { Switch, Icon } from "antd";' +
  'ReactDOM.render(<div>' +
  '<Switch checkedChildren="开" unCheckedChildren="关" />' +
  '<span> </span>' +
  '<Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />} />' +
  '</div>, mountNode);';

const code4 = "import { Switch, Icon } from 'antd';\n" +
  "\n" +
  "ReactDOM.render(<div>\n" +
  "  <Switch checkedChildren='开' unCheckedChildren='关' />\n" +
  "  <span> </span>\n" +
  "  <Switch checkedChildren={<Icon type='check' />} unCheckedChildren={<Icon type='cross' />} />\n" +
  "</div>, mountNode);\n";

const code5 = "import { Tag } from 'antd';" +
  "" +
  "ReactDOM.render(<div>" +
  "  <Tag closable color='blue'>蓝色</Tag>" +
  "  <Tag closable color='green'>绿色</Tag>" +
  "  <Tag closable color='yellow'>黄色</Tag>" +
  "  <Tag closable color='red'>红色</Tag>" +
  "</div>, mountNode);";

const code6 = "import { Radio } from 'antd';" +
  "" +
  "ReactDOM.render(<Radio>Radio</Radio>" +
  ", mountNode);";

const code7 = "import { TimePicker } from 'antd';" +
  "" +
  "function onChange(time) {" +
  "  console.log(time);" +
  "  if (time) {" +
  "    console.log(time.toLocaleTimeString('zh-CN', { hour12: false })); /* Get time string */" +
  "  }" +
  "}" +
  "" +
  "ReactDOM.render(" +
  "  <TimePicker onChange={onChange} />" +
  ", mountNode);";

const style1 = '.slide-unlock {  position: relative;  padding: 0 30px;}.slide-unlock .anticon {  position: absolute;  top: -3px;  width: 16px;  height: 16px;  line-height: 1;  font-size: 16px;  color: #ccc;}.slide-unlock .anticon.anticon-highlight {  color: #666;}.slide-unlock .anticon-lock {  left: 0;}.slide-unlock .anticon-unlock {  right: 0;}';

module.exports = {
  style1: style1,
  code1: code1,
  code2: code2,
  code3: code3,
  code4: code4,
  code5: code5,
  code6: code6,
  code7: code7,
};
