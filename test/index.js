var fs = require('fs')
var exec = require('child_process').exec
var path = require('path')
var test = require('blue-tape')

var OUT_FILENAME = path.join(__dirname, 'rules.out')
var TSLINT_BIN = require.resolve('tslint/bin/tslint')
var CONFIG_FILE = path.join(__dirname, '../tslint.js')
var TSLINT_CMD = 'node ' + TSLINT_BIN + ' --config ' + CONFIG_FILE + ' --project tsconfig.json --type-check "rules/**/*.ts"'

test('tslint standard', function (t) {
  exec(TSLINT_CMD, { cwd: __dirname }, function (err, stdout, stderr) {
    t.ok(err)

    if (process.env.GENERATE_ASSETS) {
      return fs.writeFile(OUT_FILENAME, stdout, function (err) {
        t.notOk(err)
        t.end()
      })
    }

    fs.readFile(OUT_FILENAME, 'utf8', function (err, result) {
      t.notOk(err)

      t.equal(stdout, result)
      t.equal(stderr, '')

      t.end()
    })
  })
})
