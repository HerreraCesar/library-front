module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-paper/babel',
    'nativewind/babel',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components/index',
          '@constants': './src/constants/index',
          '@helpers': './src/helpers/index',
          '@interfaces': './src/interfaces/index',
          '@layouts': './src/layouts/index',
          '@screens': './src/screens/index',
          '@services': './src/services/index',
          '@store': './src/store/index',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
      },
    ],
  ],
};
