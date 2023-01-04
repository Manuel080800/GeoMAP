let id = null;
let idShare = null;
let mapLayers = [];
let server = "http://localhost:63342/geomap/";
let enableGrid = false;
let modeGrid = 0;

let markerMap = {
    market: null,
    radio: null,
    position: null,
    data: null,
    location: []
};

let gridMap = {
    base: [3956.1932288421954, 3831.006082275065],
    now: [],
    data: [],
    locations: [],
    locations_now: [],
    index_grid: null,
    markets: [],
}