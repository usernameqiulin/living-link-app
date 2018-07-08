import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavBar } from '@bone/bone-mobile-ui';
import style from '../public/style';
import Switch from '../view/SwitchView';

const styles = style;

// const generateBackIcon = ()=>{ return (<View style={styles.buttonIconStyle} />) }
export default class SwitchPage extends Bone.Page {
  constructor(...args) {
    super(...args);

    this.onBackButtonPress = this.onBackButtonPress.bind(this);
    this.onMoreButtonPress = this.onMoreButtonPress.bind(this);
  }

  render() {
    
    return (
      <View style={{ flex: 1 }}>
        {/* < NavBar
          style={navbarStyleOptions}
          // 设置左按钮为组件
          leftButtonContent={generateBackIcon()}
          titleContent='电源开关'
          // 设置右按钮为文字
          rightButtonContent='确定'
          onLeftButtonPress={this.onBackButtonPress}
          onRightButtonPress={this.onMoreButtonPress}
        /> */}
        <NavBar
            title="坐等传递参数"
            left={style}
            right = "确定"
            onLeftPress={() => Bone.navigation.pop()}
             onRightPress={this.onMoreButtonPress}
          />
        <Switch style={{ flex: 1 }}/>
      </View>
    );
  }

  onBackButtonPress() {
    console.log('onBackButtonPress');
    Bone.navigation.pop();
  }

  onMoreButtonPress() {
    // Bone.navigation.popTo('/equipment'); //跳转到设备动作页(EquipmentPage)
    Bone.navigation.push('/edit'); //跳转到设备动作页(EquipmentPage)
  }
}

// 设置导航栏的样式
const navbarStyleOptions = {
  style: { backgroundColor: '#fff' },
  rightButtonStyle: { color: '#1fc8a2' },
  titleStyle: { color: '#000'},
  marginBottom:20,
};
