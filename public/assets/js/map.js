function init_map(zoom, center, elementId, title) {
    var myOptions = {
        zoom: zoom,
        center: center,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById(elementId), myOptions);
    marker = new google.maps.Marker({
        map: map,
        position: center
    });
    infowindow = new google.maps.InfoWindow({
        content: "<span style='height:auto !important; display:block; white-space:nowrap; overflow:hidden !important;'><strong style='font-weight:400;'>" + title + "</strong></span>"
    });
    google.maps.event.addListener(marker, "click", function () {
        infowindow.open(map, marker);
    });
    infowindow.open(map, marker);


}


