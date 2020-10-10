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
    if(emotion === "angry"){
      document.getElementById('body').style.backgroundColor = "#d9040b"
    }
    if(emotion === "anxiety"){
      document.getElementById('body').style.backgroundColor = "#018c06"
    }
    if(emotion === "anxiety"){
      document.getElementById('body').style.backgroundColor = "#2aace8"
    }


    
    client.publish('/hello', emotion)
}