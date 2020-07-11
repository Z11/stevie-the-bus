const isIPad13 = getIPad13()

function getIPad13() {
  return isIOS13Check("iPad")
}

function isIOS13Check(type) {
  var nav = getNavigatorInstance()
  return (
    nav &&
    nav.platform &&
    (nav.platform.indexOf(type) !== -1 ||
      (nav.platform === "MacIntel" &&
        nav.maxTouchPoints > 1 &&
        !window.MSStream))
  )
}

function getNavigatorInstance() {
  if (typeof window !== "undefined") {
    if (window.navigator || navigator) {
      return window.navigator || navigator
    }
  }
  return false
}

export default isIPad13
