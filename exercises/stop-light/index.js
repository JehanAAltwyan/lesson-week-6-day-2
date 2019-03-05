function turnOffLights() {

  let trafficLight =$(".bulb")
  trafficLight.css('background','black');

  }
// turn on stop function
function turnOnStopLight() {

    // change background color of stop light to red
    turnOffLights();
let stopLight= $("#stopLight");
stopLight.css("background","red");
}

// turn on slow function
function turnOnSlowLight() {
  turnOffLights();
  let slowLight= $("#slowLight");
  slowLight.css("background","yellow");

}

// turn on go function
function turnOnGoLight() {
  turnOffLights();
  let goLight= $("#goLight");
  goLight.css("background","green");
    // change background color of go light to green
}
//turnOffLights();
//turnOnSlowLight();
//turnOnStopLight();
//turnOnGoLight();

// set stop light click event
$("#stopButton").on('click',turnOnStopLight);
// set slow light click event
$("#slowButton").on('click',turnOnSlowLight);
// set go light click event
$("#goButton").on('click',turnOnGoLight);

//
$(".bulb").on('click',turnOnGoLight);
