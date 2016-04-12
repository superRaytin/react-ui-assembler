const code1 = 'import { Modal, Button } from "antd";' +
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

const code3 = "import React from 'react';" +
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

const code4 = 'import { Switch, Icon } from "antd";' +
  'ReactDOM.render(<div>' +
  '<Switch checkedChildren="开" unCheckedChildren="关" />' +
  '<span> </span>' +
  '<Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />} />' +
  '</div>, mountNode);';

const style1 = '.slide-unlock {  position: relative;  padding: 0 30px;}.slide-unlock .anticon {  position: absolute;  top: -3px;  width: 16px;  height: 16px;  line-height: 1;  font-size: 16px;  color: #ccc;}.slide-unlock .anticon.anticon-highlight {  color: #666;}.slide-unlock .anticon-lock {  left: 0;}.slide-unlock .anticon-unlock {  right: 0;}';

module.exports = {
  style1: style1,
  code1: code1,
  code2: code2,
  code3: code3,
  code4: code4,
};
