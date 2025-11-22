import { test, expect } from '@playwright/test';

/**
 * Highsky Portfolio E2E Tests
 * 포트폴리오 웹사이트의 핵심 기능을 자동으로 테스트합니다.
 */

test.describe('포트폴리오 웹사이트 E2E 테스트', () => {

    // ================================
    // 1. 기본 페이지 로딩 테스트
    // ================================

    test('메인 페이지가 정상적으로 로딩된다', async ({ page }) => {
        await page.goto('/');

        // 타이틀 확인
        await expect(page).toHaveTitle(/Highsky/);

        // Hero 섹션이 보이는지 확인
        const hero = page.locator('.hero');
        await expect(hero).toBeVisible();

        // 주요 섹션들이 존재하는지 확인
        await expect(page.locator('#about')).toBeVisible();
        await expect(page.locator('#experience')).toBeVisible();
        await expect(page.locator('#projects')).toBeVisible();
        await expect(page.locator('#contact')).toBeVisible();
    });

    // ================================
    // 2. 다크/라이트 모드 테스트
    // ================================

    test('다크모드 토글이 정상 작동한다', async ({ page }) => {
        await page.goto('/');

        // 초기 상태 확인 (라이트 모드)
        await expect(page.locator('body')).toHaveAttribute('data-theme', 'light');

        // 토글 버튼 클릭
        const themeToggle = page.locator('#theme-toggle');
        await themeToggle.click();

        // 다크모드로 변경 확인
        await expect(page.locator('body')).toHaveAttribute('data-theme', 'dark');

        // localStorage에 저장되었는지 확인
        const savedTheme = await page.evaluate(() => localStorage.getItem('theme'));
        expect(savedTheme).toBe('dark');

        // 다시 클릭하여 라이트 모드로 복귀
        await themeToggle.click();
        await expect(page.locator('body')).toHaveAttribute('data-theme', 'light');
    });

    test('다크모드 설정이 페이지 새로고침 후에도 유지된다', async ({ page }) => {
        await page.goto('/');

        // 다크모드로 전환
        await page.locator('#theme-toggle').click();
        await expect(page.locator('body')).toHaveAttribute('data-theme', 'dark');

        // 페이지 새로고침
        await page.reload();

        // 다크모드가 유지되어야 함
        await expect(page.locator('body')).toHaveAttribute('data-theme', 'dark');
    });

    // ================================
    // 3. 반응형 디자인 테스트
    // ================================

    test('모바일 뷰에서 올바르게 표시된다', async ({ page }) => {
        // 모바일 뷰포트 설정 (iPhone 12)
        await page.setViewportSize({ width: 390, height: 844 });
        await page.goto('/');

        // 모바일 메뉴 토글이 보여야 함
        const mobileToggle = page.locator('.mobile-menu-toggle');
        await expect(mobileToggle).toBeVisible();

        // 데스크톱 네비게이션은 숨겨져야 함
        const desktopNav = page.locator('.desktop-nav');
        await expect(desktopNav).not.toBeVisible();
    });

    test('모바일 메뉴가 정상 작동한다', async ({ page }) => {
        await page.setViewportSize({ width: 390, height: 844 });
        await page.goto('/');

        const mobileToggle = page.locator('.mobile-menu-toggle');
        const mobileMenu = page.locator('.mobile-menu');

        // 초기에는 메뉴가 숨겨져 있어야 함
        await expect(mobileMenu).not.toHaveClass(/active/);

        // 토글 버튼 클릭
        await mobileToggle.click();

        // 메뉴가 열려야 함
        await expect(mobileMenu).toHaveClass(/active/);

        // 메뉴 항목 클릭 시 메뉴가 닫혀야 함
        await page.locator('.mobile-menu a[href="#about"]').click();
        await expect(mobileMenu).not.toHaveClass(/active/);
    });

    test('태블릿 뷰에서 올바르게 표시된다', async ({ page }) => {
        await page.setViewportSize({ width: 768, height: 1024 });
        await page.goto('/');

        // 메인 콘텐츠가 보여야 함
        await expect(page.locator('.hero')).toBeVisible();
        await expect(page.locator('#about')).toBeVisible();
    });

    test('데스크톱 뷰에서 올바르게 표시된다', async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 });
        await page.goto('/');

        // 데스크톱 네비게이션이 보여야 함
        const desktopNav = page.locator('.desktop-nav');
        await expect(desktopNav).toBeVisible();

        // 모바일 토글은 숨겨져야 함
        const mobileToggle = page.locator('.mobile-menu-toggle');
        await expect(mobileToggle).not.toBeVisible();
    });

    // ================================
    // 4. 네비게이션 및 스크롤 테스트
    // ================================

    test('네비게이션 링크가 올바른 섹션으로 스크롤된다', async ({ page }) => {
        await page.goto('/');

        // About 섹션으로 이동
        await page.click('a[href="#about"]');
        await page.waitForTimeout(500); // 스크롤 애니메이션 대기

        // About 섹션이 뷰포트에 있는지 확인
        const aboutSection = page.locator('#about');
        await expect(aboutSection).toBeInViewport();

        // Projects 섹션으로 이동
        await page.click('a[href="#projects"]');
        await page.waitForTimeout(500);

        const projectsSection = page.locator('#projects');
        await expect(projectsSection).toBeInViewport();

        // Contact 섹션으로 이동
        await page.click('a[href="#contact"]');
        await page.waitForTimeout(500);

        const contactSection = page.locator('#contact');
        await expect(contactSection).toBeInViewport();
    });

    // ================================
    // 5. 외부 링크 테스트
    // ================================

    test('모든 외부 링크가 새 탭에서 열린다', async ({ page }) => {
        await page.goto('/');

        // GitHub 링크 확인
        const githubLinks = page.locator('a[href*="github.com"]');
        const count = await githubLinks.count();

        for (let i = 0; i < count; i++) {
            const link = githubLinks.nth(i);
            await expect(link).toHaveAttribute('target', '_blank');
            await expect(link).toHaveAttribute('rel', /noopener/);
        }

        // LinkedIn 링크 확인
        const linkedinLinks = page.locator('a[href*="linkedin.com"]');
        const linkedinCount = await linkedinLinks.count();

        for (let i = 0; i < linkedinCount; i++) {
            const link = linkedinLinks.nth(i);
            await expect(link).toHaveAttribute('target', '_blank');
            await expect(link).toHaveAttribute('rel', /noopener/);
        }
    });

    // ================================
    // 6. CV 다운로드 테스트
    // ================================

    test('CV 다운로드 버튼이 존재한다', async ({ page }) => {
        await page.goto('/');

        const cvButton = page.locator('a[href*="cv.pdf"]').first();
        await expect(cvButton).toBeVisible();

        // 다운로드 속성 확인
        await expect(cvButton).toHaveAttribute('download');
    });

    // ================================
    // 7. 스크롤 애니메이션 테스트
    // ================================

    test('스크롤 시 fade-in 애니메이션이 작동한다', async ({ page }) => {
        await page.goto('/');

        // About 섹션으로 스크롤
        const aboutSection = page.locator('#about');
        await aboutSection.scrollIntoViewIfNeeded();
        await page.waitForTimeout(300); // 애니메이션 시간

        // fade-in 요소가 visible 클래스를 가져야 함
        const fadeInElements = page.locator('#about .fade-in');
        const count = await fadeInElements.count();

        if (count > 0) {
            // 최소 하나의 요소가 visible 클래스를 가지는지 확인
            const firstElement = fadeInElements.first();
            await expect(firstElement).toHaveClass(/visible/);
        }
    });

    // ================================
    // 8. 접근성 테스트
    // ================================

    test('모든 이미지에 alt 속성이 있다', async ({ page }) => {
        await page.goto('/');

        const images = page.locator('img');
        const count = await images.count();

        for (let i = 0; i < count; i++) {
            const img = images.nth(i);
            const alt = await img.getAttribute('alt');
            expect(alt).not.toBeNull();
        }
    });

    test('모든 버튼에 적절한 레이블이 있다', async ({ page }) => {
        await page.goto('/');

        // Theme toggle 버튼
        const themeToggle = page.locator('#theme-toggle');
        await expect(themeToggle).toHaveAttribute('aria-label');

        // Mobile menu toggle 버튼
        const mobileToggle = page.locator('.mobile-menu-toggle');
        await expect(mobileToggle).toHaveAttribute('aria-label');
    });

    // ================================
    // 9. SEO 기본 요소 테스트
    // ================================

    test('페이지에 올바른 메타 태그가 있다', async ({ page }) => {
        await page.goto('/');

        // Description meta tag
        const description = page.locator('meta[name="description"]');
        await expect(description).toHaveAttribute('content');

        // Keywords meta tag
        const keywords = page.locator('meta[name="keywords"]');
        await expect(keywords).toHaveAttribute('content');

        // Author meta tag
        const author = page.locator('meta[name="author"]');
        await expect(author).toHaveAttribute('content');
    });

    test('페이지에 올바른 heading 구조가 있다', async ({ page }) => {
        await page.goto('/');

        // H1이 하나만 있어야 함 (SEO best practice)
        const h1Elements = page.locator('h1');
        expect(await h1Elements.count()).toBe(1);

        // H2가 여러 개 있어야 함 (각 섹션)
        const h2Elements = page.locator('h2');
        expect(await h2Elements.count()).toBeGreaterThan(0);
    });

    // ================================
    // 10. 성능 테스트 (기본)
    // ================================

    test('페이지가 5초 이내에 로딩된다', async ({ page }) => {
        const startTime = Date.now();
        await page.goto('/');
        const loadTime = Date.now() - startTime;

        expect(loadTime).toBeLessThan(5000);
    });

    test('모든 필수 리소스가 로딩된다', async ({ page }) => {
        const responses = [];

        page.on('response', response => {
            responses.push({
                url: response.url(),
                status: response.status()
            });
        });

        await page.goto('/');

        // CSS 파일이 로딩되었는지 확인
        const cssLoaded = responses.some(r => r.url.includes('styles.css') && r.status === 200);
        expect(cssLoaded).toBeTruthy();

        // JS 파일이 로딩되었는지 확인
        const jsLoaded = responses.some(r => r.url.includes('script.js') && r.status === 200);
        expect(jsLoaded).toBeTruthy();
    });
});
