import React, { PropTypes, Component } from 'react';
import {
  Icon
} from 'antd';

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

  }

  render() {
    return (
      <div className="silo-toolbar-group">
        <span className="toolbar-item" onClick={this.handleAddGrid.bind(this)}>
          <Icon type="plus-circle" />
        </span>
        <span className="toolbar-item" onClick={this.handleRemoveGrid.bind(this)}>
          <Icon type="minus-circle" />
        </span>
      </div>
    );
  }
}

Toolbar.propTypes = {
  actions: PropTypes.object,
  layout: PropTypes.object
};

export default Toolbar;
