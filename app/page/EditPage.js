import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavBar } from '@bone/bone-mobile-ui';
import style from '../public/style';
// import Edit from '../view/EditView';
import Edit from '../view/ScrollView';

const styles = style;

const generateBackIcon = ()=>{ return (<View style={styles.buttonIconStyle} />) }
export default class EditPage extends Bone.Page {
  constructor(...args) {
    super(...args);

    this.onBackButtonPress = this.onBackButtonPress.bind(this);
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* < NavBar
          style={navbarStyleOptions}
          // 设置左按钮为组件
          leftButtonContent={generateBackIcon()}
          titleContent='编辑预约'
          // 设置右按钮为文字
          rightButtonContent='确定'
          onLeftButtonPress={this.onBackButtonPress}
          onRightButtonPress={this.onMoreButtonPress}
        /> */}
         <NavBar
            title="编辑预约"
            left={style}
            onLeftPress={this.onBackButtonPress}
          />
        <Edit navigation={Bone.navigation} style={{ flex: 1 }}/>
      </View>
    );
  }

  onBackButtonPress() {
    console.log('onBackButtonPress');
    Bone.navigation.pop();
  }
}

// 设置导航栏的样式
const navbarStyleOptions = {
  style: { backgroundColor: '#fff' },
  rightButtonStyle: { color: '#1fc8a2' },
  titleStyle: { color: '#000'},
  marginBottom:20,
};
