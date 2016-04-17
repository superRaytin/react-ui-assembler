import React, { PropTypes, Component } from 'react';
import { push } from 'react-router-redux';
import {
  Icon,
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
            <a href="#">删除</a>
          </span>
        );
      }
    }];
  }

  handleEdit(proto) {
    console.log('edit proto', proto);
    /*
    this.props.router.push({
      pathname: '/editor',
      query: {
        id: widget.id
      },
      state: {
        widget
      }
    });
     */
  }

  handleView(proto) {
    console.log('view proto', proto);
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

