// Template for maps from Interactive Frontend Development Module 

function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 10,
                center: 
                    {lat:52.2350,lng:-0.9337}

                
            });

            var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

            var locations = [
                {locId: 'A' ,lat:53.765071,lng:-2.371204, Team: "Accy"},   //Accrington
                {lat:51.405568,lng:-0.282414},   //AFC Wimbledon
                {lat:53.805049,lng:-3.049142},   //Blackpool
                {lat:51.486727,lng:-2.582715},   //Bristol rovers
                {lat:52.821763,lng:-1.627278},   //Burton
                {lat:51.486867,lng:0.035826},    //Charlton
                {lat:53.088085,lng:-2.436214},   //Crewe
                {lat:53.510732,lng:-1.114606},   //Doncaster
                {lat:53.916814,lng:-3.023953},   //Fleetwood
                {lat:51.384399,lng:0.560967},    //Gillingham
                {lat:53.745916,lng:-0.368016},   //Hull
                {lat:52.055102,lng:1.145308},    //Ipswich
                {lat:53.21855,lng:-0.540772},    //Lincoln
                {lat:52.009853,lng:-0.733461},   //MK dons
                {lat:52.235431,lng:-0.934538},   //Northampton
                {lat:51.716099,lng:-1.207979},   //Oxford
                {lat:52.56493,lng:-0.241323},    //Peterborough
                {lat:50.388358,lng:-4.151052},   //Plymouth
                {lat:50.795982,lng:-1.064688},   //Portsmouth
                {lat:53.62068,lng:-2.180778},    //Rochdale
                {lat:52.688589,lng:-2.748459},   //Shrewsbury
                {lat:54.9147,lng:-1.388435},     //Sunderland
                {lat:51.56459,lng:-1.772057},    //Swindon
                {lat:53.547375,lng:-2.655075}    //Wigan


];

            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });

            var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
        }

 