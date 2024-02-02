import fs from 'fs/promises';

export function readDatabase(filePath) {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await fs.readFile(filePath, 'utf-8');
      resolve(data);
    } catch (error) {
      reject(new Error('Cannot load the database'));
    }
  });
}
