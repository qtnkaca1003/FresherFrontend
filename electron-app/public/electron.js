const path = require("path");
const {
  app,
  BrowserWindow,
  ipcMain,
  dialog,
  Menu,
  Tray,
  nativeImage,
} = require("electron");
const isDev = require("electron-is-dev");
const isMac = process.platform === "darwin";

//menu
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
    submenu: [isMac ? { role: "close" } : { role: "quit" }],
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
        : [{ role: "delete" }, { type: "separator" }, { role: "selectAll" }]),
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
    role: "help",
    submenu: [
      {
        label: "Learn More",
        click: async () => {
          const { shell } = require("electron");
          await shell.openExternal("https://electronjs.org");
        },
      },
      {
        label: "More",
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
let appIcon = null;

async function handleFileOpen() {
  const { canceled, filePaths } = await dialog.showOpenDialog();
  if (canceled) {
    return;
  } else {
    return filePaths[0];
  }
}

const win = new BrowserWindow({
  width: 800,
  height: 600,
  webPreferences: {
    nodeIntegration: true,
    //preload: path.join(__dirname, "/preload.js"),
  },
  show: true
});

win.whenReady().then(() => {
  win.loadFile("/public/index.html");
  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "/public/index.html")}`
  );
  if (isDev) {
    win.webContents.openDevTools({
      mode: "detach",
    });
  }
  //ipcMain.handle("dialog:openFile", handleFileOpen);
  //createWindow();
  /* app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });  */
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
        app.quit();
      },
    },
  ]);
  appIcon.setToolTip("Shop App");
  appIcon.setTitle("Shop App");
  appIcon.setContextMenu(contextMenu);
});
/* app.on("will-finish-launching", () => {
  app.quit();
}); */
app.on("window-all-closed", () => {
  win.hide();
});
const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
