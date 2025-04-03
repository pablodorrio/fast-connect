/**
 * Actualiza la interfaz de usuario según el estado de la conexión
 * @param {string} state - Estado de la conexión ('offline', 'connecting', 'connected', 'error')
 * @param {Object} elements - Elementos DOM para actualizar
 */
function updateUI(state, elements) {
    const { 
        statusIcon, 
        statusMessage, 
        connectButton, 
        loadingSpinner 
    } = elements;

    switch (state) {
        case 'offline':
            statusIcon.className = 'status-icon offline';
            statusMessage.textContent = 'No conectado';
            connectButton.disabled = false;
            connectButton.textContent = 'Conectar al concierto';
            loadingSpinner.classList.add('hidden');
            break;
        
        case 'connecting':
            statusIcon.className = 'status-icon connecting';
            statusMessage.textContent = 'Conectando...';
            connectButton.disabled = true;
            loadingSpinner.classList.remove('hidden');
            break;
        
        case 'connected':
            statusIcon.className = 'status-icon connected';
            statusMessage.textContent = 'Conectado';
            connectButton.disabled = false;
            connectButton.textContent = 'Desconectar';
            loadingSpinner.classList.add('hidden');
            break;
        
        case 'error':
            statusIcon.className = 'status-icon error';
            statusMessage.textContent = 'Error de conexión';
            connectButton.disabled = false;
            connectButton.textContent = 'Reintentar';
            loadingSpinner.classList.add('hidden');
            break;
    }
}

/**
 * Establece un mensaje personalizado de estado
 * @param {Element} statusMessageElement - Elemento DOM del mensaje de estado
 * @param {string} message - Mensaje a mostrar
 */
function setStatusMessage(statusMessageElement, message) {
    statusMessageElement.textContent = message;
}

/**
 * Actualiza información en el panel de información
 * @param {Object} infoElements - Elementos DOM de información
 * @param {Object} values - Valores a mostrar
 */
function updateInfoPanel(infoElements, values) {
    const { locationValue, qodValue } = infoElements;
    const { location, quality } = values;

    if (location) locationValue.textContent = location;
    if (quality) qodValue.textContent = quality;
}

export { updateUI, setStatusMessage, updateInfoPanel }; 