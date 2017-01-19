function exec (cb: () => void) {
  return cb()
}

exec( ()  => undefined)
