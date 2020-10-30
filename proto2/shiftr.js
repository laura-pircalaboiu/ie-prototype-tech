var client = mqtt.connect('mqtt://token_ie_13:password@broker.shiftr.io', {
  clientId: 'arduino-in-the-park'
});

var aud = document.getElementById("myAudio");
aud.play()

client.on('connect', function(){
  console.log('client has connected!');

  client.subscribe('/prototype/home');

  setInterval(function(){
    let x = Math.floor(Math.random() * 10) + 22
    client.publish('/prototype/park', String(x))
  }, 10000);
});

client.on('message', function(topic, message) {
  if(message.toString() === "0"){
    aud.volume = 0.2;
  }else{
    aud.volume = 1.0;
  }
});