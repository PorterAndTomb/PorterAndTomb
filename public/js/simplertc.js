window.onload = function() {
var webrtc = new SimpleWebRTC({
    // the id/element dom element that will hold "our" video
    localVideoEl: 'localVideo',
    // the id/element dom element that will hold remote videos
    autoRequestMedia: true,
    media: {audio: true, video:false},
    // dont negotiate media
    receiveMedia: {
        mandatory: {
            OfferToReceiveAudio: true,
            OfferToReceiveVideo: false
        }
    }
});

// we have to wait until it's ready
webrtc.on('readyToCall', function () {
    // you can name it anything
    webrtc.joinRoom('your awesome room name');
});
};