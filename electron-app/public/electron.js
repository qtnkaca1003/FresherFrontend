const path = require("path");
const {
  app,
  BrowserWindow,
  ipcMain,
  Menu,
  Tray,
  nativeImage,
  nativeTheme,
  ipcRenderer,
} = require("electron");
const isDev = require("electron-is-dev");
const fs = require("fs");
const https = require("https");
app.disableHardwareAcceleration()
/* const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("./public/index.html");

  ipcMain.handle("dark-mode:toggle", () => {
    if (nativeTheme.shouldUseDarkColors) {
      nativeTheme.themeSource = "light";
    } else {
      nativeTheme.themeSource = "dark";
    }
    return nativeTheme.shouldUseDarkColors;
  });

  ipcMain.handle("dark-mode:system", () => {
    nativeTheme.themeSource = "system";
  });
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
}); */

/* app.whenReady().then(async () => {
  const worker = new BrowserWindow({
    show: false,
    webPreferences: { nodeIntegration: true, contextIsolation: false },
  });
  await worker.loadFile("./public/worker.html");
  const mainWindow = new BrowserWindow({
    webPreferences: { nodeIntegration: true, contextIsolation: false },
  });
  mainWindow.loadFile("./public/app.html");
  ipcMain.on("request-worker-channel", (event) => {
    // For security reasons, let's make sure only the frames we expect can
    // access the worker.
    if (event.senderFrame === mainWindow.webContents.mainFrame) {
      // Create a new channel ...
      const { port1, port2 } = new MessageChannelMain();
      // ... send one end to the worker ...
      worker.webContents.postMessage("new-client", null, [port1]);
      // ... and the other end to the main window.
      event.senderFrame.postMessage("provide-worker-channel", null, [port2]);
      // Now the main window and the worker can communicate with each other
      // without going through the main process!
    }
  });
  if (isDev) {
    worker.webContents.openDevTools();
    mainWindow.webContents.openDevTools();
  }
}); */

//const { ipcRenderer } = require("electron/renderer");
//const isMac = process.platform === "darwin";

const template = [
  {
    label: "File",
    submenu: [
      { label: "New Window" },
      {
        label: "Settings",
        accelerator: "CmdOrCtrl+,",
        click: () => {
          createSetting();
        },
      },
      { type: "separator" },
      {
        label: "Hide",
        accelerator: "CmdOrCtrl+H",
        click: () => {
          win.hide();
        },
      },
    ],
  },
  {
    label: "Edit",
    submenu: [
      { label: "Menu Item 1" },
      { label: "Menu Item 2" },
      { label: "Menu Item 3" },
    ],
  },
];
let appIcon = null;
let winImage;
let win;
let winSetting;
/* const createImage = () => {
  winImage = new BrowserWindow({
    width: 500,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    show: false,
  });
  winImage.loadFile("/public/index.html");
  winImage.loadURL(
    isDev
      ? "http://localhost:3000/image"
      : `file://${path.join(__dirname, "/src/index.html")}`
  );
  if (isDev) {
    winImage.webContents.openDevTools();
  }
}; */
const createWindow = () => {
  const onlineStatusWindow = new BrowserWindow({
    width: 400,
    height: 100
  })

  onlineStatusWindow.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})
/* const createWin = () => {
  createImage();
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },

    show: true,
  });
  win.webContents.on(
    "select-bluetooth-device",
    (event, deviceList, callback) => {
      event.preventDefault();
      if (deviceList && deviceList.length > 0) {
        callback(deviceList[0].deviceId);
      }
    }
  );

  win.loadFile("/public/index.html");
  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "/src/index.html")}`
  );

  if (isDev) {
    win.webContents.openDevTools({
      mode: "detach",
    });
  }
  ipcMain.on("dark-mode:toggle", () => {
    if (nativeTheme.shouldUseDarkColors) {
      nativeTheme.themeSource = "light";
    } else {
      nativeTheme.themeSource = "dark";
    }
    return nativeTheme.shouldUseDarkColors;
  });
  win.on("close", (e) => {
    e.preventDefault();
    win.hide();
    winImage.destroy();
  });
  const icon = path.join(__dirname, "/logo192.png");
  const trayIcon = nativeImage.createFromPath(icon);
  appIcon = new Tray(trayIcon.resize({ width: 16 }));
  console.log(isDev);
  const contextMenu = Menu.buildFromTemplate([
    {
      label: "Show app",
      accelerator: "CmdOrCtrl+S",
      click: () => {
        createImage();
        win.show();
      },
    },
    {
      label: "Quit App",
      click: () => {
        win.destroy();
        app.quit();
      },
    },
  ]);
  appIcon.setToolTip("App test");
  appIcon.setTitle("App test");
  appIcon.setContextMenu(contextMenu);
}; */
/* const createSetting = () => {
  winSetting = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    show: true,
  });
  winSetting.loadFile("/public/index.html");
  winSetting.on("close", (e) => {
    e.preventDefault();
  });
  winSetting.on("close", () => {
    //winSetting.destroy();
    winSetting.hide();
  });
  winSetting.loadURL(
    isDev
      ? "http://localhost:3000/setting"
      : `file://${path.join(__dirname, "/src/index.html")}`
  );
}; */
//const iconName = path.join(__dirname, "iconForDragAndDrop.png");
//const icon = fs.createWriteStream(iconName);

// Create a new file to copy - you can also copy existing files.
/* fs.writeFileSync(
  path.join(__dirname, "drag-and-drop-1.md"),
  "# First file to test drag and drop"
);
fs.writeFileSync(
  path.join(__dirname, "drag-and-drop-2.md"),
  "# Second file to test drag and drop"
);

https.get("https://img.icons8.com/ios/452/drag-and-drop.png", (response) => {
  response.pipe(icon);
});*/
/* app.whenReady().then(()=>{
  win = new BrowserWindow({ webPreferences: { offscreen: true } })
  win.loadURL('https://github.com')
  win.webContents.on('paint', (event, dirty, image) => {
    fs.writeFileSync('ex.png', image.toPNG())
  })
  win.webContents.setFrameRate(30)
  console.log(`The screenshot has been successfully saved to ${path.join(process.cwd(), 'ex.png')}`)
});  */

/* ipcMain.on("ondragstart", (event, filePath) => {
  event.sender.startDrag({
    file: path.join(__dirname, filePath),
    icon: iconName,
  });
}); 
 app.on("ready", () => {
  createWin();
}); 
ipcMain.on("show-image", (e, arg) => {
  winImage.show();
  winImage.webContents.send("image", arg);
});
ipcMain.on("open-settings", (e) => {
  winSetting.show();
});
ipcMain.on("set-title", (e, arg) => {
  win.webContents.send("title", arg);
}); 
 */
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    //createWindow()
  }
})
const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
