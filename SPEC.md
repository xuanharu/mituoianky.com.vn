# An Ký - Vietnamese Food Brand Website Specification

## 1. Project Overview

- **Project Name**: An Ký Website
- **Type**: Single-page responsive website with 3D animations
- **Core Functionality**: Showcase Vietnamese food products (noodles, wonton wrappers, dumplings) with immersive 3D scroll animations
- **Target Users**: Health-conscious consumers seeking premium Asian food products

---

## 2. UI/UX Specification

### 2.1 Layout Structure

**Page Sections:**
1. **Navigation** - Fixed top nav with logo and menu links
2. **Hero Section** - Full-screen with 3D animated background
3. **Products Section** - Three product cards
4. **About Section** - Brand story and values
5. **Contact Section** - Contact information
6. **Footer** - Copyright and social links

**Responsive Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### 2.2 Visual Design

**Color Palette:**
- Primary Red: `#c8102e`
- Primary Gold: `#f4c430`
- White: `#ffffff`
- Dark Background: `#1a1a1a`
- Light Text: `#f5f5f5`
- Muted Gold: `#d4a84b`

**Typography:**
- Headings: `"Cormorant Garamond", Georgia, serif` - elegant, classic
- Body: `"Quicksand", "Segoe UI", sans-serif` - clean, modern
- Hero Title: 8rem (desktop), 4rem (mobile), uppercase
- Section Headings: 3rem (desktop), 2rem (mobile)
- Body Text: 1.1rem

**Spacing System:**
- Section Padding: 100px vertical (desktop), 60px (mobile)
- Container Max Width: 1200px
- Card Gap: 40px
- Element Margins: 20px base unit

**Visual Effects:**
- Gold decorative borders with Asian-inspired patterns
- Subtle box shadows: `0 10px 40px rgba(0,0,0,0.15)`
- Backdrop blur on navigation: `blur(10px)`
- Smooth hover transitions: 0.4s ease

### 2.3 Components

**Navigation:**
- Logo (left): "AN KÝ" in Cormorant Garamond
- Menu links (right): Home, Products, About, Contact
- Mobile: Hamburger menu with slide-in drawer

**Hero Section:**
- Full viewport height (100vh)
- Centered title "AN KÝ" with gold accent underline
- Tagline: "Customer Health – Our Future"
- 3D canvas background with noodles and dumplings
- Scroll indicator at bottom

**Product Cards:**
- White background with gold border accent
- Image placeholder (gradient if no image)
- Product name in red
- Description in dark text
- Price in gold
- Hover: lift effect with enhanced shadow

**About Section:**
- Split layout: text left, decorative element right
- Two value cards: "Natural Ingredients", "No Preservatives"
- Gold decorative divider

**Contact Section:**
- Three contact methods in a row
- Icons with labels
- Dark background with gold accents

**Buttons:**
- Primary: Red background, white text, gold border
- Hover: Gold background, dark text

---

## 3. Functionality Specification

### 3.1 Core Features

**3D Scroll Animation (Three.js):**
- Noodle strands: 
  - Cylindrical geometry with soft, organic curves
  - Stretched vertically on scroll (scale Y: 1 to 3)
  - Flowing downward animation (position Y offset)
  - Multiple strands (8-12) at different positions
  - Colors: cream/off-white (#f5f0e6)
  - Realistic lighting with soft shadows
  
- Dumplings:
  - Procedural geometry (spherical with folds)
  - Floating in 3D space around noodles
  - Slow rotation (0.5-1 rad/s on Y axis)
  - Parallax movement at different speeds based on depth
  - Two types: wonton (irregular), shumai (top-folded)
  - Soft shadows using shadow maps

- Camera:
  - Perspective camera with slight depth
  - Gentle parallax movement on mouse/scroll
  - Smooth easing (lerp factor: 0.05)

- Performance:
  - Efficient geometry (low poly with smooth shading)
  - RequestAnimationFrame loop
  - Dispose unused resources
  - Optimize for 60fps

**Smooth Scrolling:**
- CSS smooth scroll behavior
- Scroll-triggered fade-in animations for sections

**Navigation:**
- Smooth scroll to sections on click
- Active state highlighting based on scroll position
- Mobile menu toggle

**Interactive Elements:**
- Product card hover effects
- Button hover animations
- Contact item hover effects

### 3.2 User Interactions

- Scroll: Triggers 3D noodle stretching and dumplings parallax
- Mouse move: Subtle camera parallax
- Click nav: Smooth scroll to section
- Hover cards: Lift and shadow enhancement
- Mobile menu toggle

---

## 4. Technical Requirements

**File Structure:**
- index.html - Complete single file with embedded CSS and JS
- Uses Three.js from CDN (r160)

**External Resources:**
- Google Fonts: Cormorant Garamond, Quicksand
- Three.js: CDN (unpkg or cdnjs)

**Browser Support:**
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Graceful degradation for WebGL-unsupported browsers

---

## 5. Acceptance Criteria

1. ✅ Page loads without errors
2. ✅ Hero section displays full-screen with title and tagline
3. ✅ 3D noodles animate on scroll (stretch downward)
4. ✅ 3D dumplings float and rotate with parallax
5. ✅ Navigation scrolls smoothly to sections
6. ✅ All three products displayed in cards
7. ✅ About section shows brand values
8. ✅ Contact section displays address, phone, email
9. ✅ Responsive on mobile, tablet, desktop
10. ✅ Color scheme matches spec (red, gold, white)
11. ✅ Typography matches spec (serif headings, sans-serif body)
12. ✅ Hover effects work on interactive elements
13. ✅ Asian-inspired decorative elements present
