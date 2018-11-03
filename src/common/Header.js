 // import the libraries
 import React from 'react';
 import {Text, View} from 'react-native';
 
 // create the component
 const Header = (props) => {
   const {textStyle, viewStyle} = styles;
   return (
     <View style={viewStyle}>
       <Text style={textStyle}>{props.headerText}</Text>
     </View>
   );
 };
 
 const styles = {
   textStyle: {
     fontSize: 20,
     color: '#000',
     fontWeight: 'bold',
     fontStyle: 'italic'
   },
   viewStyle: {
     backgroundColor: '#f8f8f8',
     justifyContent: 'center',
     alignItems: 'center',
     height: 60,
     paddingTop: 20
   }
 }
 // export the component
 export {Header};