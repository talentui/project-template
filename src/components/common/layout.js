import React from 'react';
import Header from './header';
import Footer from './footer';
export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header name="hehe" title={100} />
        <div className="content-wrapper">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}