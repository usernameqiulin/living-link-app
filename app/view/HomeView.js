import React, { Component } from 'react';
import { StyleSheet, View,Text, ScrollView, Dimensions,TouchableOpacity } from 'react-native';
import { Switch,List } from '@bone/bone-mobile-ui';
export default class Home extends Component {
  constructor(...args) {
      super(...args);
     this.state = {
       checks: [true, false, true, true],
    result: [
      { id:1, time: "2: 36 周一 周二 周三 周四 周五 周六",value:true,
        content: "加湿器-开启"},
        { id:2, time: "3: 30  周二 周三 周四 周五 周六",value:false,
        content: "冰箱-关闭"},
       
      { id:3, time: "2: 36 周一 周二 周三 周四 周五 周六",value:true,
        content: "加湿器-开启"},
        { id:4, time: "3: 30  周二 周三 周四 周五 周六",value:false,
        content: "冰箱-关闭"},
       
      { id:5, time: "2: 36 周一 周二 周三 周四 周五 周六",value:true,
        content: "加湿器-开启"},
        { id:6, time: "3: 30  周二 周三 周四 周五 周六",value:false,
        content: "冰箱-关闭"},
       
      { id:7, time: "2: 36 周一 周二 周三 周四 周五 周六",value:true,
        content: "加湿器-开启"},
        { id:8, time: "3: 30  周二 周三 周四 周五 周六",value:false,
        content: "冰箱-关闭"},
       
      { id:9, time: "2: 36 周一 周二 周三 周四 周五 周六",value:true,
        content: "加湿器-开启"},
        { id:10, time: "3: 30  周二 周三 周四 周五 周六",value:false,
        content: "冰箱-关闭"},
  ]
}
//改变this指向
    // this.resetdata = this.resetdata.bind(this)
    // this.onTouchlogin = this.onTouchlogin.bind(this)
    this.change = this.change.bind(this)
  }
   onChange = (checked, index) => {
    const checks = [...this.state.checks];
    checks.splice(index, 1, !checked);
    this.setState({ checks });
  };
  render() {
        const { checks } = this.state;
    const { result } = this.state;//数据赋值给rsult
    return (
       <View style={styles.body}>
         <ScrollView style={styles.scrollBody} automaticallyAdjustContentInsets={false}>
         <View style={styles.topboon}>
            {result.map(item =>{  //遍历每一个数据
              return (
                <View style={styles.switchItem} key={item.id}>
                < List >
                  <List.Item
              title={item.content}
              subtitle={item.time}
              extra={<Switch checked={checks[2]} onChange={checked => this.onChange(checked, 2)} color="#1fc8a2" />}
            />
            </List >
                </View> 
            )})}
            </View>
        </ScrollView>
      </View>
    );
  }
  //请求数据
  // componentDidMount() {
  //   fetch('http://www.abc.com/api.index.json')
  //     .then((res) => res.json)
  //     .then(this.resetdata)
  //     .catch(() =>{alert('请求数据异常')})
  // }
  // resetdata(res){
  //   if(res.time && res.content){
  //     this.setState({
  //       result:res.data.result
  //     })
  //   }
  // }

change(){
  console.log("按钮开关事件被触发")
}

}
const styles = StyleSheet.create({
  home: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
   body: {
       height: Dimensions.get('window').height,
       backgroundColor: '#efeef1',
     },
  scrollBody: {
    flex: 1,
  },
    switchItem:{
       marginBottom:1,
       
     },
     topboon:{
       marginTop: 20,
       marginBottom: 40,
     }
    
});
