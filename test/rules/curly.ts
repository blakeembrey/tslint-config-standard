export function test (err) {
  if (err) throw err

  if (Math.random() > 0.5)
    return false
}
