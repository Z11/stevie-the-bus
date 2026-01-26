# Navbar Debug Guide

## Issue: Navbar not showing, logo is huge

### Quick Fixes to Try

1. **Clear cache and restart:**
```bash
rm -rf .next
npm run dev
```

2. **Hard refresh browser:**
- Chrome/Edge: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
- Open DevTools (F12) and check Console for errors

### What I Fixed

Updated `src/components/NavBar.js` to use bracket notation for kebab-case CSS classes:
- `styles.navCenter` → `styles['nav-center']`
- `styles.navHeader` → `styles['nav-header']`
- `styles.navLinks` → `styles['nav-links']`
- etc.

### Check These Things

1. **Open Browser DevTools (F12)**
   - Go to Console tab
   - Look for errors related to:
     - SVG imports
     - CSS module imports
     - Component rendering

2. **Check Network Tab**
   - See if CSS files are loading
   - Check if SVG files are loading

3. **Inspect the navbar element**
   - Right-click on where navbar should be
   - Select "Inspect"
   - Check if classes are applied
   - Check if styles are being applied

### Expected Structure

The navbar should have this structure:
```html
<nav class="navbar_navbar__xxx">
  <div class="navbar_nav-center__xxx">
    <div class="navbar_nav-header__xxx">
      <!-- Mobile logo and hamburger -->
    </div>
    <ul class="navbar_nav-links__xxx">
      <!-- Desktop logo and links -->
    </ul>
    <div class="navbar_icons__xxx">
      <!-- Social icons -->
    </div>
  </div>
</nav>
```

### CSS Module Class Names

Next.js CSS Modules convert kebab-case to camelCase automatically, BUT you can also use bracket notation:

**Option 1 (Auto-conversion):**
```javascript
// CSS: .nav-center
className={styles.navCenter}  // Should work
```

**Option 2 (Bracket notation):**
```javascript
// CSS: .nav-center
className={styles['nav-center']}  // Always works
```

I updated the navbar to use Option 2 for reliability.

### If Still Not Working

1. **Check if SVGs are loading:**
```bash
ls -la src/svgs/
```

Should see:
- `alignRight.svg`
- `stevie-logo.svg`
- `facebook.svg`
- `instagram.svg`

2. **Test SVG import:**
Add this temporarily to NavBar.js:
```javascript
console.log('AlignRight:', AlignRight)
console.log('IconStevie:', IconStevie)
```

3. **Check if @svgr/webpack is working:**
```bash
npm list @svgr/webpack
```

Should show it's installed.

### Manual Test

Try adding this temporarily at the top of the navbar return:
```javascript
return (
  <>
    <div style={{ background: 'red', padding: '20px', color: 'white' }}>
      NAVBAR TEST - If you see this, navbar is rendering
    </div>
    <nav className={styles.navbar}>
      ...
```

If you see the red box, the navbar is rendering but CSS isn't applying.
If you don't see it, there's a component error.

### Common Issues

1. **SVG not loading** - Check @svgr/webpack config in next.config.js
2. **CSS not applying** - Check class name matching
3. **Component not rendering** - Check browser console for errors
4. **Z-index issues** - Navbar might be behind other content

### Next Steps

1. Clear cache: `rm -rf .next`
2. Restart: `npm run dev`
3. Hard refresh browser
4. Check browser console for errors
5. Report any errors you see

---

Let me know what you see in the browser console!
