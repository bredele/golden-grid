/**
 * Golden ration
 * @type {Number}
 */

const ratio = 1.618033988749895

/**
 * Arc angles.
 * @type {Number}
 */

const angle1 = 3 / 2 * Math.PI
const angle2 = 1 / 2 * Math.PI

/**
 * Draw golden ratio on top of an element.
 *
 * @param {HTMLElement} element
 * @public
 */

module.exports = element => {
  const {width} = element.getBoundingClientRect()
  const canvas = document.createElement('canvas')
  canvas.setAttribute('style', 'position:absolute; top: 0; relative: 0; z-index: 99999;width:100%;')
  canvas.width = width
  const height = canvas.height = width / ratio
  const context = canvas.getContext('2d')

  // 1st
  const x = width / ratio
  rectangle(context, x, 0, x, height)
  arc(context, x, height, x, Math.PI, angle1)

  // 2nd
  const y = height / ratio
  rectangle(context, x, y, width, y)
  arc(context, x, y, y, angle1, 0)

  // 3rd
  const x2 = width - (width - x) / ratio
  rectangle(context, x2, y, x2, height)
  arc(context, x2, y, height - y, 0, angle2)

  // 4th
  const y2 = height - (height - y) / ratio
  rectangle(context, x, y2, x2, y2)
  arc(context, x2, y2, height - y2, angle2, Math.PI)

  // 5th
  const x3 = x + (x2 - x) / ratio
  rectangle(context, x3, y, x3, y2)
  arc(context, x3, y2, x3 - x, Math.PI, angle1)

  // 6th
  const y3 = y + (y2 - y) / ratio
  rectangle(context, x3, y3, x2, y3)
  arc(context, x3, y3, x2 - x3, angle1, 0)

  // 7th
  const x4 = x2 - (x2 - x3) / ratio
  rectangle(context, x4, y3, x4, y2)
  arc(context, x4, y3, x2 - x4, 0, angle2)

  // 8th
  const y4 = y2 - (y2 - y3) / ratio
  rectangle(context, x3, y4, x4, y4)
  arc(context, x4, y4, x4 - x3, angle2, Math.PI)

  // 9th
  const x5 = x3 + (x4 - x3) / ratio
  rectangle(context, x5, y3, x5, y4)
  arc(context, x5, y4, x5 - x3, Math.PI, angle1)


  // 10th rectangle
  const y5 = y3 + (y4 - y3) / ratio
  rectangle(context, x4, y5, x5, y5)
  arc(context, x5, y5, x4 - x5, angle1, 0)


  // 11th rectangle
  const x6 = x4 - (x4 - x5) / ratio
  rectangle(context, x6, y4, x6, y5)
  arc(context, x6, y5, x4 - x6, 0, angle2)

  // 12th rectangle
  const y6 = y4 - (y4 - y5) / ratio
  rectangle(context, x5, y6, x6, y6)
  arc(context, x6, y6, x6 - x5, angle2, Math.PI)


  element.appendChild(canvas)
}

function rectangle (context, moveX, moveY, lineX, lineY) {
  context.beginPath()
  context.moveTo(moveX, moveY)
  context.lineTo(lineX, lineY)
  context.stroke()
}

function arc (context, x, y, radius, starting, ending) {
  context.beginPath()
  context.moveTo(x, y)
  context.arc(x, y, radius, starting, ending)
  context.stroke()
}
