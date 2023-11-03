const { join } = require('path');
const { app, BrowserWindow, ipcMain } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: join(__dirname, 'preload.js'),
    }
  });

  win.loadFile(join(__dirname, "..", ".." ,  "client" , 'index.html'));
};

const readyPromise = app.whenReady();

readyPromise.then(createWindow);

readyPromise.then(() => {
  app.on('activate', () => {
    // 无窗口且运行
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
    console.log('测试 ===========》')
  });
});

readyPromise.then(() => ipcMain.handle('ping', () => 'pong')),

app.on('window-all-closed', () => {
  // 关闭进程
  if (process.platform === 'darwin') app.quit();
});