function addLocationMap (lat1, lat2, lon1, lon2, modal, end) {
    if (modal) loading();
    $.post(server + "0.1.php", {"lat1": lat1, "lat2": lat2, "lon1": lon1, "lon2": lon2}).done(
        function (result) {
            console.log(result)
            try {
                let requestPHP = JSON.parse(result);
                let elememts = [];

                for(element in requestPHP) {
                    if (element !== null) {
                        elememts.push(requestPHP[element]);
                    }
                }

                addOptions("amenity", elememts[0]);
                addOptions("highway", elememts[1]);
                addOptions("way", elememts[2]);
                $("#address").val(elememts[3]);
                markerMap['data'] = elememts[4];
                if (end) finish();
            } catch (error) {
                console.log(error)
                if (end) finish();
            }
        }
    );
}

function drawItemSelect (option, name, modal) {
    if (modal) loading();
    const menu = document.getElementById(name);
    const select = menu.options[menu.selectedIndex].text;

    if (checkSelection(select) || checkLayer(select)) {
        if (modal) finish();
        return;
    }

    function onEachFeature (feature, layer) {
        console.log(feature)
        const lat = feature.geometry.coordinates[1];
        const lon = feature.geometry.coordinates[0];
        const style = "style='padding: 8px; background-color: green; color: white; " +
                      "border-radius: 8px; text-decoration: none;'";
        let popupContent = "";
        
        if (option === 0) {
            popupContent = "<p>" + feature.properties.amenity.toUpperCase() + "</p>";
        }

        if (option === 1 || option === 2) {
            popupContent = "<p>" + feature.properties.highway.toUpperCase() + "</p>";
        }

        if (feature.properties.name) popupContent += "<p>" + feature.properties.name + "</p>";
        if (option !== 2) popupContent += "<a href='https://www.google.com/maps/search/?api=1&query=" + lat + "%2C" +
                                          lon + "' target='_blank' " + style + ">Google maps</a><br\><br\>";
        layer.bindPopup(popupContent);
    }
    
    $.post(server + "0.2.php", {"name": select, "type": option, "lat1": markerMap['location'][0],
        "lat2": markerMap['location'][1], "lon1": markerMap['location'][2], "lon2": markerMap['location'][3]}).done(
        function (result) {
            console.log(result)
            try {

                let requestPHP = JSON.parse(result);
                let elememts = [];

                for (element in requestPHP) {
                    if (element !== null) {
                        elememts.push(requestPHP[element]);
                    }
                }
                $("#address").val(elememts[0]);
                markerMap['data'] = elememts[1];

                const colorMarket = generateRandomColor(false);
                const colorWay = option !== 2 ? "#" + colorMarket : generateRandomColor(true);

                const geo = L.geoJSON(elememts[1], {
                    pointToLayer: function (feature, latlng) {
                        const icon = new L.Icon({
                            iconUrl: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|' + colorMarket + '&chf=a,s,ee00FFFF',
                            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                            iconSize: [25, 41],
                            iconAnchor: [12, 41],
                            popupAnchor: [1, -34],
                            shadowSize: [41, 41]
                        });
                        return L.marker(latlng, {icon: icon});

                    }, onEachFeature: onEachFeature, style: function (geoJsonFeature) {
                        return {color: colorWay}
                    }
                });

                const struture = {
                    name: select,
                    type: name,
                    data: geo,
                    color: colorMarket,
                    enable: true,
                    colorGUI: colorWay
                };

                mapLayers.push(struture);
                updateComponents();

                if (modal) finish();

            } catch (error) {
                console.log(error)
                if (modal) finish();
            }
        }
    );
}