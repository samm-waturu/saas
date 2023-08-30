$.fn.customMoveCursorToEnd = function () {
  "use strict";
  this.focus();
  var e = this.val();
  return this.val("").val(e), this;
};
var customstyleTime = new Date();
!(function (e) {
  "use strict";
  var t = 0,
    o = !1,
    r = {
      init: function () {
        this.tooltip(),
          this.optionsList(),
          this.fontDialog(),
          this.movingSubMenuForLeftPanel(),
          this.panelResize(),
          this.navBarItems(),
          this.redetectFullScreen(),
          this.fullSCreen(),
          this.navSubMenu();
      },
      fontDialog: function () {
        var t = e(".style_fn_font");
        e(".font__trigger")
          .off()
          .on("click", function () {
            return t.addClass("opened"), !1;
          }),
          t
            .find(".font__closer")
            .off()
            .on("click", function () {
              return t.removeClass("opened"), !1;
            }),
          t
            .find(".font__closer_link")
            .off()
            .on("click", function () {
              return t.removeClass("opened"), !1;
            }),
          t
            .find(".apply")
            .off()
            .on("click", function () {
              return (
                e(".fn__chat_font_size_style").remove(),
                e("body").append(
                  '<style type="text/css" class="fn__chat_font_size_style">frenify_typing h3,.fn__chatbot .chat{font-size: ' +
                    e("#font_size").find(":selected").val() +
                    "px;}</style>"
                ),
                t.removeClass("opened"),
                !1
              );
            });
      },
      tooltip: function () {
        e("body").on(
          "mouseover mouseenter",
          ".fn__tooltip",
          function () {
            var t = e(this),
              a = t.attr("data-position");
            (void 0 === a || !0 === a) &&
              (a = ["top", "bottom", "right", "left"]);
            var o = {
              contentAsHTML: "true",
              maxWidth: 300,
              animationDuration: 0,
              animation: "fade",
              delay: 0,
              theme: "tooltipster-style",
              side: a
            };
            if (
              t.hasClass("menu__item") &&
              !e("html").hasClass("panel-opened")
            ) {
              t.tooltipster(o).tooltipster("hide");
              return;
            }
            t.tooltipster(o), t.tooltipster("show");
          }
        );
      },
      escapeHTML: function (e) {
        var t = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
          "/": "&#x2F;",
          "`": "&#x60;",
          "=": "&#x3D;"
        };
        return String(e).replace(/[&<>"'`=\/]/g, function (e) {
          return t[e];
        });
      },
      optionsList: function () {
        e(".fn__options_list a")
          .off()
          .on("click", function () {
            var t = e(this);
            return (
              t.hasClass("enabled")
                ? t.removeClass("enabled").addClass("disabled")
                : t.removeClass("disabled").addClass("enabled"),
              !1
            );
          });
      },
      movingSubMenuForLeftPanel: function () {
        var t = e(".style_fn_fixedsub"),
          a = e(".style_fn_leftpanel .group__list > li"),
          o = e(".style_fn_content");

        function n() {
          o.on("mouseenter", function () {
            t.removeClass("opened"),
              a
                .removeClass("hovered")
                .parent()
                .removeClass("hovered");
          });
        }
        a.on("mouseenter", function () {
          var o = e(this),
            s = o.children("ul.sub-menu"),
            i = s.html();
          s.length
            ? (a.removeClass("hovered"),
              o.addClass("hovered").parent().addClass("hovered"),
              t.removeClass("opened").children("ul").html("").html(i),
              t.addClass("opened"))
            : (a.removeClass("hovered"),
              t.removeClass("opened"),
              o
                .removeClass("hovered")
                .parent()
                .removeClass("hovered"));
          var r = o.offset().top,
            l = e(".style_fn_leftpanel .leftpanel_content").offset()
              .top;
          t.css({
            top: r - l
          }),
            n();
        }),
          n();
      },
      panelResize: function () {
        var t = e("html");
        e(".style_fn_leftpanel .desktop_closer")
          .off()
          .on("click", function () {
            return (
              t.hasClass("panel-opened")
                ? (t.removeClass("panel-opened"),
                  (localStorage.custom_panel = ""))
                : (t.addClass("panel-opened"),
                  (localStorage.custom_panel = "panel-opened")),
              !1
            );
          }),
          e(".style_fn_leftpanel .mobile_closer")
            .off()
            .on("click", function () {
              return (
                t.hasClass("mobile-panel-opened")
                  ? t.removeClass("mobile-panel-opened")
                  : t.addClass("mobile-panel-opened"),
                !1
              );
            });
      },
      redetectFullScreen: function () {
        var t = e(".fn__nav_bar .bar__item_fullscreen a");
        window.innerHeight === screen.height
          ? t.addClass("full_screen")
          : t.removeClass("full_screen");
      },
      fullSCreen: function () {
        var t = e(".fn__nav_bar .bar__item_fullscreen a");
        t.off().on("click", function () {
          return (
            t.hasClass("full_screen")
              ? (t.removeClass("full_screen"),
                document.exitFullscreen
                  ? document.exitFullscreen()
                  : document.msExitFullscreen
                  ? document.msExitFullscreen()
                  : document.mozCancelFullScreen
                  ? document.mozCancelFullScreen()
                  : document.webkitExitFullscreen &&
                    document.webkitExitFullscreen())
              : (t.addClass("full_screen"),
                document.documentElement.requestFullscreen
                  ? document.documentElement.requestFullscreen()
                  : document.documentElement.msRequestFullscreen
                  ? document.documentElement.msRequestFullscreen()
                  : document.documentElement.mozRequestFullScreen
                  ? document.documentElement.mozRequestFullScreen()
                  : document.documentElement
                      .webkitRequestFullscreen &&
                    document.documentElement.webkitRequestFullscreen(
                      Element.ALLOW_KEYBOARD_INPUT
                    )),
            !1
          );
        });
      },
      navBarItems: function () {
        var t = e(".fn__nav_bar .bar__item_user");
        t.find(".user_opener").on("click", function (a) {
          return (
            a.stopPropagation(),
            t.hasClass("opened")
              ? t.removeClass("opened")
              : t.addClass("opened"),
            e(
              ".bar__item_language,.bar__item_notification"
            ).removeClass("opened"),
            !1
          );
        }),
          t.on("click", function (e) {
            e.stopPropagation();
          }),
          e(window).on("click", function () {
            t.removeClass("opened");
          }),
          e(".fn__nav_bar .bar__item_skin .item_opener")
            .off()
            .on("click", function () {
              return (
                "light" === e("html").attr("data-style-skin")
                  ? (e("html").attr("data-style-skin", "dark"),
                    (localStorage.mode = "dark"))
                  : (e("html").attr("data-style-skin", "light"),
                    (localStorage.mode = "light")),
                e(
                  ".bar__item_user,.bar__item_language,.bar__item_notification"
                ).removeClass("opened"),
                !1
              );
            });
        var a = e(".fn__nav_bar .bar__item_language");
        a.find(".item_opener").on("click", function (t) {
          return (
            t.stopPropagation(),
            a.hasClass("opened")
              ? a.removeClass("opened")
              : a.addClass("opened"),
            e(".bar__item_user,.bar__item_notification").removeClass(
              "opened"
            ),
            !1
          );
        }),
          a.on("click", function (e) {
            e.stopPropagation();
          }),
          e(window).on("click", function () {
            a.removeClass("opened");
          });
        var o = e(".fn__nav_bar .bar__item_notification");
        o.find(".item_opener").on("click", function (t) {
          return (
            t.stopPropagation(),
            o.hasClass("opened")
              ? o.removeClass("opened")
              : o.addClass("opened"),
            e(".bar__item_user,.bar__item_language").removeClass(
              "opened"
            ),
            !1
          );
        }),
          o.on("click", function (e) {
            e.stopPropagation();
          }),
          e(window).on("click", function () {
            o.removeClass("opened");
          });
      },
      navSubMenu: function () {
        e(".style_fn_leftpanel .menu-item-has-children > a")
          .off()
          .on("click", function () {
            var t = e(this).closest("li");
            return (
              t.hasClass("closed")
                ? (t.removeClass("closed"),
                  t.children("ul").slideDown(200))
                : (t.addClass("closed"),
                  t.children("ul").slideUp(200)),
              !1
            );
          });
      }
    };
  e(document).ready(function () {
    r.init();
  }),
    e(window).on("scroll", function () {
      e(":root").css("--style-scroll-y", -1 * window.scrollY + "px");
    });
})(jQuery);
