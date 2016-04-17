import React, { PropTypes, Component } from 'react';
import { push } from 'react-router-redux';
import {
  Icon,
  message,
  Table
} from 'antd';

class ProtoList extends Component {
  componentWillMount() {
    this.props.actions.fetchPersonalPrototypes();
  }

  getTableData() {
    return this.props.personal.prototypes.map((proto) => {
      return {
        ...proto,
        key: proto.id
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
        return <a onClick={self.handleView.bind(self, record)}>{text}</a>;
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
            <a onClick={self.handleRemove.bind(self, record)}>删除</a>
          </span>
        );
      }
    }];
  }

  handleEdit(proto) {
    this.props.router.push({
      pathname: `/workspace/${proto.id}`,
      state: {
        proto
      }
    });
  }

  handleRemove(proto) {
    message.info('删除功能暂未开放。');
  }

  handleView(proto) {
    this.props.router.push({
      pathname: `/view/${proto.id}`,
      state: {
        proto
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

ProtoList.propTypes = {
  actions: PropTypes.object,
  router: PropTypes.object,
  personal: PropTypes.object
};

export default ProtoList;

