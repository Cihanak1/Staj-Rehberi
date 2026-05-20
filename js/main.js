/* =========================================
   MAIN ENTRY POINT
   ========================================= */

import { renderTimeline } from './render.js';
import { initScrollAnimations } from './animations.js';
import { initKeyboardNavigation } from './keyboard.js';

// DOM yüklendiğinde çalıştır
document.addEventListener('DOMContentLoaded', () => {
    renderTimeline();
    initScrollAnimations();
    initKeyboardNavigation();
});
