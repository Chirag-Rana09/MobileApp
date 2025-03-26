import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  SafeAreaView,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import authActions from '../../redux/reducers/auth/actions';

const GoogleIcon = require('../../assets/images/google.png');
const AppleIcon = require('../../assets/images/apple.png');
const FacebookIcon = require('../../assets/images/fb.png');

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('chirag@mail.com');
  const [password, setPassword] = useState('123456');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const {setUserData} = authActions;
  const userData = useSelector(state => state.app);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    let formErrors = {};

    if (!email) {
      formErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      formErrors.email = 'Please enter a valid email address';
    }

    if (!password) {
      formErrors.password = 'Password is required';
    } else if (password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSignIn = () => {
    if (validateForm()) {
      try {
        console.log('Sign In pressed');
        console.log('Email:', email);

        // Call the function
        login();
        // dispatch(setUserData())
      } catch (error) {
        Alert.alert('Error', 'Unable to sign in. Please try again.');
      }
    }
  };

  const login = async () => {
    const url = 'http://3.7.81.243/projects/plie-api/public/api/login';
    const data = {
      email: 'testpracticaluser001@mailinator.com', // Replace with actual email
      password: 'Test@123', // Replace with actual password
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log('Response:', result);
      Alert.alert(result?.message);
      dispatch(setUserData(result?.data));
      navigation.navigate('Search');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSignUp = () => {
    console.log('Navigate to Sign Up');
  };

  const handleSocialLogin = platform => {
    console.log(`Signing in with ${platform}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.content}>
        <View style={styles.placeholderImage}>
          <Text style={styles.logo}>Plié</Text>
          <Image
            source={{uri: 'https://picsum.photos/id/237/200/300'}}
            style={styles.imageIcon}
            alt="image"
          />
        </View>
        <View style={styles.placeholderImage1}>
          {/* Email Input */}
          <View>
            <Text style={styles.Texts}>Email</Text>
            <TextInput
              style={[styles.input, errors.email && styles.inputError]}
              placeholder="Email"
              value={email}
              onChangeText={text => {
                setEmail(text);
                // Clear email error when user starts typing
                if (errors.email) {
                  setErrors(prev => ({...prev, email: undefined}));
                }
              }}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
          </View>

          {/* Password Input */}
          <View>
            <Text style={styles.Texts}>Password</Text>
            <View
              style={[
                styles.passwordContainer,
                errors.password && styles.inputError,
              ]}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Password"
                value={password}
                onChangeText={text => {
                  setPassword(text);
                  // Clear password error when user starts typing
                  if (errors.password) {
                    setErrors(prev => ({...prev, password: undefined}));
                  }
                }}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                style={styles.showPasswordButton}
                onPress={() => setShowPassword(!showPassword)}>
                <Text style={styles.showPasswordText}>
                  {showPassword ? 'Hide' : 'Show'}
                </Text>
              </TouchableOpacity>
            </View>
            {errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
          </View>
          <View style={styles.details}>
            {/* Forgot Password */}
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
            {/* Sign In Button */}
            <TouchableOpacity
              style={styles.signInButton}
              onPress={handleSignIn}>
              <Text style={styles.signInButtonText}>Sign In</Text>
            </TouchableOpacity>
            {/* Sign Up Link */}
            <View style={styles.signUpContainer}>
              <Text style={styles.signUpText}>Not a member? </Text>
              <TouchableOpacity onPress={handleSignUp}>
                <Text style={styles.signUpLinkText}>Sign Up Here</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or Sign In with</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Social Login Buttons */}
          <View style={styles.socialLoginContainer}>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => handleSocialLogin('Google')}>
              <Image source={GoogleIcon} style={styles.socialIcon} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => handleSocialLogin('Apple')}>
              <Image source={AppleIcon} style={styles.socialIcon} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => handleSocialLogin('Facebook')}>
              <Image source={FacebookIcon} style={styles.socialIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  Texts: {
    padding: 10,
    color: 'black',
    fontSize: 18,
  },
  details: {
    alignItems: 'flex-end',
    padding: 10,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    paddingVertical: 20,
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  placeholderImage: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  placeholderImage1: {
    flex: 0.7,
  },
  imageIcon: {
    width: 100,
    height: 100,
    tintColor: '#CCCCCC',
  },
  input: {
    height: 50,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 5,
  },
  inputError: {
    borderColor: '#FF0000',
  },
  errorText: {
    color: '#FF0000',
    fontSize: 12,
    marginBottom: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 5,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
  },
  showPasswordButton: {
    padding: 10,
  },
  showPasswordText: {
    color: '#007AFF',
  },
  forgotPasswordText: {
    textAlign: 'right',
    color: '#007AFF',
    marginBottom: 15,
  },
  signInButton: {
    backgroundColor: '#10D076',
    width: 100,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },
  signUpText: {
    color: '#666666',
  },
  signUpLinkText: {
    color: '#10D076',
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#666666',
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  socialButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
});

export default HomeScreen;
