const { app, BrowserWindow } = require('electron');


function createWindow() {
  // Créer la fenêtre du navigateur.
  win = new BrowserWindow({show: false});
win.maximize();
win.show();


  // et chargez l'index.html de l'application.
  win.loadURL('http://localhost:3000');
}


app.whenReady().then(createWindow);