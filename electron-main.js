const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    console.log('1. Creando ventana...');

    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 800
    });

    console.log('2. Ventana creada...');

    mainWindow.loadFile(path.join(__dirname, 'index.html'));

    console.log('3. Intentando cargar index.html...');
}

app.whenReady().then(() => {
    console.log('4. Electron está listo...');
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});