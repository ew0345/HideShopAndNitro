/**
 * @name HideShopAndNitro
 * @author Ew0345
 * @description Hides the Shop & Nitro tabs from the main discord page
 * @version 1.0
 */

module.exports = class HideShopAndNitro {
    start() {
        let removedTabs = false;
        const removeTabs = setInterval(() => {
            for (var i = 0; i < document.querySelectorAll('a').length; i++) {
                if (document.querySelectorAll('a')[i].href.includes('/shop') || document.querySelectorAll('a')[i].href.includes('/store')) {
                    if (removedTabs == true && document.querySelectorAll('a')[i].style.display == 'none') {
                        clearInterval(removeTabs);
                    } else {
                        document.querySelectorAll('a')[i].style.display = 'none';
                        removedTabs = true;
                    }
                }
            }
        }, 2500);
    }

    stop() {
        for (var i = 0; i < document.querySelectorAll('a').length; i++) {
            if (document.querySelectorAll('a')[i].href.includes('/shop') || document.querySelectorAll('a')[i].href.includes('/store')) {
                document.querySelectorAll('a')[i].style.display = '';
            }
        }
    }
}