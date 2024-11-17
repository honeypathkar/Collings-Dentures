import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BORDERRADIUS, COLORS, FONTSIZE} from '../theme/theme';

interface ProductCardProps {
  width: any;
  height: any;
  vendor: String;
  imageLink: any;
  name: String;
}

const ProductCard: React.FC<ProductCardProps> = ({
  width,
  height,
  vendor,
  imageLink,
  name,
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.upperContainer}>
        <View>
          <Text style={styles.width}>W-{width}</Text>
          <Text style={styles.height}>H-{height}</Text>
        </View>
        <Text style={styles.vendorName}>
          {vendor.charAt(0).toUpperCase() +
            vendor.slice(1).replace(/([A-Z])/g, ' $1')}
        </Text>
      </View>
      <Image
        source={{
          uri: imageLink,
        }}
        style={styles.productImage}
      />
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>{name}</Text>
        <Image source={require('../assets/rectangle.png')} />
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryWhiteHex,
    borderColor: COLORS.primaryBlackHex,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: BORDERRADIUS.radius_10,
    shadowColor: COLORS.primaryBlackHex,
    shadowRadius: 5,
  },
  productImage: {
    height: 80,
  },
  upperContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    alignItems: 'center',
  },
  width: {
    color: '#0000004d',
    fontWeight: 'bold',
    fontSize: FONTSIZE.size_16,
  },
  height: {
    color: '#0000004d',
    fontWeight: 'bold',
    fontSize: FONTSIZE.size_16,
  },
  title: {
    color: COLORS.primaryBlackHex,
    fontWeight: 'bold',
    fontSize: FONTSIZE.size_20,
  },
  bottomContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  vendorName: {
    color: COLORS.primaryBlackHex,
    fontWeight: 'bold',
    fontSize: FONTSIZE.size_16,
  },
});
