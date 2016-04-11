import React, { PropTypes, Component } from 'react';
import { Icon, Input, Button } from 'antd';
import classNames from 'classnames';
const InputGroup = Input.Group;

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      focus: false
    };
  }

  handleInputChange(e) {
    const value = e.target.value;
    this.setState({
      value
    });

    if (value.trim() === '') {
      this.props.actions.restoreWidgets(this.props.widget.backdata);
    } else {
      this.props.actions.filterWidgets(value);
    }
  }

  handleFocusBlur(e) {
    this.setState({
      focus: e.target === document.activeElement,
    });
  }

  handleSearch() {
    if (this.props.onSearch) {
      this.props.onSearch();
    }
  }

  render() {
    const btnCls = classNames({
      'ant-search-btn': true,
      'ant-search-btn-noempty': !!this.state.value.trim(),
    });
    const searchCls = classNames({
      'ant-search-input': true,
      'ant-search-input-focus': this.state.focus,
    });

    return (
      <InputGroup className={searchCls} style={this.props.style}>
        <Input placeholder={this.props.placeholder}
               style={this.props.style}
               value={this.state.value}
               onChange={this.handleInputChange.bind(this)}
               onFocus={this.handleFocusBlur.bind(this)}
               onBlur={this.handleFocusBlur.bind(this)} />
        <div className="ant-input-group-wrap">
          <Button className={btnCls} size={this.props.size} onClick={this.handleSearch}>
            <Icon type="search" />
          </Button>
        </div>
      </InputGroup>
    );
  }
}

SearchInput.propTypes = {
  actions: PropTypes.object,
  widget: PropTypes.object,
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.number,
};

export default SearchInput;
