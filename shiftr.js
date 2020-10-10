var client = mqtt.connect('mqtt://token_ie_13:password@broker.shiftr.io', {
  clientId: 'laptop'
});

client.on('connect', function(){
  console.log('client has connected!');

  client.subscribe('/hello');
});

client.on('message', function(topic, message) {
  console.log('new message:', topic, message.toString());
});

function sendEmotion(emotion){
    Swal.fire({
      title: 'Emotion registered',
      icon: 'success',
      text: 'Have a lovely day'
    })
    if(emotion === "happy"){
      document.getElementById('body').style.backgroundColor = "#faad1e"
    }
    
    client.publish('/hello', emotion)
}