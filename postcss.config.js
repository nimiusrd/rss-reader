const postcssCustomProperties = require('postcss-custom-properties');
const postcssCustomMedia = require('postcss-custom-media');
const postcssMediaMinmax = require('postcss-media-minmax');
const postcssNesting = require('postcss-nesting');
const cssnano = require('cssnano');
const cssnanoOption = () => {

  if (process.env.NODE_ENV === 'development') {

    return false;

  }

  const option = {
    'autoprefixer': {
      add     : true,
      browsers: [

        /* ref: http://browserl.ist/?q=last+2+versions */
        'last 2 versions',
        '> 1%'
      ]
    },
    'normalizeCharset': {
      add: true
    }
  };

  return option;

};

module.exports = {
  map    : false,
  plugins: [
    postcssCustomProperties(),
    postcssCustomMedia({
      'extensions': {
        '--desktop': 'screen and (width > 768px)',
        '--tablet' : 'screen and (width <= 768px)',
        '--mobileL': 'screen and (width <= 425px)',
        '--mobileM': 'screen and (width <= 375px)',
        '--mobileS': 'screen and (width <= 320px)'
      }
    }),
    postcssMediaMinmax(),
    postcssNesting(),
    cssnano(cssnanoOption())
  ]
};
