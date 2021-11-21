const detectLeftButtonBtn = (e) => {
  e = e || window.event

  if ('buttons' in e) {
    return e.buttons == 1
  }

  const button = e.which || e.button
  return button == 1
}

export default detectLeftButtonBtn
