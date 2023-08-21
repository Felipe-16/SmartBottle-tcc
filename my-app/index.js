// const { app, BrowserWindow } = require('electron');

// // let mainWindow;

// function createWindow() {
//   const mainWindow = new BrowserWindow({
//     width: 1920,
//     height: 1080,
//   });
//   mainWindow.loadURL("http://localhost:3000");
// }


//   app.on('ready', createWindow);

  const { app, BrowserWindow } = require('electron');

  let mainWindow;
  
  function createWindow() {
    mainWindow = new BrowserWindow({
      width: 1920,
      height: 1080,
    });
    mainWindow.loadURL("http://localhost:3000");
  }
  
  app.on('ready', () => {
    createWindow();
  });
  

  