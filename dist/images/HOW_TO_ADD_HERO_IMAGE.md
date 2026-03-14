You provided an image attachment that should be used as the hero background for the home page.

Current setup
- The hero component already uses `/images/hero.jpg` as the background image (see `src/components/Hero.astro`).

What you need to do
1. Save the attached image you uploaded to this workspace as `public/images/hero.jpg`.

If you have the image file locally (e.g., downloaded from the chat), copy it into the project:

PowerShell (Windows):

```powershell
# from the directory where you downloaded the image
Copy-Item -Path .\your-image-file.jpg -Destination .\public\images\hero.jpg
```

macOS / Linux:

```bash
cp /path/to/your-image-file.jpg public/images/hero.jpg
```

Alternative: if you have the image as a base64 string, you can use the provided Node script `scripts/save-base64.js` to write it to `public/images/hero.jpg`.

Run (paste base64 into stdin):

```bash
node scripts/save-base64.js > public/images/hero.jpg
```

Notes
- The hero already references `/images/hero.jpg` so once the file is in `public/images/hero.jpg` the site will display it.
- For best results, use a high-resolution image (1920×1080 or higher) and optimize to WebP if desired.
