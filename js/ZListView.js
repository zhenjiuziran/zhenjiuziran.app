import React,{
  ListView,
  ScrollView,
  TouchableHighlight,
  View,
  Text,
  StyleSheet,
  ActivityIndicatorIOS
} from 'react-native';

var illData = require("./data/ill");
var illVideo = require("../components/illVideo");

var LOREM_IPSUM = "AAAAA";
var ZListView = React.createClass({
  statics: {
    title: '<ListView> - Simple',
    description: 'Performant, scrollable list of data.'
  },

  getInitialState: function() {
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged:(s1,s2)=>s1!==s2,
      getRowData:function(data,sectionId,rowId) {
        // console.log("getRowData");
        // console.log(data,sectionId,rowId);
        return data[sectionId+":"+rowId];
      },
      getSectionHeaderData:function(data,sectionId) {
        // console.log("getSectionHeaderData");
        // console.log(data,sectionId);
        return data[sectionId];
      }
    });
    var data = illData.getData();
    return {
      dataSource: ds.cloneWithRowsAndSections(this._genRows({}),data['section'],data['row']),
    };
  },

  _pressData: ({}: {[key: number]: boolean}),

  componentWillMount: function() {
    this._pressData = {};
  },

  renderSectionHeader: function(sectionData, sectionID) {
    // console.log("renderSectionHeader");
    // console.log(sectionData,sectionID);
    return (
      <View style={styles.section}>
        <Text style={styles.sectionText}>{sectionData}</Text>
      </View>
      )
  },
  // renderFooter: function() {
  //   return (
  //     <View>
  //       <ActivityIndicatorIOS
  //         animating={true}
  //         size={'large'} />
  //     </View>)
  // },
  render: function() {
    return (
      <ScrollView contentContainerStyle={{padding:0,flex:1,marginTop:0}}
      centerContent={false}
      automaticallyAdjustContentInsets={false}
      style={{backgroundColor:"#000",padding:0,margin:0,flexDirection:"column",flex:1}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          renderSectionHeader={this.renderSectionHeader}
          renderFooter={this.renderFooter}
          // onEndReached={() => {this.getAllPosts(this.state.currentDay)}}
          // onEndReachedThreshold={40}
          style={{backgroundColor:"#fff"}}
        />
      </ScrollView>
    );
  },

  _renderRow: function(rowData: string, sectionID: number, rowID: number) {
    // var data = rowData
    // console.log("_renderRow");
    // console.log(rowData,sectionID,rowID);
    // var rowHash = Math.abs(hashCode(rowData));
    // var imgSource = {
    //   uri: THUMB_URLS[rowHash % THUMB_URLS.length],
    // };
    return (
      <TouchableHighlight onPress={() => this._pressRow(sectionID,rowID)}>
        <View style={{backgroundColor:"#fff"}}>
          <View style={styles.row}>
            <Text style={styles.text}>
              {rowData.name}
            </Text>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
  },

  _genRows: function(pressData: {[key: number]: boolean}): Array<string> {
    // console.log(pressData);
    var data = illData.getData();
    // var dataBlob = [];
    // for (var ii = 0; ii < 30; ii++) {
    //   var pressedText = pressData[ii] ? ' (pressed)' : '';
    //   dataBlob.push('Row ' + ii + pressedText);
    // }
    return data['data'];
  },

  _pressRow: function(sectionID:number,rowID: number) {
    // console.log(this.props);
    console.log("_pressRow");
    this.props.navigator.push({
       title: "Video Demo",
       component: illVideo,
       backButtonTitle: 'Custom Back',
       passProps: {depth: this.props.depth ? this.props.depth + 1 : 1},
    });
    // this._pressData[rowID] = !this._pressData[rowID];
    // var data = illData.getData();
    //
    // this.setState({dataSource: this.state.dataSource.cloneWithRowsAndSections(
    //   this._genRows(this._pressData),data['section'],data['row']
    // )});
  },
});

const styles = StyleSheet.create({
  row:{
    backgroundColor:"#f0f0f0",
    padding:5,
    margin:0
  },
  sectionText:{
    padding:5,
    backgroundColor:"#c4c4c5"
  }
});

module.exports = ZListView;
