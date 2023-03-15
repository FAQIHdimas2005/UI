import React, {useState} from 'react';
import {
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from '../components';

const App = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSignUp = () => {
    Alert.alert('your account has been registered');
  };

  return (
    <View
      style={{
        backgroundColor: '#180A0A',
        flex: 1,
      }}>
      <View
        style={{
          bottom: -35,
          alignItems: 'center',
          position: 'relative',
          borderBottomWidth: 1,
          borderBottomColor: '#FBCB0A',
          borderBottomEndRadius: 50,
          borderBottomStartRadius: 50,
        }}>
        {/* <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}> */}
        <Image
          style={{width: 82, height: 75, bottom: 10}}
          source={require('../assets/icon/rockstar.png')}
        />
        {/* </TouchableOpacity> */}
        <Image
          style={{width: '60%', height: 75, bottom: 10}}
          source={require('../assets/icon/35eca0bff1a2c53f03fab5590b2bf531.png')}
        />
      </View>
      <View style={{right: 25}}>
        <Image
          style={{height: 62, width: 65, top: 75, left: '15%'}}
          source={require('../assets/icon/rockstar.png')}
        />
        <Text style={{color: '#FBCB0A', left: '35%', top: 20}}>
          Join to Rockstar SocialClub
        </Text>
        <Text
          style={{
            color: 'white',
            top: '25%',
            left: '35%',
            fontWeight: 'bold',
            fontSize: 30,
          }}>
          Join us
        </Text>
      </View>
      <View>
        <TextInput
          placeholder="Email"
          style={{
            borderWidth: 1,
            top: 55,
            borderColor: '#FBCB0A',
            borderRadius: 50,
          }}
          placeholderTextColor={'grey'}
        />

        <TextInput
          placeholder="Password"
          style={{
            borderWidth: 1,
            top: '100%',
            borderColor: '#FBCB0A',
            borderRadius: 50,
          }}
          secureTextEntry={!passwordVisible}
          placeholderTextColor={'grey'}
        />
        <TouchableOpacity
          style={{position: 'absolute', right: 10, top: 12}}
          onPress={() => setPasswordVisible(!passwordVisible)}>
          <Image
            style={{width: 35, height: 35, top: 150, right: 10}}
            source={
              passwordVisible
                ? require('../assets/icon/eye1.png')
                : require('../assets/icon/eye2.png')
            }
          />
          {/* <Icon
            name={passwordVisible ? 'eye-slash' : 'eye'}
            size={20}
            color="grey"
          /> */}
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleSignUp}>
        <View
          style={{
            backgroundColor: 'orange',
            height: 50,
            top: 140,
            borderRadius: 25,
          }}>
          <Text style={{left: '44%', top: 15}}>Log in</Text>
        </View>
      </TouchableOpacity>
      <View></View>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',

          top: 190,
        }}>
        <Text>Dont have an account </Text>
        <TouchableOpacity>
          <Text style={{color: '#113CFC'}}> Create account</Text>
        </TouchableOpacity>
      </View>
      <Button />
    </View>
  );
};

export default App;
