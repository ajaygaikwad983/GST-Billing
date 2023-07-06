const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");
const exec = require("child_process").exec;
const logger = require("electron-log");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 720,
    webPreferences: {
      nodeIntegration: true,
    },
    resizable: false,
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `../dist/OmSaiLamination/index.html`),
      protocol: "file:",
      slashes: true,
    })
  );

  mainWindow.setMenu(null);
  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  mainWindow.on("closed", function () {
    mainWindow = null;
  });

  const startJsonServer = () => {
    exec("json-server data.json", (err, stdout, stderr) => {
      if (err) {
        console.log("startJsonServer error", err);
        logger.info("start json server error: ", err);
        return;
      }

      if (stdout) {
        console.log("startJsonServer stdout", stdout);
        logger.info("start json server stdout: ", stdout);
        return;
      }

      if (stderr) {
        console.log("startJsonServer stderr", stderr);
        logger.info("start json server stderr: ", stderr);
        return;
      }
    });
  };

  const installJsonServer = () => {
    exec("npm i -g json-server@0.17.3", (err, stdout, stderr) => {
      if (err) {
        console.log("installJsonServer error", err);
        logger.info("install json server error: ", err);
        return;
      }
      
      if (stdout) {
        console.log("installJsonServer stdout", stdout);
        logger.info("install json server stdout: ", stdout);
        startJsonServer();
        return;  
      }
      
      if (stderr) {
        console.log("installJsonServer stderr", stderr);
        logger.info("install json server stderr: ", stderr);
        return;  
      }
    });
  };
  
  const checkJsonServerPresent = () => {
    exec("json-server -v", (err, stdout, stderr) => {
      if (err) {
        console.log("checkJsonServerPresent error", err);
        logger.info("json server version check cmd error: ", err);
        installJsonServer();
        return;
      }
      
      if (stdout) {
        console.log("checkJsonServerPresent stdout", stdout);
        logger.info("json server version check cmd stdout: ", stdout);
        startJsonServer();
        return;
      }
      
      if (stderr) {
        console.log("checkJsonServerPresent stderr", stderr);
        logger.info("json server version check cmd stderr: ", stderr);
        return;
      }
    });
  };

  checkJsonServerPresent();
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
  if (mainWindow === null) createWindow();
});
