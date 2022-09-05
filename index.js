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
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
  },
  img: {
    width: 200,
    Height: 125,
    borderwidth: 2,
    resizeMode: 'contain',
    margin: 8,
  },
});
AppRegistry.registerComponent('cars', () => App);
