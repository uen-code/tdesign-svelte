export default function addImportPlugin() {
  return {
    name: 'add-import-plugin',
    transform(code, id) {
      // 确保只在输入文件中添加 import 语句
      if (id.endsWith('index.js')) {
      console.log('Matched:', id); // 调试输出
        code = `import './index.css';\n${code}`;
      }
      return code;
    }
  };
}