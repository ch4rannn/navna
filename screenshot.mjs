import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const projects = [
  { slug: "structzone", url: "https://www.structzone.com/" },
  { slug: "mamta-tapri-udyog", url: "https://mamtatapriudyog.com.np/" },
  { slug: "new-upasana-traders", url: "https://newupasanatraders.com.np/" },
  { slug: "zoviq", url: "https://zoviq.pages.dev/" },
  { slug: "us-household", url: "https://us-household.chiranjibisah12345.workers.dev/" },
  { slug: "thrief", url: "https://tstore-4li.pages.dev/" },
  { slug: "quickpaste", url: "https://quickpaste.pages.dev/" },
  { slug: "dental-website", url: "https://dentist-9u3.pages.dev/" }
];

const dir = path.join(process.cwd(), 'public', 'images', 'projects');
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

(async () => {
  const browser = await puppeteer.launch({ 
    headless: "new",
    executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe"
  });
  for (const project of projects) {
    console.log(`Processing ${project.slug}...`);
    try {
      const page = await browser.newPage();
      await page.setViewport({ width: 1280, height: 800 });
      // Go to URL and wait until no new network connections are made for 500ms
      await page.goto(project.url, { waitUntil: 'networkidle2', timeout: 30000 });
      
      // Wait an extra 2 seconds for any CSS animations or slow images to load
      await new Promise(r => setTimeout(r, 2000));
      
      const screenshotPath = path.join(dir, `${project.slug}.png`);
      // Take screenshot of the top of the page, cropped to viewport
      await page.screenshot({ path: screenshotPath, clip: { x: 0, y: 0, width: 1280, height: 800 } });
      console.log(`Saved screenshot to ${screenshotPath}`);
      await page.close();
    } catch (e) {
      console.error(`Failed to process ${project.slug}:`, e);
    }
  }
  await browser.close();
})();
