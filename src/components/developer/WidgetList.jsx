import React, { PropTypes, Component } from 'react';
import { push } from 'react-router-redux';
import {
  Icon,
  Table
} from 'antd';

class WidgetList extends Component {
  componentWillMount() {
    this.props.actions.fetchDeveloperWidgets();
  }

  getTableData() {
    return this.props.developer.widgets.map((widget) => {
      return {
        ...widget,
        key: widget.id
      };
    });
  }

  getColumns() {
    const self = this;

    return [{
      title: '名称',
      dataIndex: 'name',
      key: 'name',
      render(text, record) {
        return <a onClick={self.handleEdit.bind(self, record)}>{text}</a>;
      }
    }, {
      title: '描述',
      dataIndex: 'description',
      key: 'description',
    }, {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
    }, {
      title: '操作',
      key: 'operation',
      render(text, record) {
        return (
          <span>
            <a onClick={self.handleEdit.bind(self, record)}>编辑</a>
            <span className="ant-divider"></span>
            <a href="#">删除</a>
          </span>
        );
      }
    }];
  }

  handleEdit(widget) {
    console.log('edit', widget);
    this.props.router.push({
      pathname: '/editor',
      query: {
        id: widget.id
      },
      state: {
        widget
      }
    });
  }

  render() {
    return (
      <div>
        <Table columns={this.getColumns()}
               dataSource={this.getTableData()} />
      </div>
    );
  }
}

WidgetList.propTypes = {
  actions: PropTypes.object,
  router: PropTypes.object,
  developer: PropTypes.object
};

export default WidgetList;

