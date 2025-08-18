import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Cấu hình dựa trên report của bạn
const imageConfigs = {
      // Avatar (hiển thị 245px, gốc 2432px)
      'avatar.png': [
            { width: 245, suffix: '245w' },
            { width: 490, suffix: '490w' }, // 2x cho retina
            { width: 735, suffix: '735w' }  // 3x cho retina
      ],

      // Tech icons (hiển thị 20px, gốc 800-2560px) 
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
            { width: 13, suffix: '13w' },
            { width: 26, suffix: '26w' },
            { width: 39, suffix: '39w' }
      ],

      // Project screenshots (hiển thị ~435px, gốc ~1900px)
      'novelnest-homepage.webp': [
            { width: 432, suffix: '432w' },
            { width: 864, suffix: '864w' },
            { width: 1296, suffix: '1296w' }
      ],
      'codeguru-homepage.webp': [
            { width: 435, suffix: '435w' },
            { width: 870, suffix: '870w' },
            { width: 1305, suffix: '1305w' }
      ]
};

async function generateImages() {
      const publicDir = path.join(process.cwd(), 'public');
      const assetsDir = path.join(publicDir, 'assets');

      console.log('🖼️  Generating responsive images...\n');

      for (const [filename, sizes] of Object.entries(imageConfigs)) {
            const inputPath = path.join(assetsDir, filename);

            if (!fs.existsSync(inputPath)) {
                  console.log(`⚠️  Không tìm thấy: ${filename}`);
                  continue;
            }

            console.log(`📸 Xử lý: ${filename}`);

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
                        console.log(`  ✅ ${name}-${size.suffix}${ext} (${sizeKB}KB)`);
                  } catch (error) {
                        console.error(`  ❌ Lỗi: ${error.message}`);
                  }
            }
            console.log('');
      }

      console.log('🎉 Hoàn thành! Giờ có thể cập nhật component với srcset.');
}

generateImages().catch(console.error);