import puppeteer from 'puppeteer';

// length of completed list
const completedLength = 4;

let browser;
let page;

beforeAll(async () => {
  /*
    You should hit the todos endpoint and count the number of completed.
    This way, you verify the frontend against the backend.

    Using a normal fetch will work just fine here.
  */

  browser = await puppeteer.launch({
    headless: false,
  });
  page = await browser.newPage();
  page.emulate({
    viewport: {
      width: 1200,
      height: 800,
    },
    userAgent: '',
  });
  await page.goto('http://localhost:3000');
});

describe('e2e test', () => {
  test('renders tiles from backend', async () => {
    await page.waitForSelector('.todo-tile');
    await page.waitForSelector('.false-todo');
  });

  test('tile toggle works properly', async () => {
    await page.waitForSelector('.toggleContainer');

    await page.click('#toggle');

    await page.waitForSelector('.true-todo');

    // $$ = querySelectorAll
    // - returns an array of all elements with the specified selector
    // (as opposed to $ = querySelector, returning the first occurance only)
    const tiles = await page.$$('.todo-tile');
    expect(tiles.length).toBe(completedLength);
  });
});

afterAll(async () => {
  console.log('Finished e2e test');
  //   browser.close();
});
