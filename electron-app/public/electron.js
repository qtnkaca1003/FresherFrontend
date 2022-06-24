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
  net,
  dialog,
  session,
  clipboard,
} = require("electron");
const isDev = require("electron-is-dev");
const { allowedNodeEnvironmentFlags } = require("process");

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
const isMac = process.platform === "darwin";
const template = [
  {
    label: "File",
    submenu: [
      { label: "New Window" },
      {
        label: "Settings",
        accelerator: "CmdOrCtrl+ T,",
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
      {
        label: "Get Window",
        click: () => {
          const allWIndow = BrowserWindow.getAllWindows();
          //console.log(allWIndow);
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
const createImage = () => {
  winImage = new BrowserWindow({
    width: 500,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    show: false,
  });
  winImage.on("close", (e) => {
    e.preventDefault();
    winImage.hide();
  });
  winImage.loadFile("/public/index.html");
  winImage.loadURL(
    isDev
      ? "http://localhost:3000/image"
      : `file://${path.join(__dirname, "/src/index.html")}`
  );
  /* if (isDev) {
    winImage.webContents.openDevTools();
  } */
};
/* const createWindow = () => {
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
}) */
const createWin = () => {
  createImage();
  //child = new BrowserWindow({width: 600, height:400})
  win = new BrowserWindow({
    width: 800,
    height: 600,
    //frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },

    show: true,
  });
  const contents = win.webContents;
  //console.log("contents nè: ", contents);

  //win.setBackgroundColor('blueviolet')
  /* win.webContents.on(
    "select-bluetooth-device",
    (event, deviceList, callback) => {
      event.preventDefault();
      if (deviceList && deviceList.length > 0) {
        callback(deviceList[0].deviceId);
      }
    }
  ); */
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
  /* ipcMain.on("dark-mode:toggle", () => {
    if (nativeTheme.shouldUseDarkColors) {
      nativeTheme.themeSource = "light";
    } else {
      nativeTheme.themeSource = "dark";
    }
    return nativeTheme.shouldUseDarkColors;
  }); */
  win.on("close", (e) => {
    e.preventDefault();
    win.hide();
    winImage.destroy();
  });
  win.on("move", () => {
    //console.log("T move rồi nè");
  });
  win.on("moved", () => {
    //console.log("T đã move rồi nè");
  });
  win.on("enter-full-screen", () => {
    //console.log("mở full screen");
  });
  const icon = path.join(__dirname, "/logo192.png");
  const trayIcon = nativeImage.createFromPath(icon);
  appIcon = new Tray(trayIcon.resize({ width: 16 }));
  //console.log(isDev);
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
        winImage.destroy();
        app.quit();
      },
    },
  ]);
  appIcon.addListener("click", () => {
    win.show();
    createImage();
  });
  appIcon.setToolTip("App test");
  appIcon.setTitle("App test");
  appIcon.setContextMenu(contextMenu);
};
const createSetting = () => {
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
};
let options = {
  buttons: ["Cancel"],
  message: "No internet, quit app !!!",
};
app.on("ready", () => {
  const isOnline = net.isOnline();

  if (isOnline) {
    clipboard.write({
      text: "test",
      html: "<b>Hi</b>",
      rtf: "{\\rtf1\\utf8 text}",
      bookmark: " a title",
    });
    console.log(clipboard.readHTML());
    const vision = process.versions.electron;
    console.log(vision);
    createWin();
  } else {
    dialog.showMessageBox(options);
  }
});
app.on("browser-window-blur", () => {
  //console.log("T bị mờ nè");
});
app.on("browser-window-focus", () => {
  //console.log("T bị focus nè");
});
app.on("browser-window-created", () => {
  //console.log("T mới tạo cửa sổ mới nè");
});
app.on("session-created", (session) => {
  //console.log("session nè", session.netLog);
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
ipcMain.on("get-app-path",(e,arg)=>{
  e.sender.send('got-app-path', app.getAppPath())
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
  {
    program: process.execPath,
    arguments: "--new-window",
    iconPath: process.execPath,
    iconIndex: 0,
    title: "Open file",
    description: "Open new file",
    workingDirectory: "test",
  },
]);
///MACOS
/* app.on("activate", () => {
  console.log("active");
  if (BrowserWindow.getAllWindows().length === 0) {
    createWin();
  }
}); */
//app.whenReady().then(() => {});
app.on("quit", () => {
  console.log("Quit nè");
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
