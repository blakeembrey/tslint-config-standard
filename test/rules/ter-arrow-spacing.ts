export function exec (cb: () => void) {
  return cb()
}

exec(()  => null)
