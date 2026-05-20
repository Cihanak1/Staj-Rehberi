/* =========================================
   RENDER FONKSİYONU
   ========================================= */

import { roadmapData } from './data.js';

export function renderTimeline() {
    const timelineContainer = document.getElementById('timeline-container');
    
    if (!timelineContainer) {
        console.error('Timeline container not found');
        return;
    }

    roadmapData.forEach((data, index) => {
        const listHTML = data.list.map(item => `<li>${item}</li>`).join('');

        const stepHTML = `
            <article class="step-container" data-index="${index}" tabindex="0" aria-labelledby="step-title-${data.id}">
                <div class="step-icon" aria-hidden="true">
                    <i class="ph ${data.icon}"></i>
                </div>
                <div class="step-card">
                    <div class="step-header">
                        <h2 class="step-title" id="step-title-${data.id}">${data.id}. ${data.title}</h2>
                        <span class="step-badge" aria-label="Zaman etiketi">${data.timeLabel}</span>
                    </div>
                    <p class="step-content">${data.description}</p>
                    <ul class="step-list" role="list">
                        ${listHTML}
                    </ul>
                </div>
            </article>
        `;
        timelineContainer.insertAdjacentHTML('beforeend', stepHTML);
    });
}
