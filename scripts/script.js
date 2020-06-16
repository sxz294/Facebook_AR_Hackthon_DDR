/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */



//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//
// For projects created with v87 onwards, JavaScript is always executed in strict mode.
//==============================================================================

// How to load in modules
const Scene = require('Scene');
// import SceneModule from 'Scene';
// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

const Console = require('console');
// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;

// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'

// To access scene objects
// const directionalLight = Scene.root.find('directionalLight0');

// To access class properties
// const directionalLightIntensity = directionalLight.intensity;

// To log messages to the console
// Diagnostics.log('Console message logged from the script.');
const Reactive = require('Reactive');

// Load in the patches module
const Patches = require('Patches');

// const obj=Scene.root.find('rectangle0').
// Patches.setBooleanValue("hitLeft",Reactive.and())

const Animation = require('Animation');
//var obj = Scene.root.find("rectangle0");

// //set up the length of the animations, 1000 = 1 second
// var driver = Animation.timeDriver();

// //define the starting and ending values (start at 0, go to 100)
// var sampler = Animation.samplers.linear(0, 100);

//set the signal of hitLeft if the object falls into hit range
// Patches.setBooleanValue("hitLeft",Reactive.and(Reactive.ge(obj.transform.y,-50),Reactive.le(obj.transform.y,50)))

// Diagnostics.watch("hitLeft", Reactive.and(Reactive.ge(obj.transform.y,-50),Reactive.le(obj.transform.y,50)));

// Get the runtime from the Patch Editor
// const time = Patches.getScalarValue("TimeValue");
// Diagnostics.log(time.toString);

// const beatArr=[ 3, 5, 7]

 
// // function beat(t){
// //   var i;
// //   for (i = 0; i < beatArr.length; i++) { 
// //     if (t.eq(beatArr[i])){
// //       // Patches.setBooleanValue("hit",true)
// //       Patches.setPulseValue("pulse",Reactive.once())
// //     }else{
// //       // Patches.setBooleanValue("hit",false)
// //     }
// //   }
// // }


// var i;
//   for (i = 0; i < beatArr.length; i++) { 
//     if (Reactive.and(time.ge(Reactive.val(beatArr[i]-0.3)),time.le(Reactive.val(beatArr[i]+0.3)))){
//       Patches.setBooleanValue("hit",Reactive.and(time.ge(Reactive.val(beatArr[i]-0.1)),time.le(Reactive.val(beatArr[i]+0.1))))
//       // Patches.setBooleanValue("hit",false)
//       // Patches.setPulseValue("pulse",Reactive.once())
//       Diagnostics.watch("Beat time - ", time);
//       Diagnostics.watch("beat ", beatArr[i]);
//     }else{
//       // Patches.setBooleanValue("hit",false)
//     }
//   }


// // Patches.setBooleanValue("hit",Reactive.or(Reactive.and(time.ge(0.228),time.le(0.3528)),Reactive.and(time.ge(1.6486),time.le(2.1662))))

//  // const fs = require('fs')
// // const Speaker = require('speaker')
// // const createMusicStream = require('create-music-stream') //read this https://github.com/chrvadala/create-music-stream#faq
// // const {MusicBeatDetector, MusicBeatScheduler, MusicGraph} = require('music-beat-detector')

// // const musicSource = process.argv[2] //get the first argument on cli

// // const musicGraph = new MusicGraph()

// // const musicBeatScheduler = new MusicBeatScheduler(pos => {
// //   console.log(`peak at ${pos}ms`) // your music effect goes here
// // })

// // const musicBeatDetector = new MusicBeatDetector({
// //   plotter: musicGraph.getPlotter(),
// //   scheduler: musicBeatScheduler.getScheduler(),
// // })

// // const Speaker = require('speaker')
// // const createMusicStream = require('create-music-stream')
 
// // createMusicStream('./track.mp3', console.log)
// //   .pipe(new Speaker())

// // createMusicStream(musicSource)
// //   .pipe(musicBeatDetector.getAnalyzer())
// //   .on('peak-detected', (pos, bpm) => console.log(`peak-detected at ${pos}ms, detected bpm ${bpm}`))
// //   .on('end', () => {
// //     fs.writeFileSync('graph.svg', musicGraph.getSVG())
// //     console.log('end')
// //   })

// //   .pipe(new Speaker())
// //   .on('open', () => musicBeatScheduler.start())