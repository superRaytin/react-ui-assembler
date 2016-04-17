import React, { PropTypes, Component } from 'react';
import {
  Button,
  Icon
} from 'antd';

const ButtonGroup = Button.Group;

function generateRandomKey() {
  return Math.floor(Math.random() * 1000000);
}

class Toolbar extends Component {
  handleAddGrid() {
    const layouts = this.props.layout.layouts;
    const lastGrid = layouts[layouts.length - 1];
    const lastGridIsAtTail = lastGrid.x + lastGrid.w >= 10;
    const newGrid = {
      i: generateRandomKey().toString(),
      x: lastGridIsAtTail ? 0 : lastGrid.x + lastGrid.w,
      y: lastGridIsAtTail ? lastGrid.y + 2 : lastGrid.y,
      w: 2,
      h: 2
    };

    this.props.actions.addGrid(newGrid);
  }

  handleRemoveGrid() {
    if (this.props.uistate.enableGridRemove) {
      this.props.actions.toggleGridRemove(false);
    } else {
      this.props.actions.toggleGridRemove(true);
    }
  }

  handleShowSaveModal() {
    this.props.actions.toggleProtoEditModal(true);
  }

  render() {
    return (
      <div className="silo-toolbar-wrapper">
        <div className="silo-toolbar-group">
          <ButtonGroup>
            <Button type="primary" onClick={this.handleAddGrid.bind(this)}>
              <Icon type="plus" /><span>新增网格</span>
            </Button>
            <Button type="ghost" onClick={this.handleRemoveGrid.bind(this)}>
              <Icon type="delete" />
              <span>{this.props.uistate.enableGridRemove ? '取消删除' : '删除'}</span>
            </Button>
          </ButtonGroup>
        </div>
        <div>
          <ButtonGroup>
            <Button type="primary" onClick={this.handleShowSaveModal.bind(this)}>
              <Icon type="save" /><span>保存</span>
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

Toolbar.propTypes = {
  actions: PropTypes.object,
  layout: PropTypes.object,
  uistate: PropTypes.object,
};

export default Toolbar;
