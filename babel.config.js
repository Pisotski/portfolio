module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    'jsx-control-statements',
  ],
};
// 'transform-object-rest-spread',
//     [
//       'transform-runtime',
//       {
//         helpers: false,
//         polyfill: false,
//         regenerator: true,
//         moduleName: 'babel-runtime',
//       },
//     ],

// .babelrc
// {
//   "presets": ["@babel/preset-env", "@babel/preset-react"],
//   "plugins": [
//     "jsx-control-statements",
//     "transform-object-rest-spread",
//     [
//       "transform-runtime",
//       {
//           "helpers": false,
//           "polyfill": false,
//           "regenerator": true,
//           "moduleName": "babel-runtime"
//       }
//     ]
//   ]
// }
