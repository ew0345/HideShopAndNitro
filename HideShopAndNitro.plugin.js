/**
 * @name HideShopAndNitro
 * @author Ew0345
 * @description Hides the Shop & Nitro tabs from the main discord page
 * @version 1.0
 */
let removeTabs;
module.exports = class HideShopAndNitro {
    start() {
        removeTabs = setInterval(() => {
            for (var i = 0; i < document.querySelectorAll('a').length; i++) {
                if (document.querySelectorAll('a')[i].href.includes('/shop') || document.querySelectorAll('a')[i].href.includes('/store')) {
                    if (document.querySelectorAll('a')[i].style.display !== 'none') {
                        document.querySelectorAll('a')[i].style.display = 'none';
                    }
                }
            }
        }, 2500);
    }

    stop() {
        clearInterval(removeTabs);
        for (var i = 0; i < document.querySelectorAll('a').length; i++) {
            if (document.querySelectorAll('a')[i].href.includes('/shop') || document.querySelectorAll('a')[i].href.includes('/store')) {
                document.querySelectorAll('a')[i].style.display = '';
            }
        }
    }
}