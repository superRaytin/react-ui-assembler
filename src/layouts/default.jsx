import React, { PropTypes, Component } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import './default.less';

class DefaultLayout extends Component {
  render() {
    return (
      <div id="wrapper" className="silo">
        <Header route={this.props.route} />
        <section className="silo-container">
          {this.props.children}
          <Footer />
        </section>
      </div>
    );
  }
}

DefaultLayout.propTypes = {
  children: PropTypes.object,
  route: PropTypes.object
};

export default DefaultLayout;

