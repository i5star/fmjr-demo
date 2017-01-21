module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    'indent': ['error', 4],
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-constant-condition': process.env.NODE_ENV === 'production' ? 2 : 0,
    'linebreak-style': 0,
    'global-require': 0,
    'import/extensions': 0,
    'no-param-reassign': 0,
    'indent': 0,
    'no-tabs': 0,
    'no-param-reassign': 0,
    'eol-last': 0
  }
}
