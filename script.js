import fs from 'fs-extra';
import path from 'path';

const sourceDir = path.resolve('C:/Work/animation-ship-ui/dist');
const targetDir = path.resolve(
  'C:/Work/prime-x/node_modules/animation-ship-components/dist'
);

async function copyDistFolder() {
  try {
    // Remove the target directory if it exists
    if (await fs.pathExists(targetDir)) {
      await fs.remove(targetDir);
      console.log(`Removed existing directory: ${targetDir}`);
    }

    // Copy the source directory to the target directory
    await fs.copy(sourceDir, targetDir);
    console.log(`Copied ${sourceDir} to ${targetDir}`);
  } catch (err) {
    console.error('Error copying dist folder:', err);
  }
}

copyDistFolder();
