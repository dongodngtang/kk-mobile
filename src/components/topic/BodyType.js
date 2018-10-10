import React, {Component} from 'react';
import {Card, Grid} from 'antd-mobile';
import {strNotNull, getDateDiff} from '../../utils/utils';
import {Images} from '../../Thems';
import styles from '../indexPage/index.less';

export default class BodyType extends Component {

  render() {
    return (
      this.bodyTypes(this.props.rowData)
    )
  }

  bodyTypes = (item) => {
    switch (item.body_type) {
      case "long":
        return this.long(item)
      case "short":
        return this.short(item)
    }
  };

  long = (item) => {

    let title2 = item.title;
    let des = title2.replace(/[\n\r]/g, '<br/>');
    return <div>
      {strNotNull(des) ? <div
        className={styles.body} dangerouslySetInnerHTML={{__html: des}}/> : null}

      {strNotNull(item.cover_link) ? <div
        className={styles.long_cover} style={{marginRight: 17}}>
        <img src={item.cover_link}
             onClick={() => {
               this.props.changeState(true,0,item)
             }}
             className={styles.short_image_one}/>
      </div> : null}


    </div>
  };


  short = (item) => {
    const {images, body} = item;
    let des = body.replace(/[\n\r]/g, '<br/>');
    return <div>
      {strNotNull(des) ? <div
        className={styles.body}
        style={{marginBottom:9}}
        dangerouslySetInnerHTML={{__html: des}}/> : null}

      {images && images.length > 0 ? this.shortImage(item) : null}

    </div>
  };

  shortRenderItem = (item, index) => {
    return (
      <div key={item.url} className={styles.imgView}>
        <img className={styles.short_image}
             onClick={() => {
               this.props.changeState(true, index, item)
             }}
             src={item.url}/>
      </div>
    )
  };

  shortImage = (rowData) => {
    if (rowData.images.length === 1 && strNotNull(rowData.images[0].url)) {
      return (
        <img className={styles.short_image_one}
             onClick={() => {
               this.props.changeState(true, 0, rowData)
             }}
             src={rowData.images[0].url}/>
      )
    }else{
      return <Grid data={rowData.images} columnNum={3}
                   hasLine={false}
                   itemStyle={{ height: '108px'}}
                   renderItem={this.shortRenderItem}/>
    }
  }
}