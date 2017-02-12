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
    'no-unused-expression': [true, 'allow-fast-null-checks'],
    'no-use-before-declare': true,
    'no-var-keyword': true,
    'radix': true,
    'triple-equals': [
      true,
      'allow-null-check'
    ],
    'use-isnan': true,
    'eofline': true,
    'ter-indent': [
      true,
      2,
      {
        SwitchCase: 1
      }
    ],
    'no-trailing-whitespace': true,
    'trailing-comma': [
      true,
      {
        'multiline': 'never',
        'singleline': 'never'
      }
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
    'space-before-function-paren': [true, 'always'],
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
    'ter-arrow-spacing': [
      true,
      {
        'before': true,
        'after': true
      }
    ],
    'no-multi-spaces': true,
    'handle-callback-err': [
      true,
      '^(err|error)$'
    ],
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
  }
}
