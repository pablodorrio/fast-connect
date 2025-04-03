import { checkUserLocation } from './api/device-location-verification-api.js';
import { enhanceConnection } from './api/quality-on-demand-api.js';
import { updateUI, setStatusMessage, updateInfoPanel } from './utils/ui-manager.js';

/**
 * Función principal que inicializa la aplicación
 */
export function initApp() {
    const connectButton = document.getElementById('connect-button');
    const statusIcon = document.getElementById('status-icon');
    const statusMessage = document.getElementById('status-message');
    const locationValue = document.getElementById('location-value');
    const qodValue = document.getElementById('qod-value');
    const loadingSpinner = document.getElementById('loading-spinner');

    let isConnected = false;
    let isAtConcert = false;
    let isEnhancedConnection = false;

    const uiElements = {
        statusIcon,
        statusMessage,
        connectButton,
        loadingSpinner
    };

    const infoElements = {
        locationValue,
        qodValue
    };

    connectButton.addEventListener('click', async () => {
        if (isConnected) {
            isConnected = false;
            isAtConcert = false;
            isEnhancedConnection = false;
            
            updateInfoPanel(infoElements, {
                location: 'Desconocida',
                quality: 'Estándar'
            });
            
            updateUI('offline', uiElements);
            return;
        }
        
        updateUI('connecting', uiElements);
        
        try {
            const locationResult = await checkUserLocation();
            isAtConcert = locationResult.success;
            
            updateInfoPanel(infoElements, {
                location: locationResult.location
            });
            
            if (locationResult.success) {
                try {
                    const enhanceResult = await enhanceConnection(isAtConcert);
                    isEnhancedConnection = true;
                    
                    updateInfoPanel(infoElements, {
                        quality: enhanceResult.quality
                    });
                    
                    isConnected = true;
                    updateUI('connected', uiElements);
                } catch (enhanceError) {
                    updateInfoPanel(infoElements, {
                        quality: enhanceError.quality
                    });
                    
                    updateUI('error', uiElements);
                }
            } else {
                updateInfoPanel(infoElements, {
                    quality: 'Estándar'
                });
                
                updateUI('error', uiElements);
                setStatusMessage(statusMessage, 'No estás en el concierto');
            }
        } catch (error) {
            updateInfoPanel(infoElements, {
                location: error.location,
                quality: 'Estándar'
            });
            
            updateUI('error', uiElements);
        }
    });

    updateUI('offline', uiElements);
} 