import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imageConfigs = {
      'avatar.png': [
            { width: 245, suffix: '245w' },
            { width: 490, suffix: '490w' },
            { width: 735, suffix: '735w' }
      ],

      'reactjs.webp': [
            { width: 20, suffix: '20w' },
            { width: 40, suffix: '40w' },
            { width: 60, suffix: '60w' }
      ],
      'nextjs.webp': [
            { width: 20, suffix: '20w' },
            { width: 40, suffix: '40w' },
            { width: 60, suffix: '60w' }
      ],
      'typescript.webp': [
            { width: 20, suffix: '20w' },
            { width: 40, suffix: '40w' },
            { width: 60, suffix: '60w' }
      ],
      'nodejs.webp': [
            { width: 20, suffix: '20w' },
            { width: 40, suffix: '40w' },
            { width: 60, suffix: '60w' }
      ],
      'mongodb.webp': [
            { width: 20, suffix: '20w' },
            { width: 40, suffix: '40w' },
            { width: 60, suffix: '60w' }
      ],
      'tailwindcss.webp': [
            { width: 20, suffix: '20w' },
            { width: 40, suffix: '40w' },
            { width: 60, suffix: '60w' }
      ],
      'figma.webp': [
            { width: 20, suffix: '20w' },
            { width: 40, suffix: '40w' },
            { width: 60, suffix: '60w' }
      ],
      'expressjs.webp': [
            { width: 20, suffix: '20w' },
            { width: 40, suffix: '40w' },
            { width: 60, suffix: '60w' }
      ],
      'git.webp': [
            { width: 20, suffix: '20w' },
            { width: 40, suffix: '40w' },
            { width: 60, suffix: '60w' }
      ],
      'postman.webp': [
            { width: 20, suffix: '20w' },
            { width: 40, suffix: '40w' },
            { width: 60, suffix: '60w' }
      ],
      'novelnest-homepage.webp': [
            { width: 432, suffix: '432w' },
            { width: 864, suffix: '864w' },
            { width: 1296, suffix: '1296w' }
      ],
      'codeguru-homepage.webp': [
            { width: 435, suffix: '435w' },
            { width: 870, suffix: '870w' },
            { width: 1305, suffix: '1305w' }
      ],
      'redux.webp': [
            { width: 20, suffix: '20w' },
            { width: 40, suffix: '40w' },
            { width: 60, suffix: '60w' }
      ],
};

async function generateImages() {
      const publicDir = path.join(process.cwd(), 'public');
      const assetsDir = path.join(publicDir, 'assets');

      for (const [filename, sizes] of Object.entries(imageConfigs)) {
            const inputPath = path.join(assetsDir, filename);

            if (!fs.existsSync(inputPath)) {
                  continue;
            }

            const name = path.parse(filename).name;
            const ext = path.parse(filename).ext;

            for (const size of sizes) {
                  const outputPath = path.join(assetsDir, `${name}-${size.suffix}${ext}`);

                  try {
                        await sharp(inputPath)
                              .resize(size.width, null, {
                                    withoutEnlargement: true,
                                    fit: 'inside'
                              })
                              .toFile(outputPath);

                        const stats = fs.statSync(outputPath);
                        const sizeKB = Math.round(stats.size / 1024);
                  } catch (error) {
                        console.error(`Lỗi: ${error.message}`);
                  }
            }
      }
}

generateImages();