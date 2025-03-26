const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');
/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = (() => {
  const baseConfig = getDefaultConfig(__dirname);
  const {transformer, resolver} = baseConfig;

  return {
    ...baseConfig,
    transformer: {
      ...transformer,
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      ...resolver,
      assetExts: resolver.assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...resolver.sourceExts, 'svg'],
    },
  };
})();

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
module.exports = wrapWithReanimatedMetroConfig(config);
