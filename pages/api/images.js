const fs = require('fs/promises');
const path = require('path');

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const mainPath = path.join(
      process.cwd(),
      'public/images/product-images/main'
    );
    const thumbPath = path.join(
      process.cwd(),
      'public/images/product-images/thumb'
    );

    const mainImages = await fs.readdir(mainPath);
    const thumbImages = await fs.readdir(thumbPath);

    res.status(200).json({ mainImages, thumbImages });
  }
}
