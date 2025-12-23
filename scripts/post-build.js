const fs = require('fs');
const path = require('path');

// After Next.js build, reorganize files to work with /me/ basePath
const outDir = path.join(__dirname, '../out');
const meDir = path.join(outDir, 'me');

// Create /me/ directory
if (!fs.existsSync(meDir)) {
  fs.mkdirSync(meDir, { recursive: true });
}

// Copy all files from out/ to out/me/
const files = fs.readdirSync(outDir);
files.forEach(file => {
  const srcPath = path.join(outDir, file);
  const destPath = path.join(meDir, file);

  // Skip the 'me' directory itself and index.txt
  if (file === 'me' || file === 'index.txt') return;

  // Copy file or directory
  if (fs.statSync(srcPath).isDirectory()) {
    // Copy directory recursively
    fs.cpSync(srcPath, destPath, { recursive: true });
  } else {
    // Copy file
    fs.copyFileSync(srcPath, destPath);
  }
});

console.log('✓ Files organized for /me/ basePath');
