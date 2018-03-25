module.exports = {
  extends: [
    'tslint-eslint-rules',
    'tslint-no-circular-imports',
    'tslint-clean-code'
  ],
  rules: {
    // TSLint rules.
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
    'await-promise': true,
    'curly': [true, 'ignore-same-line'],
    'label-position': true,
    'no-arg': true,
    'no-conditional-assignment': true,
    'no-duplicate-imports': true,
    'no-duplicate-variable': true,
    'no-empty': true,
    'no-eval': true,
    'no-reference-import': true,
    'no-return-await': true,
    'no-switch-case-fall-through': true,
    'no-unused-expression': [true, 'allow-fast-null-checks', 'allow-tagged-template'],
    'no-unused-variable': [true, { 'ignore-pattern': '^_' }],
    'no-use-before-declare': true,
    'no-var-keyword': true,
    'radix': true,
    'return-undefined': true,
    'space-within-parens': [true, 0],
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
    'no-floating-promises': true,
    'no-misused-new': true,
    'no-string-throw': true,
    'no-unnecessary-qualifier': true,
    'no-unnecessary-type-assertion': true,
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
      'avoid-escape',
      'jsx-single'
    ],
    'semicolon': [
      true,
      'never'
    ],
    'strict-type-predicates': true,
    'space-before-function-paren': [false],
    'unified-signatures': false,
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
      // 'check-module',
      'check-rest-spread',
      'check-type',
      'check-typecast',
      'check-type-operator',
      'check-preblock'
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
    'ter-no-irregular-whitespace': true,
    'no-regex-spaces': true,
    'ter-no-sparse-arrays': true,
    'ter-func-call-spacing': [true, 'never'],
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
    ],
    'object-curly-spacing': [true, 'always'],
    // tslint-clean-code rules
    'no-commented-out-code': true
  }
}
