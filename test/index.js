var fs = require('fs')
var exec = require('child_process').exec
var path = require('path')
var test = require('blue-tape')

var EXT_REGEX = /\.tsx?$/
var TSLINT_BIN = require.resolve('tslint/bin/tslint')
var CONFIG_FILE = path.join(__dirname, '../tslint.js')

test('tslint standard', function (t) {
  var testCases = fs.readdirSync(path.join(__dirname, 'cases'))
    .filter(function (filename) {
      return EXT_REGEX.test(filename)
    })
    .map(function (filename) {
      return path.join(__dirname, 'cases', filename)
    })

  testCases.forEach(function (testCase) {
    t.test(path.basename(testCase).replace(EXT_REGEX, ''), function (t) {
      var filename = path.relative(__dirname, testCase)

      exec('node ' + TSLINT_BIN + ' --config ' + CONFIG_FILE + ' ' + filename, { cwd: __dirname }, function (err, stdout, stderr) {
        t.ok(err)

        fs.readFile(testCase.replace(EXT_REGEX, '.out'), 'utf8', function (err, result) {
          t.notOk(err)

          t.equal(stdout, result)

          t.end()
        })
      })
    })
  })

  t.end()
})
