import React, { Component } from 'react';
import RenderMapContainer from '../containers/RenderMapContainer';
import RenderList from './RenderList';
import '../styles/App.css';

export default class Controls extends Component {
  constructor() {
    super();
    this.state = {
      view: true
    };
    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass(props) {
    const newView = !this.state.view;
    this.setState({ view: newView });
  }

  render() {
    const display =
      this.state.view === true ? <RenderMapContainer /> : <RenderList />;
    const buttonText = this.state.view === true ? 'LIST' : 'MAP';

    return (
      <div>
        <button className="toggle-btn" onClick={() => this.toggleClass()}>
          {buttonText}
        </button>

        <div className="map-list-view">{display}</div>
      </div>
    );
  }
}
