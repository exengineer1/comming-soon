/*
* iSOON - Ideal Coming Soon Template
* Release Date: April 2017
* Last Update: April 2017
* Author: Madeon08
* Copyright (C) 2017 Madeon08
* This is a premium product available exclusively here : http://themeforest.net/user/Madeon08/portfolio
*/

/*  TABLE OF CONTENTS
    ---------------------------
    1. Loading / Opening
    2. Canvas
*/

/* ------------------------------------- */
/* 1. Loading / Opening ................ */
/* ------------------------------------- */

$(window).load(function() {
    "use strict";

    $("#fullpage , #fp-nav , #menu-access , .social-footer").css("opacity", "0");
    $("#fullpage").css("top", "100vh");
    setTimeout(function() {
        $("#loading").fadeOut();
    }, 1000);
    setTimeout(function() {
        $("#fullpage").css({
            top: "0",
            opacity: "1"
        });
    }, 1500);
    setTimeout(function() {
        $("#fp-nav , #menu-access , .social-footer").css("opacity", "1");
    }, 2210);
});

$(document).ready(function() {
    "use strict";

    /* ------------------------------------- */
    /* 2. Canvas ........................... */
    /* ------------------------------------- */

    (function(n) {
        var r = n("#bg").children("canvas"),
            y = r[0],
            C = r[1],
            D = r[2],
            E = [157, 97, 207],
            F = [255, 255, 255];
        if (y.getContext) {
            var d = y.getContext("2d"),
                t = C.getContext("2d"),
                p = D.getContext("2d"),
                m = Math,
                u = 20 / 360 * m.PI * 2,
                v = [],
                w = [],
                c, f, x;
            requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(a, c) {
                setTimeout(a, 1000 / 60);
            };
            cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame || clearTimeout;
            var z = function() {
                    c = n(window).width();
                    f = n(window).height();
                    r.each(function() {
                        this.width = c;
                        this.height = f;
                    });
                },
                A = function() {
                    var a = m.sin(u),
                        g = m.cos(u);
                    t.clearRect(0, 0, c, f);
                    for (var d = 0, n = v.length; d < n; d++) {
                        var e = v[d],
                            h = e.x,
                            k = e.y,
                            b = e.radius,
                            l = e.speed,
                            h = h > c + b ? -b : h < -b ? c + b : h + a * l,
                            k = k > f + b ? -b : k < -b ? f + b : k - g * l;
                        e.x = h;
                        e.y = k;
                        var l = e.color,
                            e = e.alpha,
                            q = t.createRadialGradient(h, k, b, h, k, 0);
                        q.addColorStop(0, "rgba(" + l[0] + "," + l[1] + "," + l[2] + "," + e + ")");
                        q.addColorStop(1, "rgba(" + l[0] + "," + l[1] + "," + l[2] + "," + (e - 0.1) + ")");
                        t.beginPath();
                        t.arc(h, k, b, 0, 2 * m.PI, !0);
                        t.fillStyle = q;
                        t.fill();
                    }
                    p.clearRect(0, 0, c, f);
                    d = 0;
                    for (n = w.length; d < n; d++) {
                        e = w[d];
                        h = e.x;
                        k = e.y;
                        b = e.width;
                        l = e.speed;
                        h = h > c + b * a ? -b * a : h < -b * a ? c + b * a : h + a * l;
                        k = k > f + b * g ? -b * g : k < -b * g ? f + b * g : k - g * l;
                        e.x = h;
                        e.y = k;
                        var q = b,
                            b = e.color,
                            e = e.alpha,
                            l = h + m.sin(u) * q,
                            q = k - m.cos(u) * q,
                            r = p.createLinearGradient(h, k, l, q);
                        r.addColorStop(0, "rgba(" + b[0] + "," + b[1] + "," + b[2] + "," + e + ")");
                        r.addColorStop(1, "rgba(" + b[0] + "," + b[1] + "," + b[2] + "," + (e - 0.1) + ")");
                        p.beginPath();
                        p.moveTo(h, k);
                        p.lineTo(l, q);
                        p.lineWidth = 3;
                        p.lineCap = "round";
                        p.strokeStyle = r;
                        p.stroke();
                    }
                    x = requestAnimationFrame(A);
                },
                B = function() {
                    v = [];
                    w = [];
                    for (var a = 0; 6 > a; a++) {
                        for (var g = 0; 3 > g; g++) {
                            v.push({
                                x: m.random() * c,
                                y: m.random() * f,
                                radius: m.random() * (20 + 5 * g) + (20 + 5 * g),
                                color: E,
                                alpha: 0.2 * m.random() + (0.3 - 0.1 * g),
                                speed: 0.5 * (1 + 0.5 * g)
                            });
                        }
                    }
                    for (a = 0; 4 > a; a++) {
                        for (g = 0; 3 > g; g++) {
                            w.push({
                                x: m.random() * c,
                                y: m.random() * f,
                                width: m.random() * (20 + 5 * g) + (20 + 5 * g),
                                color: F,
                                alpha: 0.2 * m.random() + (0.3 - 0.1 * g),
                                speed: 0.5 * (1 + 0.5 * g)
                            });
                        }
                    }
                    cancelAnimationFrame(x);
                    x = requestAnimationFrame(A);
                    d.clearRect(0, 0, c, f);
                    a = [];
                    a[0] = d.createRadialGradient(0.3 * c, 0.1 * f, 0, 0.3 * c, 0.1 * f, 0.9 * c);
                    a[0].addColorStop(0, "rgb(0, 26, 77)");
                    a[0].addColorStop(1, "transparent");
                    d.translate(c, 0);
                    d.scale(-1, 1);
                    d.beginPath();
                    d.fillStyle = a[0];
                    d.fillRect(0, 0, c, f);
                    a[1] = d.createRadialGradient(0.1 * c, 0.1 * f, 0, 0.3 * c, 0.1 * f, c);
                    a[1].addColorStop(0, "rgb(0, 150, 240)");
                    a[1].addColorStop(0.8, "transparent");
                    d.translate(c, 0);
                    d.scale(-1, 1);
                    d.beginPath();
                    d.fillStyle = a[1];
                    d.fillRect(0, 0, c, f);
                    a[2] = d.createRadialGradient(0.1 * c, 0.5 * f, 0, 0.1 * c, 0.5 * f, 0.5 * c);
                    a[2].addColorStop(0, "rgb(40, 20, 105)");
                    a[2].addColorStop(1, "transparent");
                    d.beginPath();
                    d.fillStyle = a[2];
                    d.fillRect(0, 0, c, f);
                };
            n(document).ready(function() {
                z();
                B();
            });
            n(window).resize(function() {
                z();
                B();
            });
        }
    })(jQuery);
});