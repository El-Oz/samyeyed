// Add /en to links if site in english
jQuery(document).ready(function ($) {
    if (window.location.pathname.split('/')[1] === 'en') {
        var t;

        $.each($('#page').find('a'), function (i, el) {
            if (el.pathname && el.pathname.split('/')[1] != 'en') {
                // dev localhost
                t = el.pathname;
                t = t.split('/');
                t.splice(1, 0, 'en');
                t = t.join('/');
                el.href = el.protocol + '//' + el.hostname + t + el.search + el.hash;
                //el.href = el.protocol + '//' + el.hostname + '/en' + el.pathname + el.hash + el.search;
            }
        });

        var LangImg = $('.trp-language-switcher-container').find('img[title="العربية"]'), t;
        t = LangImg.parents('a')[0].pathname.split('/');
        t.splice(1, 1);
        t = t.join('/');
        // local test 2 , live 1
        LangImg.parents('a').attr("href", t);
    }

    var elem, elemImg;
    if ($('.woocommerce-product-header')[0]) {
        $.each($('.woocommerce-product-header'), function (i, el) {
            elem = $(el);
            elemImg = elem.find('img');
            if (elemImg.height() < elem.height()) {
                elem.css({
                    backgroundImage: 'url("' + elemImg[0].src + '")',
                    backgroundSize: 'cover'
                });
                elemImg.css('display', 'none');
            }
        })
    }

    if ($('.child-cats-list')[0]) {
        $.each($('.child-cats-list').find('a'), function (i, el) {
            elem = $(el);
            elemImg = elem.find('img');
            elem.css({
                backgroundImage: 'url("' + elemImg[0].src + '")',
                backgroundSize: 'cover'
            });
            elemImg.css('opacity', '0');
        })
    }

});