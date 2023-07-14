const { app, BrowserWindow, ipcMain } = require("electron");
const url = require("url");
const path = require("path");
const exec = require("child_process").exec;
const logger = require("electron-log");
const fs = require("fs");

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
    // url.format({
    //   pathname: path.join(__dirname, `./dist/OmSaiLamination/index.html`),
    //   protocol: "file:",
    //   slashes: true,
    // })
    "http://localhost:4200"
  );

  mainWindow.setMenu(null);
  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  mainWindow.on("closed", function () {
    mainWindow = null;
  });

  const dataFilePath = path.join(__dirname, `./data.json`);
  console.log("data file path", dataFilePath);
  logger.info("data file path", dataFilePath);

  const readDataFile = () => {
    let rawdata = fs.readFileSync("data.json");
    try {
      const data = JSON.parse(rawdata);
      mainWindow.webContents.send("databaseData", data);
      console.log(data);
      logger.info(data);
    } catch (error) {
      console.log(error);
      logger.info(error);
    }
  };

  const writeDataFile = (data) => {
    console.log("data from angular", data);
    let rawdata = fs.writeFileSync("data.json", data);
    try {
      const data = JSON.parse(rawdata);
      console.log("write file response", data);
      logger.info(data);
    } catch (error) {
      console.log(error);
      logger.info(error);
    }
  };

  mainWindow.webContents.on("did-finish-load", function () {
    readDataFile();
  });

  ipcMain.on("dataFromAngular", (event, data) => {
    writeDataFile(data);
  });
  // const startJsonServer = () => {
  //   exec(`json-server --watch ${dataFilePath}`, (err, stdout, stderr) => {
  //     if (err) {
  //       console.log("startJsonServer error", err);
  //       logger.info("start json server error: ", err);
  //       return;
  //     }

  //     if (stdout) {
  //       console.log("startJsonServer stdout", stdout);
  //       logger.info("start json server stdout: ", stdout);
  //       return;
  //     }

  //     if (stderr) {
  //       console.log("startJsonServer stderr", stderr);
  //       logger.info("start json server stderr: ", stderr);
  //       return;
  //     }
  //   });
  // };

  // const installJsonServer = () => {
  //   exec("npm i -g json-server@0.17.3", (err, stdout, stderr) => {
  //     if (err) {
  //       console.log("installJsonServer error", err);
  //       logger.info("install json server error: ", err);
  //       return;
  //     }

  //     if (stdout) {
  //       console.log("installJsonServer stdout", stdout);
  //       logger.info("install json server stdout: ", stdout);
  //       startJsonServer();
  //       return;
  //     }

  //     if (stderr) {
  //       console.log("installJsonServer stderr", stderr);
  //       logger.info("install json server stderr: ", stderr);
  //       return;
  //     }
  //   });
  // };

  // const checkJsonServerPresent = () => {
  //   exec("json-server -v", (err, stdout, stderr) => {
  //     if (err) {
  //       console.log("checkJsonServerPresent error", err);
  //       logger.info("json server version check cmd error: ", err);
  //       installJsonServer();
  //       return;
  //     }

  //     if (stdout) {
  //       console.log("checkJsonServerPresent stdout", stdout);
  //       logger.info("json server version check cmd stdout: ", stdout);
  //       startJsonServer();
  //       return;
  //     }

  //     if (stderr) {
  //       console.log("checkJsonServerPresent stderr", stderr);
  //       logger.info("json server version check cmd stderr: ", stderr);
  //       return;
  //     }
  //   });
  // };

  // checkJsonServerPresent();
}

// const killPort = (pid) => {
//   console.log("Killing port");
//   exec(
//     `taskkill /PID ${pid.replace(/\r\n/g, "")} /F`,
//     (err, stdout, stderr) => {
//       if (err) {
//         console.log("killJsonServerPort error", err);
//         logger.info("killJsonServerPort error: ", err);
//         return;
//       }

//       if (stdout) {
//         console.log("killJsonServerPort stdout", stdout);
//         logger.info("killJsonServerPort stdout: ", stdout);
//         return;
//       }

//       if (stderr) {
//         console.log("killJsonServerPort stderr", stderr);
//         logger.info("killJsonServerPort stderr: ", stderr);
//         return;
//       }
//     }
//   );
// };

// const FindIfPortIsListening = () => {
//   console.log("check port listening");
//   exec("netstat -ano | findstr :3000", (err, stdout, stderr) => {
//     if (err) {
//       console.log("FindIfPortIsListening error", err);
//       logger.info("FindIfPortIsListening error: ", err);
//       return;
//     }

//     if (stdout) {
//       console.log("FindIfPortIsListening stdout", stdout);
//       logger.info("FindIfPortIsListening stdout: ", stdout);
//       if (stdout.length) {
//         const pid = stdout.split("LISTENING")[1].trim();
//         console.log("pid", pid);
//         killPort(pid);
//       }
//       return;
//     }

//     if (stderr) {
//       console.log("FindIfPortIsListening stderr", stderr);
//       logger.info("FindIfPortIsListening stderr: ", stderr);
//       return;
//     }
//   });
// };

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    console.log("window closed");
    mainWindow.webContents
      .send("sendDataBackToElectron")
    ipcMain.once("sum-reply", (event, sum) => {
      doJobWithResult(sum);
    });
    // const value = ipcRenderer.sendSync('sendDataBackToElectron')
    // console.log("ipcRenderer value", value);

    // app.quit();
  }
});

app.on("activate", function () {
  if (mainWindow === null) createWindow();
});
