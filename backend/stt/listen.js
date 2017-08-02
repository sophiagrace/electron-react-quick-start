// // FILE THAT CONTAINS THE STREAMING MIC RECOGNIZE FUNCTION
// // WHEN CALLED, GOOGLE SPEECH STARTS INTERPRETING MIC AUDIO AND ENDS
// // WHEN THERE IS A SILENCE; RETURNS THE TRASNCRIPTION OF AUDIO OR 0
//
// function streamingMicRecognize (encoding, sampleRateHertz, languageCode) {
//   // [START speech_streaming_mic_recognize]
//   const record = require('node-record-lpcm16');
//
//   // Imports the Google Cloud client library
//   const Speech = require('@google-cloud/speech');
//
//   // Instantiates a client
//   const speech = Speech();
//
//   // The encoding of the audio file, e.g. 'LINEAR16'
//   const encoding = 'LINEAR16';
//
//   // The sample rate of the audio file in hertz, e.g. 16000
//   const sampleRateHertz = 16000;
//
//   // The BCP-47 language code to use, e.g. 'en-US'
//   const languageCode = 'en-US';
//
//   const request = {
//     config: {
//       encoding: encoding,
//       sampleRateHertz: sampleRateHertz,
//       languageCode: languageCode
//     },
//     interimResults: false // If you want interim results, set this to true
//   };
//
//   // Create a recognize stream
//   const recognizeStream = speech.streamingRecognize(request)
//     .on('error', console.error)
//     .on('data', (data) => {
//         //STOP AT A SILENCE
//         console.log('DATA:', data.results);
//         if (data.results[0].isFinal) {
//           record.stop();
//         }
//
//         // return of 0 represents that reached transcription time limit
//         // if reach this point, need to press 'Ctrl+C'
//         const returnScript = data.results[0] && data.results[0].alternatives[0])
//           ? data.results[0].alternatives[0].transcript
//           : 0;
//
//         console.log(returnScript);
//
//         return returnScript
//     });
//
//   // Start recording and send the microphone input to the Speech API
//   record
//     .start({
//       sampleRateHertz: sampleRateHertz,
//       threshold: 0,
//       thresholdEnd: 0.01,
//       verbose: false,
//       recordProgram: 'rec', // Try also "arecord" or "sox"
//       silence: '0.5'
//     })
//     .on('error', console.error)
//     .pipe(recognizeStream);
//
//   console.log('Listening, press Ctrl+C to stop.');
//   // [END speech_streaming_mic_recognize]
// }
//
// module.exports = { streamingMicRecognize };
