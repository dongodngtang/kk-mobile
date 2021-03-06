import React, { Component } from 'react';
import { connect } from 'dva';
import SaunnaInfo from '../../components/saunas/SaunnaInfo'

@connect(({ sauna }) => ({
  sauna
}))
export default class Sauna extends Component {
  componentDidMount() {
    const { params } = this.props.match;
    this.props.dispatch({
      type: 'sauna/fetchSauna',
      payload: { id: params.id },
    });
    window.scrollTo(0, 0);
  }
  render() {
    console.log(this.props);
    const { sauna } = this.props.sauna;
    return (
      <div>
        <SaunnaInfo sauna={sauna} dispatch={this.props.dispatch}/>
        {/*<h3>{sauna.title}</h3>*/}
        {/*<div className="renderHtmlData"*/}
             {/*id="renderHtmlData"*/}
             {/*dangerouslySetInnerHTML={{__html: sauna.description}}/>*/}
      </div>
    );
  }
}
