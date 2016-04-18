import React, { PropTypes, Component } from 'react';
import {
  message,
  Button,
  Icon,
  Modal,
  Form,
  Input,
  Select,
  Checkbox,
  Radio
} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
const ButtonGroup = Button.Group;

class WidgetEditModal extends Component {
  handleOk() {
    this.props.form.validateFields((errors, values) => {
      if (!!errors) {
        message.error('表单未填或填写不正确');
        return;
      }

      this.props.actions.toggleWidgetEditModal(false);
      if (this.props.handleOk) {
        this.props.handleOk(values);
      }
    });
  }

  handleCancel(e) {
    this.props.actions.toggleWidgetEditModal(false);
    if (this.props.handleCancel) {
      this.props.handleCancel();
    }
  }

  render() {
    const { getFieldProps } = this.props.form;
    const widgetData = this.props.editor.widgetData;

    return (
      <Modal title="保存"
             visible
             onOk={this.handleOk.bind(this)}
             onCancel={this.handleCancel.bind(this)}>
        <div>
          <Form horizontal>
            <FormItem
              id="control-input-name"
              label="名称："
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 16 }}
              required>
              <Input id="control-input-name"
                {...getFieldProps('name', {
                  rules: [
                    {
                      required: true,
                      message: '请填写名称'
                    }
                  ],
                  initialValue: widgetData.name
                })} />
            </FormItem>

            <FormItem
              id="control-textarea-description"
              label="描述："
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 16 }}
              required>
              <Input type="textarea" id="control-textarea-description" rows="2"
                {...getFieldProps('description', {
                  rules: [
                    {
                      required: true,
                      message: '请填写描述'
                    }
                  ],
                  initialValue: widgetData.description
                })} />
            </FormItem>

            <FormItem
              id="control-select-group"
              label="所属群组："
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 16 }}
              required>
              <Select id="control-select-group" style={{ width: 200 }}
                {...getFieldProps('groupId', {
                  rules: [
                    {
                      required: true,
                      message: '请选择群组'
                    }
                  ],
                  initialValue: widgetData.groupId
                })}>
                <Option value="45">jack</Option>
                <Option value="12">AntD 默认组件</Option>
              </Select>
            </FormItem>

            <FormItem
              id="control-checkbox-if-public"
              label="是否公开："
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 16 }} >
              <label className="ant-checkbox-inline">
                <Checkbox id="control-checkbox-if-public"
                  {...getFieldProps('private', { initialValue: widgetData.private })} />
              </label>
            </FormItem>

          </Form>
        </div>
      </Modal>
    );
  }
}

WidgetEditModal.propTypes = {
  actions: PropTypes.object,
  editor: PropTypes.object,
  form: PropTypes.object,
  handleOk: PropTypes.func,
  handleCancel: PropTypes.func,
};

WidgetEditModal = Form.create()(WidgetEditModal);

export default WidgetEditModal;
