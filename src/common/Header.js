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
     fontSize: 30,
     fontStyle: 'italic',
     color: '#000',
     fontWeight: 'bold',
     fontFamily: 'notoserif'
   },
   viewStyle: {
     backgroundColor: '#fff',
     justifyContent: 'center',
     alignItems: 'center',
     height: 60,
     paddingTop: 20,
     marginTop: 40
   }
 }
 // export the component
 export {Header};