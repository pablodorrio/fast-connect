// Device Location Verification API
// Coordenadas simuladas del concierto
const concertLocation = {
    latitude: 40.416775,
    longitude: -3.703790
};

/**
 * Device Location Verification API: Comprobar si el usuario está en la ubicación del concierto
 * @returns {Promise} Promesa que resuelve con el resultado de la verificación
 */
function checkUserLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            // Simulación: 99% de probabilidad de estar en el concierto
            const randomResult = Math.random();
            
            setTimeout(() => {
                if (randomResult < 0.99) {
                    resolve({
                        success: true,
                        message: 'Usuario localizado en el concierto',
                        location: 'En el concierto'
                    });
                } else {
                    resolve({
                        success: false,
                        message: 'Usuario no está en el concierto',
                        location: 'Fuera del concierto'
                    });
                }
            }, 2000);
        } else {
            reject({
                success: false,
                message: 'La geolocalización no está disponible',
                location: 'No disponible'
            });
        }
    });
}

export { checkUserLocation }; 