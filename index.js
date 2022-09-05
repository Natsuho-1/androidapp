import {AppRegistry} from 'react-native';
import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';

class HomeActivity extends Component {
  // Adding header title, color and font weight
  static navigationOptions = {
    title: 'Espacio',
    headerStyle: {
      backgroundColor: '#03A9F4',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Home Screen</Text>
      </View>
    );
  }
}

const DATA = [
  {
    id: '1',
    title: 'Mercurio',
    src: require('./src/imgs/Mercurio.jpg'),
  },
  {
    id: '2',
    title: 'Venus',
    src: require('./src/imgs/Venus.jpg'),
  },
  {
    id: '3',
    title: 'Tierra',
    src: require('./src/imgs/Tierra.jpg'),
  },
  {
    id: '4',
    title: 'Luna',
    src: require('./src/imgs/Luna.jpg'),
  },
  {
    id: '5',
    title: 'Marte',
    src: require('./src/imgs/Marte.jpg'),
  },
  {
    id: '6',
    title: 'Ceres',
    src: require('./src/imgs/Ceres.jpg'),
  },
];
const Item = ({title, img}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <image style={styles.img} source={img}></image>
  </View>
);

const App = () => {
  const renderItem = ({item}) => <Item title={item.title} img={item.src} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
    borderColor: '#000000',
  },
  title: {
    fontSize: 32,
  },
  img: {
    width: 100,
    Height: 125,
    borderwidth: 2,
    resizeMode: 'contain',
    margin: 8,
    borderRadius: 150,
  },
});
AppRegistry.registerComponent('cars', () => App);
