// Template for maps from Interactive Frontend Development Module 

function initMap() {
    var options = {
        zoom: 8,
        center:  {lat:52.2350,lng:-0.9337}
    }
    var map = new google.maps.Map(document.getElementById("map"),options);

  /*  var marker = new google.maps.Marker({
        position:  {lat:52.2350,lng:-0.9337},
        map:map,
            });

   var infoWindow = new google.maps.InfoWindow({
        content:'<h1>NTFC</h1>'
    });

    marker.addListener('click',function(){
        infoWindow.open(map,marker);
    })
*/  

// Array for Markers

    var markers =[
        {coords:{lat:52.2350,lng:-0.9337},
        iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content:'<h6>NTFC</h6>'},
        {coords:{lat:52.009853,lng:-0.733461}},
        {coords:{lat:51.716099,lng:-1.207979}}
    
    ]

    // loop through markers

        for(var i=0; i<markers.length;i++){
           addMarker(markers[i]);
        }
    
        //add marker function
    function addMarker(props){
        var marker = new google.maps.Marker({
        position: props.coords,
        map:map,
       // icon: props.iconImage
            });
        //  check for custom icon
            if(props.iconImage){
                // Set icon image
                marker.setIcon(props.iconImage)
            }

        // check content    
            if(props.content){
                var infoWindow = new google.maps.InfoWindow({
                content:props.content
    });

    marker.addListener('click',function(){
        infoWindow.open(map,marker);
    })
            }
    }
}
            