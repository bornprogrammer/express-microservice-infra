const config = {
  verbose: true,
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};

export default config;

// // Or async function
// module.exports = async () => ({
//   verbose: true,
// });