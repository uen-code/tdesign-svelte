import fs from 'fs';
import {promisify} from 'util';

// 将 fs 的方法转换为 promise 形式
const readdirAsync = promisify(fs.readdir);
const statAsync = promisify(fs.stat);
const rmdirAsync = promisify(fs.rmdir);
const unlinkAsync = promisify(fs.unlink);

// 在构建后删除除了 js 目录以外的所有内容
const clean = () => {
  return {
    name: 'afterBuild',
    async writeBundle() {
      // 指定要保留的目录
      const directoryToKeep = 'js';

      // 指定要删除的目录
      const baseDirectory = 'components/_common';
      const files = await readdirAsync(baseDirectory);

      // 删除目录
      await Promise.all(
        files.map(async (file) => {
          const fullPath = `${baseDirectory}/${file}`;
          const stats = await statAsync(fullPath);

          if (file !== directoryToKeep) {
            if (stats.isDirectory()) {
              await rmdirAsync(fullPath, {recursive: true});
            } else {
              await unlinkAsync(fullPath);
            }
          }
        })
      );
    }
  }
}

export default clean