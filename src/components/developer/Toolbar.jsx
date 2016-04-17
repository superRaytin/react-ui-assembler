import React, { PropTypes, Component } from 'react';
import {
  Button,
  Icon
} from 'antd';

const ButtonGroup = Button.Group;

class Toolbar extends Component {
  handleAddWidget() {
    this.props.router.push('/editor');
  }

  render() {
    return (
      <div className="silo-toolbar-wrapper">
        <div className="silo-toolbar-group">
          <ButtonGroup>
            <Button type="primary" onClick={this.handleAddWidget.bind(this)}>
              <Icon type="plus" /><span>创建组件</span>
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

Toolbar.propTypes = {
  actions: PropTypes.object,
  router: PropTypes.object,
  developer: PropTypes.object
};

export default Toolbar;
