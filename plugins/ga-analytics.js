// ============================================
// ПЛАГИН: Google Analytics (аналог)
// ============================================

(function() {
    console.log('📊 [Плагин GA] Google Analytics аналог установлен');
    
    let visitorsData = {
        pageViews: 0,
        events: []
    };
    
    window.trackPageView = function(pageName) {
        visitorsData.pageViews++;
        console.log(`📊 [GA] Просмотр: ${pageName} | Всего: ${visitorsData.pageViews}`);
        localStorage.setItem('ga_visitors', JSON.stringify(visitorsData));
    };
    
    window.trackEvent = function(category, action, label) {
        visitorsData.events.push({ category, action, label, time: new Date().toLocaleString() });
        console.log(`📊 [GA] Событие: ${category} / ${action}`);
        localStorage.setItem('ga_events', JSON.stringify(visitorsData.events));
    };
    
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    trackPageView(currentPage);
    
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (link && link.href) trackEvent('click', 'link_click', link.href);
        
        const button = e.target.closest('button');
        if (button && button.textContent) trackEvent('click', 'button_click', button.textContent);
    });
    
    window.showGAStats = function() {
        console.log('========== СТАТИСТИКА ==========');
        console.log(`Просмотров: ${visitorsData.pageViews}`);
        console.log(`Событий: ${visitorsData.events.length}`);
        return visitorsData;
    };
})();
