const { app, BrowserWindow, globalShortcut } = require('electron');
const config = require('./config');

let win;

// Habilita o live-reload da janela de navegação
require('electron-reload')(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`),
});

// Função que cria uma janela desktop
function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadURL(config.url);
}

// config do devTools
function toggleDevTools() {
  win.webContents.toggleDevTools();
}

// criando as teclas de atalho
function createShortcuts() {
  globalShortcut.register('CmdOrCtrl+J', toggleDevTools);
}

app.whenReady().then(createWindow).then(createShortcuts);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
