  $(function() {
        $('.lazy').Lazy();
    });
    {
        "@context"; "https:\/\/schema.org",
        "@type"; "WebSite",
        "@id";"#website",
        "url";"https:\/\/www.ilyon.net\/",
        "name";"Ilyon Games",
        "potentialAction";{
            "@type";"SearchAction",
            "target";"https:\/\/www.ilyon.net\/?s={search_term_string}",
            "query-input";"required name=search_term_string"
        }
    };
    window._wpemojiSettings = {
        "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/12.0.0-1\/72x72\/",
        "ext": ".png",
        "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/12.0.0-1\/svg\/",
        "svgExt": ".svg",
        "source": {
            "concatemoji": "https:\/\/www.ilyon.net\/wp-includes\/js\/wp-emoji-release.min.js?ver=5.3.2"
        }
    };
    ! function (e, a, t) {
        var r, n, o, i, p = a.createElement("canvas"),
            s = p.getContext && p.getContext("2d");

        function c(e, t) {
            var a = String.fromCharCode;
            s.clearRect(0, 0, p.width, p.height), s.fillText(a.apply(this, e), 0, 0);
            var r = p.toDataURL();
            return s.clearRect(0, 0, p.width, p.height), s.fillText(a.apply(this, t), 0, 0), r === p.toDataURL()
        }

        function l(e) {
            if (!s || !s.fillText) return !1;
            switch (s.textBaseline = "top", s.font = "600 32px Arial", e) {
                case "flag":
                    return !c([127987, 65039, 8205, 9895, 65039], [127987, 65039, 8203, 9895, 65039]) && (!c([55356,
                        56826, 55356, 56819
                    ], [55356, 56826, 8203, 55356, 56819]) && !c([55356, 57332, 56128, 56423, 56128, 56418,
                        56128, 56421, 56128, 56430, 56128, 56423, 56128, 56447
                    ], [55356, 57332, 8203, 56128, 56423, 8203, 56128, 56418, 8203, 56128, 56421, 8203,
                        56128, 56430, 8203, 56128, 56423, 8203, 56128, 56447
                    ]));
                case "emoji":
                    return !c([55357, 56424, 55356, 57342, 8205, 55358, 56605, 8205, 55357, 56424, 55356, 57340], [
                        55357, 56424, 55356, 57342, 8203, 55358, 56605, 8203, 55357, 56424, 55356, 57340
                    ])
            }
            return !1
        }

        function d(e) {
            var t = a.createElement("script");
            t.src = e, t.defer = t.type = "text/javascript", a.getElementsByTagName("head")[0].appendChild(t)
        }
        for (i = Array("flag", "emoji"), t.supports = {
                everything: !0,
                everythingExceptFlag: !0
            }, o = 0; o < i.length; o++) t.supports[i[o]] = l(i[o]), t.supports.everything = t.supports
            .everything && t.supports[i[o]], "flag" !== i[o] && (t.supports.everythingExceptFlag = t.supports
                .everythingExceptFlag && t.supports[i[o]]);
        t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && !t.supports.flag, t.DOMReady = !1, t
            .readyCallback = function () {
                t.DOMReady = !0
            }, t.supports.everything || (n = function () {
                t.readyCallback()
            }, a.addEventListener ? (a.addEventListener("DOMContentLoaded", n, !1), e.addEventListener("load",
                n, !1)) : (e.attachEvent("onload", n), a.attachEvent("onreadystatechange", function () {
                "complete" === a.readyState && t.readyCallback()
            })), (r = t.source || {}).concatemoji ? d(r.concatemoji) : r.wpemoji && r.twemoji && (d(r.twemoji),
                d(r.wpemoji)))
    }(window, document, window._wpemojiSettings); 
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'UA-127738258-1');
    (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
        });
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-TSPVZM8');
    function setREVStartSize(t) {
        try {
            var h, e = document.getElementById(t.c).parentNode.offsetWidth;
            if (e = 0 === e || isNaN(e) ? window.innerWidth : e, t.tabw = void 0 === t.tabw ? 0 : parseInt(t.tabw),
                t.thumbw = void 0 === t.thumbw ? 0 : parseInt(t.thumbw), t.tabh = void 0 === t.tabh ? 0 : parseInt(t
                    .tabh), t.thumbh = void 0 === t.thumbh ? 0 : parseInt(t.thumbh), t.tabhide = void 0 === t
                .tabhide ? 0 : parseInt(t.tabhide), t.thumbhide = void 0 === t.thumbhide ? 0 : parseInt(t
                    .thumbhide), t.mh = void 0 === t.mh || "" == t.mh || "auto" === t.mh ? 0 : parseInt(t.mh, 0),
                "fullscreen" === t.layout || "fullscreen" === t.l) h = Math.max(t.mh, window.innerHeight);
            else {
                for (var i in t.gw = Array.isArray(t.gw) ? t.gw : [t.gw], t.rl) void 0 !== t.gw[i] && 0 !== t.gw[
                    i] || (t.gw[i] = t.gw[i - 1]);
                for (var i in t.gh = void 0 === t.el || "" === t.el || Array.isArray(t.el) && 0 == t.el.length ? t
                        .gh : t.el, t.gh = Array.isArray(t.gh) ? t.gh : [t.gh], t.rl) void 0 !== t.gh[i] && 0 !== t
                    .gh[i] || (t.gh[i] = t.gh[i - 1]);
                var r, a = new Array(t.rl.length),
                    n = 0;
                for (var i in t.tabw = t.tabhide >= e ? 0 : t.tabw, t.thumbw = t.thumbhide >= e ? 0 : t.thumbw, t
                        .tabh = t.tabhide >= e ? 0 : t.tabh, t.thumbh = t.thumbhide >= e ? 0 : t.thumbh, t.rl) a[
                    i] = t.rl[i] < window.innerWidth ? 0 : t.rl[i];
                for (var i in r = a[0], a) r > a[i] && 0 < a[i] && (r = a[i], n = i);
                var d = e > t.gw[n] + t.tabw + t.thumbw ? 1 : (e - (t.tabw + t.thumbw)) / t.gw[n];
                h = t.gh[n] * d + (t.tabh + t.thumbh)
            }
            void 0 === window.rs_init_css && (window.rs_init_css = document.head.appendChild(document.createElement(
                    "style"))), document.getElementById(t.c).height = h, window.rs_init_css.innerHTML += "#" + t.c +
                "_wrapper { height: " + h + "px }"
        } catch (t) {
            console.log("Failure at Presize of Slider:" + t)
        }
    };
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);
    (function () {
        if (!window.mc4wp) {
            window.mc4wp = {
                listeners: [],
                forms: {
                    on: function (event, callback) {
                        window.mc4wp.listeners.push({
                            event: event,
                            callback: callback
                        });
                    }
                }
            }
        }
    })();
    jQuery(document).ready(function () {
        var ajaxurl = 'https://www.ilyon.net/wp-admin/admin-ajax.php';
        if (0 < jQuery('.fusion-login-nonce').length) {
            jQuery.get(ajaxurl, {
                'action': 'fusion_login_nonce'
            }, function (response) {
                jQuery('.fusion-login-nonce').html(response);
            });
        }
    });
    (function () {
        function addEventListener(element, event, handler) {
            if (element.addEventListener) {
                element.addEventListener(event, handler, false);
            } else if (element.attachEvent) {
                element.attachEvent('on' + event, handler);
            }
        }

        function maybePrefixUrlField() {
            if (this.value.trim() !== '' && this.value.indexOf('http') !== 0) {
                this.value = "http://" + this.value;
            }
        }
        var urlFields = document.querySelectorAll('.mc4wp-form input[type="url"]');
        if (urlFields && urlFields.length > 0) {
            for (var j = 0; j < urlFields.length; j++) {
                addEventListener(urlFields[j], 'blur', maybePrefixUrlField);
            }
        } /* test if browser supports date fields */
        var testInput = document.createElement('input');
        testInput.setAttribute('type', 'date');
        if (testInput.type !== 'date') {
            /* add placeholder & pattern to all date fields */
            var dateFields = document.querySelectorAll('.mc4wp-form input[type="date"]');
            for (var i = 0; i < dateFields.length; i++) {
                if (!dateFields[i].placeholder) {
                    dateFields[i].placeholder = 'YYYY-MM-DD';
                }
                if (!dateFields[i].pattern) {
                    dateFields[i].pattern = '[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])';
                }
            }
        }
    })(); 
    if (typeof revslider_showDoubleJqueryError === "undefined") {
        function revslider_showDoubleJqueryError(sliderID) {
            var err = "<div class='rs_error_message_box'>";
            err += "<div class='rs_error_message_oops'>Oops...</div>";
            err += "<div class='rs_error_message_content'>";
            err +=
                "You have some jquery.js library include that comes after the Slider Revolution files js inclusion.<br>";
            err +=
                "To fix this, you can:<br>&nbsp;&nbsp;&nbsp; 1. Set 'Module General Options' -> 'Advanced' -> 'jQuery & OutPut Filters' -> 'Put JS to Body' to on";
            err += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jQuery.js inclusion and remove it";
            err += "</div>";
            err += "</div>";
            jQuery(sliderID).show().html(err);
        }
    }
    var ubermenu_data = {
        "remove_conflicts": "on",
        "reposition_on_load": "off",
        "intent_delay": "300",
        "intent_interval": "100",
        "intent_threshold": "7",
        "scrollto_offset": "50",
        "scrollto_duration": "1000",
        "responsive_breakpoint": "959",
        "accessible": "on",
        "retractor_display_strategy": "responsive",
        "touch_off_close": "on",
        "collapse_after_scroll": "on",
        "v": "3.3.1.1",
        "configurations": ["main"],
        "ajax_url": "https:\/\/www.ilyon.net\/wp-admin\/admin-ajax.php",
        "plugin_url": "https:\/\/www.ilyon.net\/wp-content\/plugins\/ubermenu\/",
        "disable_mobile": "off",
        "prefix_boost": "",
        "aria_role_navigation": "off",
        "aria_expanded": "off",
        "aria_hidden": "off",
        "aria_controls": "",
        "aria_responsive_toggle": "off",
        "theme_locations": {
            "main_navigation": "Main Navigation",
            "top_navigation": "Top Navigation",
            "mobile_navigation": "Mobile Navigation",
            "404_pages": "404 Useful Pages",
            "sticky_navigation": "Sticky Header Navigation"
        }
    };
    var ubermenu_sticky_settings = {
        "main": {
            "full_width_menu_bar": "off",
            "center_inner_width": "",
            "offset": "",
            "mobile": "off",
            "sticky_offset": "",
            "is_sticky": 0,
            "permanent": 0,
            "is_mobile": 1
        }
    };
     
    var wpcf7 = {
        "apiSettings": {
            "root": "https:\/\/www.ilyon.net\/wp-json\/contact-form-7\/v1",
            "namespace": "contact-form-7\/v1"
        },
        "recaptcha": {
            "messages": {
                "empty": "Please verify that you are not a robot."
            }
        },
        "cached": "1"
    };
    var fusionVideoGeneralVars = {
        "status_vimeo": "1",
        "status_yt": "1"
    };
    var fusionLightboxVideoVars = {
        "lightbox_video_width": "1280",
        "lightbox_video_height": "720"
    };
    var fusionLightboxVars = {
        "status_lightbox": "1",
        "lightbox_gallery": "1",
        "lightbox_skin": "metro-black",
        "lightbox_title": "",
        "lightbox_arrows": "1",
        "lightbox_slideshow_speed": "5000",
        "lightbox_autoplay": "",
        "lightbox_opacity": "0.90",
        "lightbox_desc": "",
        "lightbox_social": "",
        "lightbox_deeplinking": "",
        "lightbox_path": "horizontal",
        "lightbox_post_images": "1",
        "lightbox_animation_speed": "Normal"
    };
    
    var avadaPortfolioVars = {
        "lightbox_behavior": "all",
        "infinite_finished_msg": "<em>All items displayed.<\/em>",
        "infinite_blog_text": "<em>Loading the next set of posts...<\/em>",
        "content_break_point": "800"
    };
    
    var fusionAnimationsVars = {
        "disable_mobile_animate_css": "0"
    };
    var fusionCountersBox = {
        "counter_box_speed": "1000"
    };
    var fusionRecentPostsVars = {
        "infinite_loading_text": "<em>Loading the next set of posts...<\/em>",
        "infinite_finished_msg": "<em>All items displayed.<\/em>",
        "slideshow_autoplay": "1",
        "slideshow_speed": "7000",
        "pagination_video_slide": "",
        "status_yt": "1"
    }; 
    var fusionMapsVars = {
        "admin_ajax": "https:\/\/www.ilyon.net\/wp-admin\/admin-ajax.php"
    };
    var fusionTestimonialVars = {
        "testimonials_speed": "4000"
    };
    
    var fusionEqualHeightVars = {
        "content_break_point": "800"
    };
    var fusionBgImageVars = {
        "content_break_point": "800"
    };
    var fusionVideoBgVars = {
        "status_vimeo": "1",
        "status_yt": "1"
    };
    var fusionContainerVars = {
        "content_break_point": "800",
        "container_hundred_percent_height_mobile": "0",
        "is_sticky_header_transparent": "0"
    };
    var fusionTabVars = {
        "content_break_point": "800"
    }; 
    var fusionVideoVars = {
        "status_vimeo": "1"
    };
    var fusionCarouselVars = {
        "related_posts_speed": "2500",
        "carousel_speed": "2500"
    }; 
    var fusionFlexSliderVars = {
        "status_vimeo": "1",
        "page_smoothHeight": "false",
        "slideshow_autoplay": "1",
        "slideshow_speed": "7000",
        "pagination_video_slide": "",
        "status_yt": "1",
        "flex_smoothHeight": "false"
    };
    var fusionBlogVars = {
        "infinite_blog_text": "<em>Loading the next set of posts...<\/em>",
        "infinite_finished_msg": "<em>All items displayed.<\/em>",
        "slideshow_autoplay": "1",
        "slideshow_speed": "7000",
        "pagination_video_slide": "",
        "status_yt": "1",
        "lightbox_behavior": "all",
        "blog_pagination_type": "Pagination",
        "flex_smoothHeight": "false"
    };
    var fusionIe1011Vars = {
        "form_bg_color": "#ffffff"
    };
    var avadaHeaderVars = {
        "header_position": "top",
        "header_layout": "v1",
        "header_sticky": "1",
        "header_sticky_type2_layout": "menu_only",
        "side_header_break_point": "800",
        "header_sticky_mobile": "0",
        "header_sticky_tablet": "0",
        "mobile_menu_design": "modern",
        "sticky_header_shrinkage": "0",
        "nav_height": "97",
        "nav_highlight_border": "0",
        "nav_highlight_style": "bar",
        "logo_margin_top": "16px",
        "logo_margin_bottom": "16px",
        "layout_mode": "wide",
        "header_padding_top": "0px",
        "header_padding_bottom": "0px",
        "offset_scroll": "full"
    };
    var avadaMenuVars = {
        "header_position": "Top",
        "logo_alignment": "Left",
        "header_sticky": "1",
        "side_header_break_point": "800",
        "mobile_menu_design": "modern",
        "dropdown_goto": "Go to...",
        "mobile_nav_cart": "Shopping Cart",
        "mobile_submenu_open": "Open Sub Menu",
        "mobile_submenu_close": "Close Sub Menu",
        "submenu_slideout": "1"
    };
    var fusionScrollToAnchorVars = {
        "content_break_point": "800",
        "container_hundred_percent_height_mobile": "0"
    };
    var fusionTypographyVars = {
        "site_width": "1100px",
        "typography_responsive": "",
        "typography_sensitivity": "0.50",
        "typography_factor": "1.50",
        "elements": "h1, h2, h3, h4, h5, h6"
    };
    var avadaCommentVars = {
        "title_style_type": "double solid",
        "title_margin_top": "0px",
        "title_margin_bottom": "31px"
    };
    var avadaSidebarsVars = {
        "header_position": "top",
        "header_layout": "v1",
        "header_sticky": "1",
        "header_sticky_type2_layout": "menu_only",
        "side_header_break_point": "800",
        "header_sticky_tablet": "0",
        "sticky_header_shrinkage": "0",
        "nav_height": "97",
        "content_break_point": "800"
    };
    var toTopscreenReaderText = {
        "label": "Go to Top"
    };
    var avadaToTopVars = {
        "status_totop_mobile": "1"
    };
    var avadaElasticSliderVars = {
        "tfes_autoplay": "1",
        "tfes_animation": "sides",
        "tfes_interval": "3000",
        "tfes_speed": "800",
        "tfes_width": "150"
    };
    var avadaFusionSliderVars = {
        "side_header_break_point": "800",
        "slider_position": "below",
        "header_transparency": "0",
        "header_position": "Top",
        "content_break_point": "800",
        "status_vimeo": "1"
    };
    var mc4wp_forms_config = [];  