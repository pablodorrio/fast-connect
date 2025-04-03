# Fast Connect - Aplicación para Conciertos

Aplicación web que mejora la conexión a internet durante conciertos al detectar si el usuario está en la ubicación del evento.

## Características

- Detecta si el usuario está en la ubicación del concierto (Device Location Verification API)
- Mejora la calidad de servicio si el usuario está en la ubicación correcta (Quality on Demand API)
- Interfaz de usuario intuitiva con indicadores de estado visual
- Totalmente responsive para uso en dispositivos móviles
- Código modularizado para mejor mantenibilidad

## Estructura del Proyecto

- `src/` - Directorio con los archivos fuente
  - `index.html` - Estructura HTML de la aplicación
  - `style.css` - Estilos CSS para la interfaz de usuario
  - `main.js` - Punto de entrada de la aplicación
  - `app.js` - Archivo principal con la lógica de inicialización
  - `api/` - Directorio con módulos para las APIs
    - `device-location-verification-api.js` - API para verificar la ubicación del usuario
    - `quality-on-demand-api.js` - API para mejorar la calidad de conexión
  - `utils/` - Directorio con utilidades
    - `ui-manager.js` - Gestión de la interfaz de usuario
- `vite.config.js` - Configuración de Vite
- `vercel.json` - Configuración para despliegue en Vercel
- `package.json` - Dependencias y scripts del proyecto

## Cómo desarrollar localmente

1. Clona el repositorio
2. Instala las dependencias:
   ```
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```
   npm run dev
   ```
4. Abre tu navegador en `http://localhost:3000`

## Compilar para producción

Para compilar la aplicación para producción:

```
npm run build
```

Esto generará una carpeta `dist` con los archivos optimizados.

## Despliegue en Vercel

Para desplegar esta aplicación en Vercel, sigue estos pasos:

1. Asegúrate de tener una cuenta en [Vercel](https://vercel.com)
2. Conecta tu repositorio de GitHub a Vercel:
   - Ve a [vercel.com/new](https://vercel.com/new)
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente que es un proyecto de Vite
   - Haz clic en "Deploy"

La aplicación está configurada con `vercel.json` para un despliegue óptimo en la plataforma.

## APIs Simuladas

### Device Location Verification API

En esta versión de demostración, la API simula un 99% de probabilidad de que el usuario esté en el concierto. En una implementación real, utilizaría la API de Geolocalización del navegador y la compararía con las coordenadas del concierto.

### Quality on Demand API (QoD)

Esta API simula la activación de una conexión mejorada cuando el usuario está en el concierto. En una implementación real, se conectaría con los servicios de Telefónica para priorizar la conexión del usuario.

## Desarrollo Futuro

- Integración con la Device Location Verification API real
- Conexión con la Quality on Demand API real
- Autenticación de usuarios
- Posibilidad de seleccionar entre diferentes eventos
- Estadísticas de uso y calidad de conexión

## Autor

Telefónica - Fast Connect Team

