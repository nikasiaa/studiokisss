// ============================================
// ПЛАГИН: SEO Optimization
// ============================================

(function() {
    console.log('🔍 [SEO плагин] Установлен и настроен');
    
    const seoChecker = {
        checkMetaTags: function() {
            const title = document.querySelector('title');
            if (title && title.textContent) {
                console.log(`✅ Title: ${title.textContent.length} символов`);
            }
            
            const description = document.querySelector('meta[name="description"]');
            if (description && description.getAttribute('content')) {
                console.log(`✅ Meta description: ${description.getAttribute('content').length} символов`);
            }
        },
        
        checkHeadings: function() {
            const h1 = document.querySelector('h1');
            if (h1) console.log(`✅ H1: ${h1.textContent}`);
            else console.log('⚠️ Нет H1');
        },
        
        checkImagesAlt: function() {
            const images = document.querySelectorAll('img');
            let missingAlt = 0;
            images.forEach(img => {
                if (!img.hasAttribute('alt') || img.getAttribute('alt') === '') missingAlt++;
            });
            console.log(`✅ Изображений: ${images.length}, без alt: ${missingAlt}`);
        },
        
        run: function() {
            console.log('========== SEO ПРОВЕРКА ==========');
            this.checkMetaTags();
            this.checkHeadings();
            this.checkImagesAlt();
            console.log('===================================');
        }
    };
    
    window.addEventListener('DOMContentLoaded', () => seoChecker.run());
    window.SEOPlugin = seoChecker;
})();
