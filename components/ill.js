import React,{
  View,
  Text,
  StyleSheet
} from 'react-native';

import ZListView from '../js/ZListView';

class ill extends React.Component {
  componentWillMount() {
    console.log(this.props);
  }
  componentDidMount() {
    console.log("ill");
  }
  render() {
    return (
      <View style={{
        flex:1,
        // alignItems:"center",
        // justifyContent:"center",
        // padding:30,
        marginTop:65,
        backgroundColor:'#fff'
        }}>
        <View style={{alignItems:"stretch",backgroundColor:"#ff0",flexDirection:"row",height:30}}>
          <View style={styles.tabs_text}><Text>按部位</Text></View>
          <View style={styles.tabs_text}><Text>按疾病</Text></View>
          <View style={styles.tabs_text}><Text>按症状</Text></View>
        </View>
        <ZListView {...this.props} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    paddingTop:0,
    margin:0,
    borderBottomWidth:2,
    borderColor:"#ff0000"
  },
  tabs_text:{
    alignItems:"center",
    borderBottomWidth:1,
    backgroundColor:"#c3d4e5",
    flex:1,
    justifyContent:"center"
  },
});

module.exports = ill;
