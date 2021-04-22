import { React, useState } from 'react'
const mqtt = require("mqtt")
const client  = mqtt.connect("ws://localhost:8888")
const topic = "/smartcar/camera"


// public void messageArrived(String topic, MqttMessage message) throws Exception {
//     if (topic.equals("/smartcar/camera")) {
//         final Bitmap bm = Bitmap.createBitmap(IMAGE_WIDTH, IMAGE_HEIGHT, Bitmap.Config.ARGB_8888);

//         final byte[] payload = message.getPayload();
//         final int[] colors = new int[IMAGE_WIDTH * IMAGE_HEIGHT];
//         for (int ci = 0; ci < colors.length; ++ci) {
//             final byte r = payload[3 * ci];
//             final byte g = payload[3 * ci + 1];
//             final byte b = payload[3 * ci + 2];
//             colors[ci] = Color.rgb(r, g, b);
//         }
//         bm.setPixels(colors, 0, IMAGE_WIDTH, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

//         mCameraView.setImageBitmap(bm);
//     } else {
//         Log.i(TAG, "[MQTT] Topic: " + topic + " | Message: " + message.toString());
//     }
// }

// btoa([].reduce.call(new Uint8Array(bufferArray),function(p,c){return p+String.fromCharCode(c)},''))


  

function convert(msg){

    let c = document.getElementById("myCanvas"); 
    let ctx = c.getContext("2d"); 

    let r,g,b; 
 
    for(let i=0; i< msg.length; i++){ 
	    for(let j=0; j< msg[0].length; j++){ 
            r = msg[i][j][0]; 
            g = msg[i][j][1];	 
            b = msg[i][j][2];		 
            ctx.fillStyle = "rgba("+r+","+g+","+b+", 1)";  
            ctx.fillRect( j, i, 1, 1 ); 
	    } 
    } 
}

function encode(data)
{
  var str = "";
  for (var i = 0; i < data.length; i++)
    str += String.fromCharCode(data[i]);

  return btoa(str).split(/(.{75})/).join("\n").replace(/\n+/g, "\n").trim();
}

function draw(imgData){
    var b64imgData = btoa(imgData); //Binary to ASCII, where it probably stands for
    var img = new Image();
    img.src = "data:image/jpeg;base64," + b64imgData;
    return img; //ppend it to something else, just an example
}

function utf8_to_b64( str ) {
    return window.btoa(unescape(encodeURIComponent( str )));
}

function b64_to_utf8( str ) {
    return decodeURIComponent(escape(window.atob( str )));
}

// function convert(buffer) {
//   var decoder = new TextDecoder('utf8');
//   return btoa(decoder.decode(buffer));
// }


const CameraTest = () => {
    const [image, setImage] = useState(null)
    const [msg, setMsg] = useState("camera feed")
    client.subscribe(topic)

    client.on("message", (topic, message) => {
        //console.log((message.buffer))
        //console.log("data:image/bmp;base64," + btoa(String.fromCharCode.apply(null, message.buffer)));
        let blob = new Blob([message.buffer])
        let url = URL.createObjectURL( blob );
        setImage(url)
        //setImage("data:image/png;base64," + message.buffer.toString('base64'));
    })
    return (
        <>
        <img width={320} height={240} src={image}/>
        </>
    )
}

export default CameraTest
