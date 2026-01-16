const fs = require('fs');
const path = require('path');

const outDir = path.join(process.cwd(), 'out');
const docsDir = path.join(process.cwd(), 'docs');

// Remove docs directory if it exists
if (fs.existsSync(docsDir)) {
  fs.rmSync(docsDir, { recursive: true, force: true });
}

// Copy out to docs
if (fs.existsSync(outDir)) {
  fs.cpSync(outDir, docsDir, { recursive: true });
  console.log('✓ Copied build output from "out" to "docs"');
  
  // Copy .nojekyll to docs
  const nojekyllFile = path.join(process.cwd(), '.nojekyll');
  if (fs.existsSync(nojekyllFile)) {
    fs.copyFileSync(nojekyllFile, path.join(docsDir, '.nojekyll'));
    console.log('✓ Copied .nojekyll to docs');
  }
} else {
  console.error('✗ Build output directory "out" not found. Run "next build" first.');
  process.exit(1);
}
