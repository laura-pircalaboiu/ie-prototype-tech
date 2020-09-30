var client = mqtt.connect('mqtt://token_ie_13:password@broker.shiftr.io', {
  clientId: 'laptop'
});

client.on('connect', function(){
  console.log('client has connected!');

  client.subscribe('/hello');
  // client.unsubscribe('/example');
});

client.on('message', function(topic, message) {
  console.log('new message:', topic, message.toString());
});

function sendEmotion(emotion){
    client.publish('/hello', emotion)
}