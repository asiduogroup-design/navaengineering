import { describe, it, expect } from 'vitest';
import { MENU, findButtonInMenu, findButtonAcrossMenus } from './menuHelpers';

describe('menuHelpers', () => {
  it('finds a button inside a specific menu by exact label', () => {
    const btn = findButtonInMenu(MENU.main, '📞 Contact Us');
    expect(btn).toBeTruthy();
    expect(btn.action.type).toBe('menu');
    expect(btn.action.target).toBe('contact');
  });

  it('returns null for missing button in menu', () => {
    const btn = findButtonInMenu(MENU.main, 'Nonexistent');
    expect(btn).toBeNull();
  });

  it('finds a button across menus by partial or case-insensitive text', () => {
    const btn = findButtonAcrossMenus(MENU, 'portfolio');
    expect(btn).toBeTruthy();
    expect(btn.label.toLowerCase()).toContain('portfolio');
  });

  it('returns null when no match across menus', () => {
    const btn = findButtonAcrossMenus(MENU, 'xyz123');
    expect(btn).toBeNull();
  });
});
