import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CustomCheckBox from './CustomCheckBox';
import {BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE} from '../theme/theme';
import TeethData from '../data/TeethData';
import ProductCard from './ProductCard';
import {Image} from 'react-native-elements';

type ShapeKeys = 'ovoid' | 'tapering' | 'square' | 'rectangular';
type ColorKeys = 'white' | 'yellowishWhite' | 'grayish' | 'brownish';
type VendorKeys = 'vitapanTeeth';
type CaseKeys = 'lower' | 'upper';

const FilterForm = ({route, navigation}: any) => {
  const {width, height, massValue} = route.params;

  const [mass, setMass] = useState<string>(massValue || '');
  const [widthState, setWidthState] = useState<string>(width || '');
  const [heightState, setHeightState] = useState<string>(height || '');
  const [shapeState, setShapeState] = useState<Record<ShapeKeys, boolean>>({
    ovoid: false,
    tapering: false,
    square: false,
    rectangular: false,
  });
  const [colorState, setColorState] = useState<Record<ColorKeys, boolean>>({
    white: false,
    yellowishWhite: false,
    grayish: false,
    brownish: false,
  });
  const [vendor, setVendor] = useState<Record<VendorKeys, boolean>>({
    vitapanTeeth: false,
  });
  const [caseTypeState, setCaseTypeState] = useState<Record<CaseKeys, boolean>>(
    {
      lower: false,
      upper: false,
    },
  );

  const [filteredData, setFilteredData] = useState<any[]>([]);

  const clearAllFilters = () => {
    setMass('');
    setWidthState('');
    setHeightState('');
    setShapeState({
      ovoid: false,
      tapering: false,
      square: false,
      rectangular: false,
    });
    setColorState({
      white: false,
      yellowishWhite: false,
      grayish: false,
      brownish: false,
    });
    setVendor({
      vitapanTeeth: false,
    });
    setCaseTypeState({
      lower: false,
      upper: false,
    });
  };

  const filterData = () => {
    let filtered = TeethData;

    // Filter by Mass
    if (mass) {
      const parsedMass = parseFloat(mass);
      if (!isNaN(parsedMass)) {
        filtered = filtered.filter(
          item => parseFloat(item.mass) === parsedMass,
        );
      }
    }

    // Filter by Width
    if (widthState) {
      const parsedWidth = parseFloat(widthState);
      if (!isNaN(parsedWidth)) {
        filtered = filtered.filter(
          item => parseFloat(item.width) === parsedWidth,
        );
      }
    }

    // Filter by Height
    if (heightState) {
      const parsedHeight = parseFloat(heightState);
      if (!isNaN(parsedHeight)) {
        filtered = filtered.filter(
          item => parseFloat(item.height) === parsedHeight,
        );
      }
    }

    // Filter by Shape
    if (Object.values(shapeState).some(v => v)) {
      filtered = filtered.filter(item => shapeState[item.shape as ShapeKeys]);
    }

    // Filter by Color
    if (Object.values(colorState).some(v => v)) {
      filtered = filtered.filter(item => colorState[item.color as ColorKeys]);
    }

    // Filter by Vendor
    if (Object.values(vendor).some(v => v)) {
      filtered = filtered.filter(item => vendor[item.vendor as VendorKeys]);
    }

    // Filter by Case
    if (Object.values(caseTypeState).some(v => v)) {
      filtered = filtered.filter(item => caseTypeState[item.case as CaseKeys]);
    }

    // Update the filtered data
    setFilteredData(filtered);
  };

  useEffect(() => {
    filterData();
  }, [
    mass,
    widthState,
    heightState,
    shapeState,
    colorState,
    vendor,
    caseTypeState,
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.clearFilters} onPress={clearAllFilters}>
        Clear all filters
      </Text>

      <Text style={styles.heading}>Filter by Size</Text>
      <TextInput
        style={styles.input}
        placeholder="Mass"
        value={mass}
        keyboardType="numeric"
        onChangeText={setMass}
      />
      <View style={styles.SizeContainer}>
        <TextInput
          style={styles.inputWidth}
          placeholder="Width"
          value={widthState}
          keyboardType="numeric"
          onChangeText={setWidthState}
        />
        <TextInput
          style={styles.inputHeight}
          placeholder="Height"
          value={heightState}
          keyboardType="numeric"
          onChangeText={setHeightState}
        />
      </View>

      {/* Shape Filters */}
      <Text style={styles.heading}>Filter by Shape</Text>
      {Object.keys(shapeState).map(key => (
        <CustomCheckBox
          key={key}
          title={key.charAt(0).toUpperCase() + key.slice(1)}
          isChecked={shapeState[key as ShapeKeys]}
          onPress={() =>
            setShapeState({
              ...shapeState,
              [key as ShapeKeys]: !shapeState[key as ShapeKeys],
            })
          }
        />
      ))}

      {/* Color Filters */}
      <Text style={styles.heading}>Filter by Color</Text>
      {Object.keys(colorState).map(key => (
        <CustomCheckBox
          key={key}
          title={
            key.charAt(0).toUpperCase() +
            key.slice(1).replace(/([A-Z])/g, ' $1')
          }
          isChecked={colorState[key as ColorKeys]}
          onPress={() =>
            setColorState({
              ...colorState,
              [key as ColorKeys]: !colorState[key as ColorKeys],
            })
          }
        />
      ))}

      {/* Vendor Filters */}
      <Text style={styles.heading}>Filter by Vendor</Text>
      {Object.keys(vendor).map(key => (
        <CustomCheckBox
          key={key}
          title={
            key.charAt(0).toUpperCase() +
            key.slice(1).replace(/([A-Z])/g, ' $1')
          }
          isChecked={vendor[key as VendorKeys]}
          onPress={() =>
            setVendor({
              ...vendor,
              [key as VendorKeys]: !vendor[key as VendorKeys],
            })
          }
        />
      ))}

      {/* Case Filters */}
      <Text style={styles.heading}>Filter by Case</Text>
      {Object.keys(caseTypeState).map(key => (
        <CustomCheckBox
          key={key}
          title={key.charAt(0).toUpperCase() + key.slice(1)}
          isChecked={caseTypeState[key as CaseKeys]}
          onPress={() =>
            setCaseTypeState({
              ...caseTypeState,
              [key as CaseKeys]: !caseTypeState[key as CaseKeys],
            })
          }
        />
      ))}

      {/* Results Section */}
      <Text style={styles.headingResult}>
        Showing 1 - {filteredData.length} Results of {TeethData.length}
      </Text>
      {filteredData.length > 0 ? (
        filteredData.map((data: any) => (
          <TouchableOpacity
            key={data._id}
            onPress={() => {
              navigation.push('Details', {
                id: data._id,
                name: data.name,
                width: data.width,
                height: data.height,
                imageLink: data.imageLink,
                vendor: data.vendor,
                shape: data.shape,
                color: data.color,
              });
            }}>
            <ProductCard
              name={data.name}
              width={data.width}
              height={data.height}
              vendor={data.vendor}
              imageLink={data.imageLink}
            />
          </TouchableOpacity>
        ))
      ) : (
        <View>
          <Image
            source={require('../assets/noDataFound.png')}
            style={styles.noData}
          />
          <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
            No Data Found
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: COLORS.primaryWhiteHex,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: BORDERRADIUS.radius_10,
  },
  clearFilters: {
    color: 'blue',
    marginBottom: 5,
  },
  heading: {
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: FONTSIZE.size_24,
    fontFamily: FONTFAMILY.poppins_bold,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    borderRadius: BORDERRADIUS.radius_10,
  },
  SizeContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  inputWidth: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    flex: 1,
    borderRadius: BORDERRADIUS.radius_10,
  },
  inputHeight: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    flex: 1,
    borderRadius: BORDERRADIUS.radius_10,
  },
  noData: {
    height: 200,
  },
  headingResult: {
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: FONTSIZE.size_20,
    fontFamily: FONTFAMILY.poppins_bold,
    marginBottom: 10,
  },
});

export default FilterForm;
