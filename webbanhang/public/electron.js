const path = require("path");
const {
  app,
  BrowserWindow,
  nativeImage,
  Menu,
  Tray,
  ipcMain,
  ipcRenderer,
  dialog,
  Notification,
} = require("electron");
const isDev = require("electron-is-dev");
const ipc = require("electron").ipcRenderer;
let flag = false;
let appIcon;
const isMac = process.platform === "darwin";
const template = [
  // { role: 'appMenu' }
  ...(isMac
    ? [
        {
          label: app.name,
          submenu: [
            { role: "about" },
            { type: "separator" },
            { role: "services" },
            { type: "separator" },
            { role: "hide" },
            { role: "hideOthers" },
            { role: "unhide" },
            { type: "separator" },
            { role: "quit" },
          ],
        },
      ]
    : []),
  // { role: 'fileMenu' }
  {
    label: "File",
    submenu: [
      isMac ? { role: "close" } : { role: "quit" },
      {
        label: "Cart ",
        click: () => {
          console.log("hello");
          createWin();
        },
      },
    ],
  },
  // { role: 'editMenu' }
  {
    label: "Edit",
    submenu: [
      { role: "undo" },

      { role: "redo" },
      { type: "separator" },
      { role: "cut" },
      { role: "copy" },
      { role: "paste" },
      ...(isMac
        ? [
            { role: "pasteAndMatchStyle" },
            { role: "delete" },
            { role: "selectAll" },
            { type: "separator" },
            {
              label: "Speech",
              submenu: [{ role: "startSpeaking" }, { role: "stopSpeaking" }],
            },
          ]
        : [
            { role: "delete" },
            { type: "separator" },
            { role: "selectAll" },
            {
              label: "Setting",
              click: () => {
                dialog.showSaveDialogSync();
              },
            },
          ]),
    ],
  },
  // { role: 'viewMenu' }
  {
    label: "View",
    submenu: [
      { role: "reload" },
      { role: "forceReload" },
      { role: "toggleDevTools" },
      { type: "separator" },
      { role: "resetZoom" },
      { role: "zoomIn" },
      { role: "zoomOut" },
      { type: "separator" },
      { role: "togglefullscreen" },
    ],
  },
  // { role: 'windowMenu' }
  {
    label: "Window",
    submenu: [
      { role: "minimize" },
      { role: "zoom" },
      ...(isMac
        ? [
            { type: "separator" },
            { role: "front" },
            { type: "separator" },
            { role: "window" },
          ]
        : [{ role: "close" }]),
    ],
  },
  {
    role: "Help",
    submenu: [
      {
        label: "Learn More",
        click: async () => {
          const { shell } = require("electron");
          await shell.openExternal("https://electronjs.org");
        },
      },
      {
        label: "Shop ",
        click: async () => {
          console.log("Hello");
          const { canceled, filePaths } = await dialog.showOpenDialog();
          if (canceled) {
            return;
          } else {
            /*  const { shell } = require("electron");
            await shell.openExternal("https://facebook.com/qtn.kaca"); */
            return filePaths[0];
          }
          /* const { shell } = require("electron");
          await shell.openExternal("https://facebook.com/qtn.kaca"); */
        },
      },
    ],
  },
];
const createWin = () => {
  const winCart = new BrowserWindow({
    width: 500,
    height: 300,

    webPreferences: {
      nodeIntegration: true,
    },
  });
  winCart.loadURL(
    isDev
      ? "http://localhost:3006/#/cart"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  /*  ipcMain.on("openChildWindow", (event, arg) => {
    winCart.show();
  }); */
};
if (process.platform === "win32") {
  app.setAppUserModelId('Shop App');
}
app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 1050,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadURL(
    isDev
      ? "http://localhost:3006"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  win.on("close", (e) => {
    e.preventDefault();
    win.hide();
  });

  //Tray icon
  const icon = path.join(__dirname, "/logo192.png");
  const trayIcon = nativeImage.createFromPath(icon);
  appIcon = new Tray(trayIcon.resize({ width: 16 }));
  const contextMenu = Menu.buildFromTemplate([
    {
      label: "Show app",
      click: () => {
        win.show();
        console.log("click show");
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
  appIcon.setToolTip("Shop App");
  appIcon.addListener("click", () => {
    new Notification({ title: "", body: "App is running" }).show();
    win.show();
  });
  appIcon.setContextMenu(contextMenu);
});
app.on("window-all-closed", () => {});
app.requestSingleInstanceLock();
const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
