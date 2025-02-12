import { expect, test } from '@playwright/test';
import { features } from '../../features/milo/columns.block.spec.js';
import { Columns } from '../../selectors/milo/columns.block.page.js';

let column;

test.describe('Milo Columns Block test suite', () => {
  test.beforeEach(async ({ page }) => {
    column = new Columns(page);
  });

  test(`${features[0].name},${features[0].tags}`, async ({ page, baseURL }) => {
    console.info(`[Test Page]: ${baseURL}${features[0].path}`);

    await test.step('step-1: Go to Columns block test page', async () => {
      await page.goto(`${baseURL}${features[0].path}`);
      await page.waitForLoadState('domcontentloaded');
      await expect(page).toHaveURL(`${baseURL}${features[0].path}`);
    });

    await test.step('step-2: Verify Columns block content/specs', async () => {
      const { data } = features[0];
      expect(await column.verifyColumns('columns', data)).toBeTruthy();
    });
  });

  test(`${features[1].name},${features[1].tags}`, async ({ page, baseURL }) => {
    console.info(`[Test Page]: ${baseURL}${features[1].path}`);

    await test.step('step-1: Go to Columns block test page', async () => {
      await page.goto(`${baseURL}${features[1].path}`);
      await page.waitForLoadState('domcontentloaded');
      await expect(page).toHaveURL(`${baseURL}${features[1].path}`);
    });

    await test.step('step-2: Verify Columns(contained) block content/specs', async () => {
      const { data } = features[1];
      expect(await column.verifyColumns('columns(contained)', data)).toBeTruthy();
    });
  });

  test(`${features[2].name},${features[2].tags}`, async ({ page, baseURL }) => {
    console.info(`[Test Page]: ${baseURL}${features[2].path}`);

    await test.step('step-1: Go to Columns block test page', async () => {
      await page.goto(`${baseURL}${features[2].path}`);
      await page.waitForLoadState('domcontentloaded');
      await expect(page).toHaveURL(`${baseURL}${features[2].path}`);
    });

    await test.step('step-2: Verify Columns(contained,middle) block content/specs', async () => {
      const { data } = features[2];
      expect(await column.verifyColumns('columns(contained,middle)', data)).toBeTruthy();
    });
  });

  test(`${features[3].name},${features[3].tags}`, async ({ page, baseURL }) => {
    console.info(`[Test Page]: ${baseURL}${features[3].path}`);

    await test.step('step-1: Go to Columns block test page', async () => {
      await page.goto(`${baseURL}${features[3].path}`);
      await page.waitForLoadState('domcontentloaded');
      await expect(page).toHaveURL(`${baseURL}${features[3].path}`);
    });

    await test.step('step-2: Verify Columns(table) block content/specs', async () => {
      const { data } = features[3];
      expect(await column.verifyColumns('columns(table)', data)).toBeTruthy();
    });
  });

  test(`${features[4].name},${features[4].tags}`, async ({ page, baseURL }) => {
    console.info(`[Test Page]: ${baseURL}${features[4].path}`);

    await test.step('step-1: Go to Columns block test page', async () => {
      await page.goto(`${baseURL}${features[4].path}`);
      await page.waitForLoadState('domcontentloaded');
      await expect(page).toHaveURL(`${baseURL}${features[4].path}`);
    });

    await test.step('step-2: Verify Columns(contained,table) block content/specs', async () => {
      const { data } = features[4];
      expect(await column.verifyColumns('columns(contained,table)', data)).toBeTruthy();
    });
  });
});
