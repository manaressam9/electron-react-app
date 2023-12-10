//electron entry point
const electron = require("electron");
const app = electron.app;
const BrowserWindow =  electron.BrowserWindow;
const url = require("url");
const path = require("path");
const log = require("electron-log");

let mainWindow;
function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
      width: 1200,
      height: 1000,
      webPreferences: {
        webSecurity: false,
        nodeIntegration: true
      }
    });

    mainWindow.loadURL(
        url.format({
          pathname: path.join(__dirname, "index.html"),
          protocol: "file:",
          slashes: true
        })
      );
//log.info(path.join(__dirname, "index.html"))
      mainWindow.on("closed", function() {
        mainWindow = null;
      });
}

app.on("ready", createWindow);
app.on("window-all-closed", function() {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== "darwin") app.quit();
  });
  
  app.on("activate", function() {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) createWindow();
  });