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
    illustration: 'https://cdn.parkrecord.com/wp-content/uploads/sites/11/2016/06/20160324__Couturep1.jpg',
  },
  {
    title: 'Sri Lanka’s one of the biggest online fashion chain with its 5 outlets. ',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.pinimg.com/originals/60/73/bf/6073bfa78b16df641639c6ced35dd189.jpg',
  },
  
  {
    title: 'Located island wide is dedicated to offer a wide array of Clothes ',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://redtri.com/wp-content/uploads/2016/04/monica-andy-guideshop.jpeg',
  },
  {
    title: 'Accessories for Kids offering a great Customer Experience.',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://www.babycloset.ph/wp-content/uploads/2017/05/Kids-baby-mom-store.jpg',
  },
  {
    title: 'Check out the latest promotions and offers at Chanu Fashions',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.pinimg.com/originals/69/94/29/6994292cba1ca55b43360de68a50853d.jpg',
  },
  
  {
    title: '100% recommended online shoipping platform',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://media.timeout.com/images/102718874/image.jpg',
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