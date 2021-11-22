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
    title: 'Located island wide is dedicated to offer a wide array of Clothes ',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'http://ldnfashion.com/wp-content/uploads/2012/10/Burberry-menswear-7.jpg',
  },
  {
    title: 'Sri Lanka’s one of the biggest online fashion chain with its 5 outlets. ',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.pinimg.com/originals/e9/13/a1/e913a1dff281498259d0f3cbd00c6345.jpg',
  },
  
  {
    title: 'Located island wide is dedicated to offer a wide array of Clothes ',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://c1.wallpaperflare.com/preview/438/292/1024/tshirt-shirt-clothes-casual.jpg',
  },
  {
    title: 'Accessories for Men offering a great Customer Experience.',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://c1.wallpaperflare.com/preview/924/432/853/store-clothing-shop-bouique.jpg',
  },
  {
    title: 'Check out the latest promotions and offers at Chanu Fashions',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://cdn.wallpapersafari.com/79/54/oC20qw.jpg',
  },
  
  {
    title: '100% recommended online shoipping platform',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://media.istockphoto.com/photos/luxury-clothing-shop-for-men-picture-id831659416?k=20&m=831659416&s=612x612&w=0&h=WrIgmMU6EO55c9ITwVz-_rUkHl-1UmRatNTq4NB4_u0=',
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