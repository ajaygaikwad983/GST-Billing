const { app, BrowserWindow, ipcMain } = require("electron");
const url = require("url");
const path = require("path");
const exec = require("child_process").exec;
const logger = require("electron-log");
const fs = require("fs");
const Store = require("electron-store");

const store = new Store();

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

  console.log("directory", __dirname);
  logger.info("directory", __dirname);

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `./dist/OmSaiLamination/index.html`),
      protocol: "file:",
      slashes: true,
    })
    // "http://localhost:4200"
  );

  mainWindow.setMenu(null);
  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  mainWindow.on("closed", function () {
    mainWindow = null;
  });

  const dataFilePath = path.join(__dirname, `./data.json`);
  console.log("data file path", dataFilePath);

  const readDataFile = () => {
    let rawdata = fs.readFileSync(dataFilePath);
    try {
      const data = JSON.parse(rawdata);
      mainWindow.webContents.send("databaseData", data);
      store.set("data", JSON.stringify(data));
      console.log("read file response", data);
      logger.info("read file response", data);
    } catch (error) {
      console.log("read file error", error);
      logger.info("read file error", error);
    }
  };

  mainWindow.webContents.on("did-finish-load", function () {
    readDataFile();
  });

  ipcMain.on("changeInStore", (event, data) => {
    console.log("save data in electron store");
    logger.info("save data in electron store", data);
    store.set("data", JSON.stringify(data));
  });
}

const writeDataFile = () => {
  try {
    const dataFilePath = path.join(__dirname, `./data.json`);
    const storeData = store.get("data");
    console.log("store data", storeData);
    logger.info("store data", storeData);
    let rawdata = fs.writeFileSync(dataFilePath, storeData);
    console.log("write file response", rawdata);
    logger.info("write file response", rawdata);
    app.quit();
  } catch (error) {
    console.log("write file error", error);
    logger.info("write file error", error);
  }
};

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    console.log("window closed");
    writeDataFile();
    // app.quit();
  }
});

app.on("activate", function () {
  if (mainWindow === null) createWindow();
});
