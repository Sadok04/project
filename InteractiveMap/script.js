// Ініціалізація карти
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 49.45044, lng: 32.05957 }, // Центр карти
        zoom: 8,
    });

    // Додавання маркерів при кліку на карту
    map.addListener("click", (event) => {
        addMarker(event.latLng, map);
    });
}

// Функція для додавання маркера
function addMarker(location, map) {
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });

    // Додавання інформаційного вікна
    const infoWindow = new google.maps.InfoWindow({
        content: `Координати: ${location.lat()}, ${location.lng()}`,
    });

    marker.addListener("click", () => {
        infoWindow.open(map, marker);
    });
}