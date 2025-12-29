/* ========================================
   Lightbox Functionality
   ======================================== */

function openLightbox(item) {
    const img = item.querySelector('img');
    if (!img) return; // Don't open lightbox for placeholders
    
    const title = item.querySelector('.gallery-item-title').textContent;
    const meta = item.querySelector('.gallery-item-meta').textContent;
    
    document.getElementById('lightbox-image').src = img.src;
    document.getElementById('lightbox-image').alt = img.alt;
    document.getElementById('lightbox-title').textContent = title;
    document.getElementById('lightbox-meta').textContent = meta;
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox(event) {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';
}

// Close on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});