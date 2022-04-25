const path = require("path");
const {
  app,
  BrowserWindow,
  ipcMain,
  Menu,
  Tray,
  ipcRenderer,
  nativeImage,
} = require("electron");
const isDev = require("electron-is-dev");
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
          winSetting.show();
        },
      },
      { type: "separator" },
      {
        label: "Quit",
        accelerator: "CmdOrCtrl+Q",
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

let winSetting;
const createWin = () => {
 const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    show: true,
  });
  winImage = new BrowserWindow({
    width: 500,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    show: false,
  });
  winSetting = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    show: false,
  });

  win.loadFile("/public/index.html");
  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "/src/index.html")}`
  );

  winImage.loadFile("/public/index.html");
  winImage.loadURL(
    isDev
      ? "http://localhost:3000/image"
      : `file://${path.join(__dirname, "/src/index.html")}`
  );

  winSetting.loadFile("/public/index.html");
  winSetting.loadURL(
    isDev
      ? "http://localhost:3000/setting"
      : `file://${path.join(__dirname, "/src/index.html")}`
  );
  if (isDev) {
    winImage.webContents.openDevTools({
      mode: "detach",
    });
    /* win.webContents.openDevTools({
      mode: "detach",
    }); */
  }
  win.on("close", (e) =>{
    e.preventDefault();
    win.hide();
  })
  winImage.on("close", (e) => {
    e.preventDefault();
    winImage.hide();
  });
  winSetting.on("close",(e)=>{
    e.preventDefault();
  })
  winSetting.on("close",()=>{
    //winSetting.destroy();
    winSetting.hide();
  })
  const icon = path.join(__dirname, "/logo192.png");
  const trayIcon = nativeImage.createFromPath(icon);
  appIcon = new Tray(trayIcon.resize({ width: 16 }));
  console.log(isDev);
  const contextMenu = Menu.buildFromTemplate([
    {
      label: "Show app",
      click: () => {
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
};
app.on("ready", () => {
  createWin();
});
ipcMain.on("show-image", (e, arg) => {
  winImage.show();
  winImage.webContents.send("image", arg);
});
ipcMain.on('open-settings',(e)=>{
  winSetting.show();
})
app.on("window-all-closed", () => {});

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
