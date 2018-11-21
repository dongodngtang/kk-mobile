import React, {Component} from 'react';
import {Modal, Grid, Flex} from 'antd-mobile';
import styles from './index.less';
import {Images} from '../../Thems';
import {routerRedux} from 'dva/router';

export default class LotteryPage extends Component {

  state={
    visible:true
  }

  toggle = () => {
    this.setState({
      visible: !this.state.visible
    })
  };

  render(){
    return(
      <Modal
        transparent={true}
        visible={this.state.visible}
      >
        <div style={{
          display:'flex',
          flex: 1,
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.6)'
        }}>
          <div onClick={()=>{
            this.toggle();
          }} style={{
            position: 'absolute',
            top: 30,
            right: 25,
            zIndex: 999
          }}>
            <img style={{width: 30, height: 30}} src={Images.lottery_close}/>
          </div>
        </div>

      </Modal>
    )
  }
}
