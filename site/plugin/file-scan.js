import fs from 'fs';
import path from 'path';

const rootPath = path.resolve(__dirname, '../src/components'); // 替换为你的文件夹路径

/** 读取config.json */
function getConfigs(folderPath) {
  let configs = {};
  fs.readdirSync(folderPath).forEach((file) => {
    const filePath = path.join(folderPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      // 递归遍历子文件夹
      configs = { ...configs, ...getConfigs(filePath) };
    } else if (file === 'config.json') {
      // 读取config.json文件内容并放入数组
      const configFileContent = fs.readFileSync(filePath, 'utf-8');
      const config = JSON.parse(configFileContent);
      configs = { ...configs, ...config };
    }
  });
  return configs;
}

export default function viteReadFilePlugin() {
  return {
    name: 'my-plugin',
    config(config) {
      // 定义全局变量
      const configs = getConfigs(rootPath);
      for (let key in configs) {
        if (configs.hasOwnProperty(key)) {
          let config = configs[key];
          // 根据组件path获取code
          config.content = fs.readFileSync(config.path, 'utf-8');
        }
      }
      config.define = {
        MY_GLOBAL_VAR: JSON.stringify(configs),
      };
    },
  };
}
