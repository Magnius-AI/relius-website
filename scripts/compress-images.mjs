import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const publicDir = join(rootDir, 'public', 'images');

async function getFiles(dir) {
  const files = [];
  const items = await readdir(dir, { withFileTypes: true });

  for (const item of items) {
    const path = join(dir, item.name);
    if (item.isDirectory()) {
      files.push(...await getFiles(path));
    } else if (item.name.endsWith('.png') || item.name.endsWith('.jpg') || item.name.endsWith('.jpeg')) {
      files.push(path);
    }
  }
  return files;
}

async function compressImage(inputPath) {
  const stats = await stat(inputPath);
  const originalSize = stats.size;
  const filename = basename(inputPath);
  const dir = dirname(inputPath);

  // Create WebP version
  const webpPath = inputPath.replace(/\.(png|jpe?g)$/i, '.webp');

  try {
    // Compress PNG/JPG in place (quality 80, resize if > 1920px wide)
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    let pipeline = image;

    // Resize if too large (max 1920px width for blog images, 800px for illustrations)
    const maxWidth = inputPath.includes('blog') ? 1920 : 800;
    if (metadata.width > maxWidth) {
      pipeline = pipeline.resize(maxWidth, null, { withoutEnlargement: true });
    }

    // Compress based on format
    if (inputPath.endsWith('.png')) {
      await pipeline
        .png({ quality: 80, compressionLevel: 9 })
        .toFile(inputPath + '.tmp');
    } else {
      await pipeline
        .jpeg({ quality: 80 })
        .toFile(inputPath + '.tmp');
    }

    // Also create WebP version (much smaller)
    pipeline = sharp(inputPath);
    if (metadata.width > maxWidth) {
      pipeline = pipeline.resize(maxWidth, null, { withoutEnlargement: true });
    }
    await pipeline
      .webp({ quality: 80 })
      .toFile(webpPath);

    // Replace original with compressed version
    const { rename, unlink } = await import('fs/promises');
    await unlink(inputPath);
    await rename(inputPath + '.tmp', inputPath);

    const newStats = await stat(inputPath);
    const webpStats = await stat(webpPath);
    const newSize = newStats.size;
    const webpSize = webpStats.size;

    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    const webpSavings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);

    console.log(`✓ ${filename}`);
    console.log(`  PNG: ${formatSize(originalSize)} → ${formatSize(newSize)} (${savings}% smaller)`);
    console.log(`  WebP: ${formatSize(webpSize)} (${webpSavings}% smaller than original)`);

    return { original: originalSize, compressed: newSize, webp: webpSize };
  } catch (err) {
    console.error(`✗ ${filename}: ${err.message}`);
    return { original: originalSize, compressed: originalSize, webp: 0 };
  }
}

function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

async function main() {
  console.log('🖼️  Compressing images...\n');

  const files = await getFiles(publicDir);
  console.log(`Found ${files.length} images to process\n`);

  let totalOriginal = 0;
  let totalCompressed = 0;
  let totalWebp = 0;

  for (const file of files) {
    const result = await compressImage(file);
    totalOriginal += result.original;
    totalCompressed += result.compressed;
    totalWebp += result.webp;
  }

  console.log('\n' + '='.repeat(50));
  console.log('📊 Summary:');
  console.log(`   Original total: ${formatSize(totalOriginal)}`);
  console.log(`   PNG compressed: ${formatSize(totalCompressed)} (${((totalOriginal - totalCompressed) / totalOriginal * 100).toFixed(1)}% saved)`);
  console.log(`   WebP total:     ${formatSize(totalWebp)} (${((totalOriginal - totalWebp) / totalOriginal * 100).toFixed(1)}% saved)`);
}

main().catch(console.error);
