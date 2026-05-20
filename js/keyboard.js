/* =========================================
   KLAVYE NAVİGASYONU
   ========================================= */

export function initKeyboardNavigation() {
    const stepContainers = document.querySelectorAll('.step-container');
    
    stepContainers.forEach((container, index) => {
        container.addEventListener('keydown', (e) => {
            // Enter veya Space ile kartı genişlet/daralt (gelecekte eklenebilir)
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                container.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
            }
            
            // Arrow Down - Sonraki adıma geç
            if (e.key === 'ArrowDown' && index < stepContainers.length - 1) {
                e.preventDefault();
                stepContainers[index + 1].focus();
                stepContainers[index + 1].scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
            }
            
            // Arrow Up - Önceki adıma geç
            if (e.key === 'ArrowUp' && index > 0) {
                e.preventDefault();
                stepContainers[index - 1].focus();
                stepContainers[index - 1].scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
            }
        });
    });
}
