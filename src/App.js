/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Button,
  NavigatorIOS
} from 'react-native';
import PropTypes from 'prop-types';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class FlashBeer extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Home,
          title: 'Home',
          passProps: {index: 1},
        }}
        style={{
          flex: 1
        }}
      />
    )
  }
}

class Home extends React.Component {
  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired
    }),
    navigator: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    this._onForward = this._onForward.bind(this);
  }

  _onForward() {
    this.props.navigator.push({
      component: Tables,
      title: 'Tables',
      passProps: {}
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.searchButton}
          onPress={this._onForward}>
          <Text style={styles.searchButtonText}>{"SEARCH TABLES"}</Text>
        </TouchableOpacity> 
      </View>
    )
  }
}

class Tables extends React.Component {
  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired
    }),
    navigator: PropTypes.object.isRequired,
  }

  // constructor(props, context) {
  //   super(props, context);
  //   this._onForward = this._onForward.bind(this);
  // }

  constructor (props) {
    super(props)
    this.state = {
      isEnabled: false,
      discovering: false,
      devices: [
        {key: 'a', name: 'Table 1'},
        {key: 'b', name: 'Table 2'},
        {key: 'c', name: 'Table 3'}
      ],
      unpairedDevices: [],
      connected: false,
      section: 0
    }
  }

  _connect = (device) => {
    alert(device);
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE"
        }}
      />
    );
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.tablesContainer}>
          <FlatList
            data={this.state.devices}
            ItemSeparatorComponent={this.renderSeparator}
            renderItem={({item}) => 
              <TouchableOpacity onPress={() => this._connect(item.key)}>
                <Text style={styles.item}>{item.name}</Text>
              </TouchableOpacity>
            }
          />
        </View>
      </ScrollView>
    );
  }
}

// export default class NormalApp extends Component<{}> {

//   constructor (props) {
//     super(props)
//     this.state = {
//       isEnabled: false,
//       discovering: false,
//       devices: [
//         {key: 'a', name: 'Table 1'},
//         {key: 'b', name: 'Table 2'},
//         {key: 'c', name: 'Table 3'}
//       ],
//       unpairedDevices: [],
//       connected: false,
//       section: 0
//     }
//   }

//   _connect = (device) => {
//     alert(device);
//   }

//   searchView() {
//     return (
//       <Button
//         onPress={() => device('search!')}
//         title="Search Table"
//         color="#841584"
//         accessibilityLabel="Search table on this bar"
//       />
//     );
//   }

//   render() {
//     return (
//       <ScrollView>
//         <View style={styles.container}>
//           <Text style={styles.welcome}>
//             Select Your Table
//           </Text>
//           <FlatList
//             data={this.state.devices}
//             renderItem={({item}) => 
//               <TouchableHighlight onPress={() => this._connect(item.key)}>
//                 <Text style={styles.item}>{item.name}</Text>
//               </TouchableHighlight>
//             }
//           />
//         </View>
//       </ScrollView>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  item: {
    fontSize: 18,
    height: 44,
    padding: 10,
    width: '100%'
  },
  searchButton: {
    alignItems: 'center',
    backgroundColor: '#fab71b',
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 16,
    width: 150
  },
  searchButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  tablesContainer: {
    backgroundColor: '#F5FCFF'
  }
});
