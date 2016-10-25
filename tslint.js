var path = require('path')

module.exports = {
  rulesDirectory: path.join(path.dirname(require.resolve('tslint-eslint-rules')), 'dist/rules'),
  rules: {
    // TSLint rules.
    'member-access': false,
    'member-ordering': [
      true,
      {
        order: [
          'public-static-field',
          'protected-static-field',
          'private-static-field',
          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',
          'constructor',
          'public-static-method',
          'protected-static-method',
          'private-static-method',
          'public-instance-method',
          'protected-instance-method',
          'private-instance-method'
        ]
      }
    ],
    'no-internal-module': true,
    'typedef-whitespace': [
      true,
      {
        'call-signature': 'nospace',
        'index-signature': 'nospace',
        'parameter': 'nospace',
        'property-declaration': 'nospace',
        'variable-declaration': 'nospace'
      },
      {
        'call-signature': 'onespace',
        'index-signature': 'onespace',
        'parameter': 'onespace',
        'property-declaration': 'onespace',
        'variable-declaration': 'onespace'
      }
    ],
    'curly': true,
    'label-position': true,
    'no-arg': true,
    'no-conditional-assignment': true,
    'no-duplicate-variable': true,
    'no-empty': true,
    'no-eval': true,
    'no-switch-case-fall-through': true,
    'no-unreachable': true,
    'no-unused-expression': true,
    'no-unused-variable': true,
    'no-var-keyword': true,
    'radix': true,
    'triple-equals': [
      true,
      'allow-null-check'
    ],
    'use-isnan': true,
    'eofline': true,
    'indent': [
      true,
      'spaces'
    ],
    'max-line-length': [
      true,
      120
    ],
    'no-trailing-whitespace': true,
    'trailing-comma': [
      true,
      {
        'multiline': 'never',
        'singleline': 'never'
      }
    ],
    'align': [
      true,
      'arguments',
      'parameters'
    ],
    'class-name': true,
    'comment-format': [
      true,
      'check-space'
    ],
    'jsdoc-format': true,
    'new-parens': true,
    'no-angle-bracket-type-assertion': true,
    'no-consecutive-blank-lines': true,
    'one-line': [
      true,
      'check-catch',
      'check-finally',
      'check-else',
      'check-open-brace',
      'check-whitespace'
    ],
    'one-variable-per-declaration': true,
    'quotemark': [
      true,
      'single',
      'avoid-escape'
    ],
    'semicolon': [
      true,
      'never'
    ],
    'variable-name': [
      true,
      'ban-keywords',
      'check-format',
      'allow-leading-underscore',
      'allow-pascal-case'
    ],
    'whitespace': [
      true,
      'check-branch',
      'check-decl',
      'check-operator',
      'check-module',
      'check-seperator',
      'check-type',
      'check-typecast'
    ],
    // TSLint ESLint rules.
    'no-constant-condition': [
      true,
      {
        checkLoops: false
      }
    ],
    'no-control-regex': true,
    'no-duplicate-case': true,
    'no-empty-character-class': true,
    'no-ex-assign': true,
    'no-extra-boolean-cast': true,
    'no-inner-declarations': [
      true,
      'functions'
    ],
    'no-invalid-regexp': true,
    'no-irregular-whitespace': true,
    'no-regex-spaces': true,
    'no-sparse-arrays': true,
    'no-unexpected-multiline': true,
    'valid-typeof': true,
    // 'accessor-pairs': [
    //   true,
    //   {
    //     'getWithoutSet': false,
    //     'setWithoutGet': true
    //   }
    // ],
    // 'array-callback-return': true,
    // 'dot-location': [
    //   true,
    //   'property'
    // ],
    // 'no-else-return': true,
    // 'no-empty-function': true,
    // 'no-empty-pattern': true,
    // 'no-extend-native': true,
    // 'no-extra-bind': true,
    // 'no-floating-decimal': true,
    // 'no-implied-eval': true,
    // 'no-iterator': true,
    // 'no-labels': true,
    // 'no-lone-blocks': true,
    'no-multi-spaces': true,
    // 'no-multi-str': true,
    // 'no-new': true,
    // 'no-new-func': true,
    // 'no-new-wrappers': true,
    // 'no-octal-escape': true,
    // 'no-proto': true,
    // 'no-return-assign': [
    //   true,
    //   'except-parens'
    // ],
    // 'no-self-assign': true,
    // 'no-self-compare': true,
    // 'no-sequences': true,
    // 'no-throw-literal': true,
    // 'no-unmodified-loop-condition': true,
    // 'no-useless-call': true,
    // 'no-useless-concat': true,
    // 'no-useless-escape': true,
    // 'wrap-iife': [
    //   true,
    //   'any'
    // ],
    // 'yoda': [
    //   true,
    //   'never'
    // ],
    // 'no-label-var': true,
    // 'no-shadow-restricted-names': true,
    // 'no-undef-init': true,
    'handle-callback-err': [
      true,
      '^(err|error)$'
    ],
    // 'no-new-require': true,
    // 'no-path-concat': true,
    'block-spacing': [
      true,
      'always'
    ],
    'brace-style': [
      true,
      '1tbs',
      {
        'allowSingleLine': true
      }
    ]
    // 'comma-spacing': [
    //   true,
    //   {
    //     'before': false,
    //     'after': true
    //   }
    // ],
    // 'comma-style': [
    //   true,
    //   'last'
    // ],
    // 'jsx-quotes': [
    //   true,
    //   'prefer-single'
    // ],
    // 'key-spacing': [
    //   true,
    //   {
    //     'beforeColon': false,
    //     'afterColon': true
    //   }
    // ],
    // 'keyword-spacing': [
    //   true,
    //   {
    //     'before': true,
    //     'after': true
    //   }
    // ],
    // 'no-array-constructor': true,
    // 'no-multiple-empty-lines': [
    //   true,
    //   {
    //     'max': 1
    //   }
    // ],
    // 'no-new-object': true,
    // 'no-spaced-func': true,
    // 'no-unneeded-ternary': [
    //   true,
    //   {
    //     'defaultAssignment': false
    //   }
    // ],
    // 'no-whitespace-before-property': true,
    // 'no-with': true,
    // 'one-var': [
    //   true,
    //   'never'
    // ],
    // 'operator-linebreak': [
    //   true,
    //   'after',
    //   {
    //     'overrides': { '?': 'before', ':': 'before' }
    //   }
    // ],
    // 'padded-blocks': [
    //   true,
    //   'never'
    // ],
    // 'semi': [
    //   true,
    //   'never'
    // ],
    // 'semi-spacing': [
    //   true,
    //   {
    //     'before': false,
    //     'after': true
    //   }
    // ],
    // 'space-before-blocks': [
    //   true,
    //   'always'
    // ],
    // 'space-before-function-paren': [
    //   true,
    //   'always'
    // ],
    // 'space-in-parens': [
    //   true,
    //   'never'
    // ],
    // 'space-infix-ops': true,
    // 'space-unary-ops': [
    //   true,
    //   {
    //     'words': true,
    //     'nonwords': false
    //   }
    // ],
    // 'spaced-comment': [
    //   true,
    //   'always'
    // ],
    // 'arrow-spacing': [
    //   true,
    //   {
    //     'before': true,
    //     'after': true
    //   }
    // ],
    // 'constructor-super': true,
    // 'generator-star-spacing': [
    //   true,
    //   {
    //     'before': true,
    //     'after': true
    //   }
    // ],
    // 'no-class-assign': true,
    // 'no-const-assign': true,
    // 'no-duplicate-imports': true,
    // 'no-new-symbol': true,
    // 'no-this-before-super': true,
    // 'no-useless-constructor': true,
    // 'object-shorthand': [
    //   true,
    //   'always'
    // ],
    // 'prefer-const': true,
    // 'prefer-rest-params': true,
    // 'prefer-spread': true,
    // 'prefer-template': true,
    // 'template-curly-spacing': [
    //   true,
    //   'never'
    // ],
    // 'yield-star-spacing': true
  }
}
