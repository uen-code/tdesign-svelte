import { rmdirSync } from 'fs';

export default function deleteDirectory(options) {
  return {
    name: 'delete-directory',
    generateBundle() {
      const { directoryPath } = options;
      rmdirSync(directoryPath, { recursive: true });
    },
  };
}