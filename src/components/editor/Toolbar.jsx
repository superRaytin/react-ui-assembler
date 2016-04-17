import React, { PropTypes, Component } from 'react';
import {
  Button,
  Icon
} from 'antd';

const ButtonGroup = Button.Group;

class Toolbar extends Component {
  handleBack() {
    this.props.router.goBack();
  }

  handleShowSaveModal() {
    this.props.actions.toggleWidgetEditModal(true);
  }

  render() {
    return (
      <div className="silo-toolbar-wrapper">
        <div className="silo-toolbar-group">
          <ButtonGroup>
            <Button type="primary" onClick={this.handleBack.bind(this)}>
              <Icon type="left" /><span>返回</span>
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
  router: PropTypes.object,
  editor: PropTypes.object,
};

export default Toolbar;
