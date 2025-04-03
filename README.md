# Fast Connect - Aplicación para Conciertos

Aplicación web que mejora la conexión a internet durante eventos al detectar si el usuario está en la ubicación del evento.

## Características

- Detecta si el usuario está en la ubicación del concierto (Device Location Verification API)
- Mejora la calidad de servicio si el usuario está en la ubicación correcta (Quality on Demand API)
- Interfaz de usuario intuitiva con indicadores de estado visual
- Totalmente responsive para uso en dispositivos móviles
- Código modularizado para mejor mantenibilidad

## Estructura del Proyecto

- `index.html` - Estructura HTML de la aplicación
- `styles.css` - Estilos CSS para la interfaz de usuario
- `app.js` - Archivo principal con la lógica de inicialización
- `api/` - Directorio con módulos para las conexiones a las APIs
  - `device-location-verification-api.js` - API para verificar la ubicación del usuario
  - `quality-on-demand-api.js` - API para mejorar la calidad de conexión
- `utils/` - Directorio con utilidades
  - `ui-manager.js` - Gestión de la interfaz de usuario

## Desarrollo Futuro

- Integración con la Device Location Verification API real
- Conexión con la Quality on Demand API real
- Autenticación de usuarios
- Posibilidad de seleccionar entre diferentes eventos
- Estadísticas de uso y calidad de conexión

