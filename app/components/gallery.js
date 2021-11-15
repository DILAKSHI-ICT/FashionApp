import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';

const ENTRIES1 = [
  {
    title: 'Sri Lanka’s one of the biggest online fashion chain with its 5 outlets. ',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://estudioshops.com/wp-content/uploads/2019/07/Womens-Clothing-Boutique.jpg',
  },
  
  {
    title: 'Located island wide is dedicated to offer a wide array of Clothes ',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://www.nhmagazine.com/content/uploads/2020/04/bellafunk.jpg',
  },
  {
    title: 'Accessories for  Women offering a great Customer Experience.',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://img.freepik.com/free-photo/women-s-fashion-store-shopping-center_1112-8050.jpg?size=626&ext=jpg',
  },
  {
    title: 'Check out the latest promotions and offers at Chanu Fashions',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  },
  
  {
    title: '100% recommended online shoipping platform',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://bloximages.newyork1.vip.townnews.com/laduenews.com/content/tncms/assets/v3/editorial/f/90/f90646af-20e4-5577-a3f4-552322537ab8/5d02680fc0595.image.jpg?crop=1607%2C1205%2C56%2C0&resize=1607%2C1205&order=crop%2Cresize',
  },
  
];
const {width: screenWidth} = Dimensions.get('window');

const MyCarousel = props => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{uri: item.illustration}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
     
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      />

      <TouchableOpacity onPress={goForward}>
        <Text>Highlights from Us</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 50,
    height: screenWidth - 50,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});