//Deep Link
// Modules to control application life and create native browser window
/* const { app, BrowserWindow, ipcMain, shell, dialog } = require("electron");
const path = require("path");
let mainWindow;
if (process.defaultApp) {
  if (process.argv.length >= 2) {
    app.setAsDefaultProtocolClient("electron-fiddle", process.execPath, [
      path.resolve(process.argv[1]),
    ]);
  }
} else {
  app.setAsDefaultProtocolClient("electron-fiddle");
}
const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) {
  app.quit();
} else {
  app.on("second-instance", (event, commandLine, workingDirectory) => {
    // Someone tried to run a second instance, we should focus our window.
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });
  // Create mainWindow, load the rest of the app, etc...
  app.whenReady().then(() => {
    createWindow();
  });
  app.on("open-url", (event, url) => {
    dialog.showErrorBox("Welcome Back", `You arrived from: ${url}`);
  });
}
function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  mainWindow.loadFile("./public/index.html");
}
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
// Handle window controls via IPC
ipcMain.on("shell:open", () => {
  const pageDirectory = __dirname.replace("app.asar", "app.asar.unpacked");
  const pagePath = path.join("file://", pageDirectory, "index.html");
  shell.openExternal(pagePath);
}); */
/* const { app, BrowserWindow } = require('electron')

let progressInterval

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('./public/prosessbar.html')

  const INCREMENT = 0.03
  const INTERVAL_DELAY = 100 // ms

  let c = 0
  progressInterval = setInterval(() => {
    // update progress bar to next value
    // values between 0 and 1 will show progress, >1 will show indeterminate or stick at 100%
    win.setProgressBar(c)

    // increment or reset progress bar
    if (c < 2) {
      c += INCREMENT
    } else {
      c = (-INCREMENT * 5) // reset to a bit less than 0 to show reset state
    }
  }, INTERVAL_DELAY)
}

app.whenReady().then(createWindow)

// before the app is terminated, clear both timers
app.on('before-quit', () => {
  clearInterval(progressInterval)
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
}) */
/* const { app, BrowserWindow } = require('electron')
const fs = require('fs')
const path = require('path')
function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('./public/prosessbar.html')

}
const fileName = 'recently-used.md'
fs.writeFile(fileName, 'Lorem Ipsum', () => {
  app.addRecentDocument(path.join(__dirname, fileName))
})
app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  app.clearRecentDocuments()
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
}) */
/* const { app, BrowserWindow, ipcMain, nativeImage, NativeImage } = require('electron')
const path = require('path')
const fs = require('fs')
const https = require('https')
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.loadFile('./public/index.html')
}

const iconName = path.join(__dirname, 'iconForDragAndDrop.png');
const icon = fs.createWriteStream(iconName);
// Create a new file to copy - you can also copy existing files.
fs.writeFileSync(path.join(__dirname, 'drag-and-drop-1.md'), '# First file to test drag and drop')
fs.writeFileSync(path.join(__dirname, 'drag-and-drop-2.md'), '# Second file to test drag and drop')
https.get('https://img.icons8.com/ios/452/drag-and-drop.png', (response) => {
  response.pipe(icon);
});
app.whenReady().then(createWindow)
ipcMain.on('ondragstart', (event, filePath) => {
  event.sender.startDrag({
    file: path.join(__dirname, filePath),
    icon: iconName,
  })
})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
}) */
const {
  app,
  BrowserWindow,
  ipcMain,
  nativeImage,
  NativeImage,
} = require("electron");
const path = require("path");
const fs = require("fs");
const https = require("https");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
     
    },
  })
  win.loadFile("./public/index.html");
}

const iconName = path.join(__dirname, "iconForDragAndDrop.png");
const icon = fs.createWriteStream(iconName);

// Create a new file to copy - you can also copy existing files.
fs.writeFileSync(
  path.join(__dirname, "drag-and-drop-1.md"),
  "# First file to test drag and drop"
);
fs.writeFileSync(
  path.join(__dirname, "drag-and-drop-2.md"),
  "# Second file to test drag and drop"
);

https.get("https://img.icons8.com/ios/452/drag-and-drop.png", (response) => {
  response.pipe(icon);
});

app.whenReady().then(createWindow);

ipcMain.on("ondragstart", (event, filePath) => {
  event.sender.startDrag({
    file: path.join(__dirname, filePath),
    icon: iconName,
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
//Online/offline event
/* const { app, BrowserWindow, BrowserView } = require("electron");
let onlineStatusWindow;
const createWindow = () => {
  onlineStatusWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });
  const view = new BrowserView();
  onlineStatusWindow.setBrowserView(view);
  view.setBounds({ x: 60, y: 70, width: 700, height: 300 });
  view.webContents.loadURL("https://facebook.com/QTN.KACA");
  //onlineStatusWindow.loadFile('./public/index.html')
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
app.setUserTasks([
  {
    program: process.execPath,
    arguments: "--new-window",
    iconPath: process.execPath,
    iconIndex: 0,
    title: "New Window",
    description: "Create a new window",
  },
]);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
 */
