function init_map(zoom, center, elementId, markers) {
    var myOptions = {
        zoom: zoom,
        center: center,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById(elementId), myOptions);
    // marker = new google.maps.Marker({
    //     map: map,
    //     position: new google.maps.LatLng(40.8054567, -73.96547470000002)
    // });
    // infowindow = new google.maps.InfoWindow({
    //     content: "<span style='height:auto !important; display:block; white-space:nowrap; overflow:hidden !important;'><strong style='font-weight:400;'>The Breslin</strong><br>2880 Broadway<br> New York</span>"
    // });
    // google.maps.event.addListener(marker, "click", function () {
    //     infowindow.open(map, marker);
    // });
    // infowindow.open(map, marker);


}


