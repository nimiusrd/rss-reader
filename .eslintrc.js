module.exports = {
  'env': {
    'browser': true,
    'node'   : true,
    'es6'    : true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/all'
  ],
  'parser'       : 'typescript-eslint-parser',
  'parserOptions': {
    'sourceType'  : 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'plugins': ['react'],
  'rules'  : {
    'accessor-pairs'       : 'error',
    'array-bracket-spacing': ['error', 'never'],
    'array-callback-return': 'error',
    'arrow-body-style'     : ['error', 'as-needed'],
    'arrow-parens'         : ['error', 'as-needed'],
    'arrow-spacing'        : 'error',
    'block-scoped-var'     : 'error',
    'block-spacing'        : 'error',
    'brace-style'          : ['error', '1tbs', {
      'allowSingleLine': true
    }],
    'callback-return'          : 'error',
    'camelcase'                : 'error',
    'class-methods-use-this'   : 'error',
    'comma-dangle'             : 'error',
    'comma-spacing'            : 'error',
    'comma-style'              : ['error', 'last'],
    'complexity'               : ['warn', 2],
    'computed-property-spacing': ['error', 'never'],
    'consistent-return'        : 'error',
    'consistent-this'          : ['error', 'that'],
    'curly'                    : 'error',
    'default-case'             : ['error', {
      'commentPattern': '^no default$'
    }],
    'dot-location'                           : ['error', 'property'],
    'dot-notation'                           : 'error',
    'eol-last'                               : 'error',
    'eqeqeq'                                 : 'error',
    'func-call-spacing'                    : 'error',
    'func-name-matching'                   : 'error',
    'func-names'                           : 'error',
    'func-style'                           : ['error', 'expression'],
    'generator-star-spacing'               : ['error', 'after'],
    'global-require'                       : 'error',
    'guard-for-in'                         : 'error',
    'handle-callback-err'                  : 'error',
    'id-blacklist'                         : ['error', 'data', 'callback', 'name'],
    'id-length'                            : 'error',
    'id-match'                             : ['error', '^[A-Za-z]+$'],
    'indent': ['error', 2, {
      'SwitchCase'        : 1,
      'VariableDeclarator': {
        'var'  : 2,
        'let'  : 2,
        'const': 3
      }
    }],
    'init-declarations': ['error', 'never', {
      'ignoreForLoopInit': true
    }],
    'jsx-quotes' : ['error', 'prefer-double'],
    'key-spacing': ['error', {
      'align': 'colon'
    }],
    'keyword-spacing'       : 'error',
    'linebreak-style'       : 'error',
    'line-comment-position' : 'error',
    'lines-around-comment'  : 'error',
    'lines-around-directive': 'error',
    'max-depth'             : ['warn', 4],
    'max-len'               : ['warn', 80],
    'max-lines'             : ['warn', {
      'max'         : 300,
      'skipComments': true
    }],
    'max-nested-callbacks'   : ['error', 5],
    'max-params'             : ['error', 5],
    'max-statements'         : ['error', 10],
    'max-statements-per-line': ['warn', {
      'max': 1
    }],
    'multiline-ternary'       : ['error', 'never'],
    'new-cap'                 : 'error',
    'new-parens'              : 'error',
    'newline-after-var'       : ['error', 'always'],
    'newline-before-return'   : 'error',
    'newline-per-chained-call': ['error', {
      'ignoreChainWithDepth': 2
    }],
    'no-alert'            : 'error',
    'no-array-constructor': 'error',
    'no-bitwise'          : 'warn',
    'no-caller'           : 'error',
    'no-catch-shadow'     : 'error',
    'no-confusing-arrow'  : 'error',
    'no-console'          : ['warn', {
      'allow': ['warn', 'error']
    }],
    'no-continue'         : 'error',
    'no-div-regex'        : 'error',
    'no-duplicate-imports': 'error',
    'no-else-return'      : 'error',
    'no-empty-function'   : 'error',
    'no-eq-null'          : 'error',
    'no-eval'             : 'error',
    'no-extend-native'    : 'error',
    'no-extra-bind'       : 'error',
    'no-extra-label'      : 'error',
    'no-extra-parens'     : ['error', 'all', {
      'returnAssign': false
    }],
    'no-floating-decimal'    : 'error',
    'no-global-assign'       : 'error',
    'no-implicit-coercion'   : 'error',
    'no-implicit-globals'    : 'error',
    'no-implied-eval'        : 'error',
    'no-inline-comments'     : 'error',
    'no-invalid-this'        : 'error',
    'no-irregular-whitespace': ['error', {
      'skipRegExps': true
    }],
    'no-iterator'            : 'error',
    'no-label-var'           : 'error',
    'no-labels'              : 'error',
    'no-lone-blocks'         : 'error',
    'no-lonely-if'           : 'warn',
    'no-loop-func'           : 'error',
    'no-magic-numbers'       : 'error',
    'no-mixed-operators'     : 'error',
    'no-mixed-requires'      : 'error',
    'no-multi-spaces'        : 'error',
    'no-multi-str'           : 'error',
    'no-multiple-empty-lines': ['error', {
      'max': 1
    }],
    'no-negated-condition': 'warn',
    'no-nested-ternary'   : 'warn',
    'no-new-func'         : 'error',
    'no-new-object'       : 'error',
    'no-new-require'      : 'error',
    'no-new-wrappers'     : 'error',
    'no-new'              : 'error',
    'no-octal-escape'     : 'error',
    'no-param-reassign'   : 'error',
    'no-path-concat'      : 'error',
    'no-plusplus'         : ['error', {
      'allowForLoopAfterthoughts': true
    }],
    'no-process-env'             : 'error',
    'no-process-exit'            : 'error',
    'no-proto'                   : 'error',
    'no-prototype-builtins'      : 'error',
    'no-restricted-globals'      : ['error', 'event'],
    'no-restricted-properties'   : 'error',
    'no-return-assign'           : 'error',
    'no-return-await'            : 'error',
    'no-script-url'              : 'error',
    'no-self-compare'            : 'error',
    'no-sequences'               : 'error',
    'no-shadow-restricted-names' : 'error',
    'no-shadow'                  : 'error',
    'no-spaced-func'             : 'error',
    'no-sync'                    : 'warn',
    'no-tabs'                    : 'error',
    'no-template-curly-in-string': 'error',
    'no-throw-literal'           : 'error',
    'no-trailing-spaces'         : ['error', {
      'skipBlankLines': false
    }],
    'no-undef': 0,
    'no-undef-init'               : 'error',
    'no-undefined'                : 'error',
    'no-underscore-dangle'        : 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary'         : 'error',
    'no-unsafe-finally'           : 'error',
    'no-unsafe-negation'          : 'error',
    'no-unused-expressions'       : 'error',
    'no-unused-vars'              : ['error', {
      'vars'        : 'all', 'args'        : 'all', 'caughtErrors': 'all'
    }],
    'no-use-before-define': ['error', {
      'functions': true, 'classes'  : true
    }],
    'no-useless-call'              : 'error',
    'no-useless-computed-key'      : 'error',
    'no-useless-concat'            : 'error',
    'no-useless-constructor'       : 'error',
    'no-useless-escape'            : 'error',
    'no-useless-rename'            : 'error',
    'no-useless-return'            : 'error',
    'no-var'                       : 'error',
    'no-void'                      : 'error',
    'no-warning-comments'          : 'error',
    'no-whitespace-before-property': 'error',
    'no-with'                      : 'error',
    'object-curly-newline'         : ['error', {
      'ObjectExpression': {
        'minProperties': 1
      }, 'ObjectPattern': 'never'
    }],
    'object-curly-spacing'   : ['error', 'never'],
    'object-property-newline': 'error',
    'object-shorthand'       : ['error', 'always'],
    'one-var'                : ['error', {
      'uninitialized': 'always', 'initialized'  : 'never'
    }],
    'operator-assignment'  : ['error', 'always'],
    'operator-linebreak'   : ['error', 'after'],
    'padded-blocks'        : ["error", { "blocks": "never" }],
    'prefer-arrow-callback': ['error', {
      'allowNamedFunctions': true
    }],
    'prefer-const': ['error', {
      'ignoreReadBeforeAssign': true
    }],
    'prefer-rest-params': 'error',
    'prefer-spread'     : 'error',
    'prefer-template'   : 'error',
    'quote-props'       : ['error', 'consistent'],
    'quotes'            : ['error', 'single', {
      'allowTemplateLiterals': true
    }],
    'radix'                       : 'error',
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", "tsx"] }],
    'react/jsx-indent'            : [0, 2],
    'react/jsx-indent-props'      : [2, 2],
    'react/jsx-max-props-per-line': [2, {
      maximum: 1
    }],
    'react/jsx-no-literals': 2,
    'react/jsx-wrap-multilines': 0,
    'react/no-set-state': 0,
    'react/no-unescaped-entities': 0,
    'require-await'        : 'error',
    'rest-spread-spacing'  : ['error', 'always'],
    'semi-spacing'         : 'error',
    'semi'                 : ['error', 'never'],
    'sort-imports'         : ['warn', {
      'ignoreCase'           : false,
      'ignoreMemberSort'     : false,
      'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single']
    }],
    'sort-keys': ['warn', 'asc', {
      'caseSensitive': true,
      'natural'      : true
    }],
    'sort-vars': ['error', {
      'ignoreCase': true
    }],
    'space-before-blocks'        : 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens'            : ['error', 'never'],
    'space-infix-ops'            : 'error',
    'space-unary-ops'            : 'error',
    'spaced-comment'             : 'error',
    'strict'                     : 0,
    'symbol-description'         : 'error',
    'template-curly-spacing'     : ['error', 'never'],
    'unicode-bom'                : ['warn', 'never'],
    'vars-on-top'                : 'error',
    'wrap-iife'                  : ['error', 'inside'],
    'wrap-regex'                 : 'error',
    'yield-star-spacing'         : ['error', 'after'],
    'yoda'                       : 'error'
  }
};
