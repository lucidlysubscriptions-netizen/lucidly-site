import { chromium } from 'playwright'

const target = process.argv[2] || 'header'
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await page.goto('http://localhost:4173/', { waitUntil: 'networkidle' })
const el = await page.$(target)
await el.screenshot({ path: 'nav-shot.png' })
await browser.close()
console.log('saved nav-shot.png of', target)
