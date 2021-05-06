function getRandomData() {
  return Math.random()
}

Plotly.newPlot('plotlyrandom', [
  {
    y: [getRandomData()],
    type: 'line',
  },
])

let counter

setInterval(function () {
  Plotly.extendTraces(
    'plotlyrandom',
    {
      y: [[getRandomData()]],
    },
    [0]
  )

  counter++

  if (counter > 20) {
    Plotly.relayout('plotlyrandom', {
      xaxis: {
        range: [counter - 500, counter],
      },
    })
  }
}, 1000)
