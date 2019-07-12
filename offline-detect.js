 /*! @preserve Offline detect.js javascript ( https://github.com/arulprasadj/offline-detect-js ) -- Version: 1.1.0 -- Author: Arul Prasad J ('https://github.com/arulprasadj') */

 window.addEventListener('load', function() {
  function updateOnlineStatus() {
    $("#off__status").html('');
    var condition = navigator.onLine ? "online" : "offline";
    if( condition == 'online' ){
      //console.log( 'condition: online');
      $("#off__status").html('<i class="fi flaticon-happiness"></i> You&#39;ve connected to the internet again.');
      $("#off__status").removeClass("offline__sticky");
      $("#off__status").addClass("online__sticky");
      $("#off__status").delay(4200).fadeOut(300);
    }else{
      //console.log( 'condition: offline');
      $("#off__status").show();
      $("#off__status").html('<i class="fi flaticon-sad"></i> It seems like you lost internet connection.');
      if($('#off__status').hasClass('online__sticky')){
       $('#off__status').removeClass('online__sticky');
       $('#off__status').addClass('offline__sticky');
     }else{
      $('#off__status').addClass('offline__sticky');
    }
  }
}
window.addEventListener('online',  updateOnlineStatus );
window.addEventListener('offline', updateOnlineStatus );
});
