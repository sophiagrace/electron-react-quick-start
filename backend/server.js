const express = require('express')
const app = express()

// Example route
app.get('/', function (req, res) {
  res.send('Hello World!')
})

// YO AMANDA IS TRYING TO RUN LISTEN
const { streamingMicRecognize } = require('./stt/listen');
streamingMicRecognize();

app.listen(3000, function () {
  console.log('Backend server for Electron App running on port 3000!')
})
