// Math Battle

(function(R, r) {
    function g(a) { return "string" == typeof a ? r.getElementById(a) : a }

    function S(a) { return (a || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "") }

    function y(a, b) { return (a = g(a)) && (new RegExp("(\\s|^)" + b + "(\\s|$)")).test(a.className) }

    function t(a, b) {
        (a = g(a)) && !y(a, b) && (a.className = S(a.className + " " + b))
    }

    function w(a, b) {
        (a = g(a)) && y(a, b) && (a.className = S(a.className.replace(new RegExp("(\\s+|^)" + b + "(\\s+|$)"), " ")))
    }

    function z(a, b, c) {
        ("undefined" == typeof c ? y(a, b) : !c) ? w(a, b): t(a, b)
    }

    function p(a, b, c) {
        if (a =
            g(a), c = c || rf, a && 3 != a.nodeType && 8 != a.nodeType) {
            a.setInterval && a != R && (a = R);
            b = b.split(" ");
            for (var d = 0, f = b.length; f > d; d++) {
                var e = b[d];
                a.addEventListener ? a.addEventListener(e, c, !1) : a.attachEvent && a.attachEvent("on" + e, c)
            }
        }
    }

    function l(a, b) { return Math.floor(Math.random() * (b - a + 1) + a) }

    function T() {
        var a = l(1, 4E3) % 4;
        var b = 500 >= l(1, 1E3);
        hard = 30 < u;
        a = ["+", "\u2013", "\u00d7", "/"][a];
        switch (a) {
            case "+":
            case "\u2013":
                if ("+" == a) { var c = l(hard ? 10 : 0, hard ? 200 : 100); var d = l(hard ? 10 : 0, hard ? 200 : 100); var f = c + d } else f = l(hard ?
                    10 : 0, hard ? 200 : 100), d = l(hard ? 10 : 0, hard ? 200 : 100), c = f + d;
                if (!b) {
                    var e = Math.min(c, d);
                    e = Math.min(e, f);
                    (e = l(-e, e)) || e++;
                    f += e
                }
                break;
            case "\u00d7":
            case "/":
                "\u00d7" == a ? (c = l(hard ? 3 : 1, hard ? 20 : 10), d = l(hard ? 3 : 1, hard ? 20 : 10), f = c * d) : (f = l(hard ? 3 : 1, hard ? 20 : 10), d = l(hard ? 3 : 1, hard ? 20 : 10), c = f * d), b || (e = Math.min(c, d), e = Math.min(e, f), (e = l(-e, e)) || e++, f += e)
        }
        return { x: c, op: a, y: d, res: f, correct: b }
    }

    function U() {
        clearTimeout(F);
        V(!0);
        x && (F = setTimeout(U, 30))
    }

    function V(a, b) {
        if (0 < v - +new Date) return G(b);
        clearTimeout(F);
        x = !1;
        a ? W() :
            G(b, function() { W() })
    }

    function H() {
        var a = +u || "0";
        ha.innerHTML = a;
        ia.innerHTML = a
    }

    function I() { m && (ja.innerHTML = +m.x || "0", ka.innerHTML = m.op || "", la.innerHTML = +m.y || "0", ma.innerHTML = +m.res || "0") }

    function na() {
        clearTimeout(X);
        t(Y, "tossing");
        X = setTimeout(function() { w(Y, "tossing") }, 350)
    }

    function G(a, b) {
        var c = (v - +new Date) / 1E4;
        0 > c && (c = 0);
        1 < c && (c = 1);
        a && (clearTimeout(Z), t(J, "animated"), Z = setTimeout(function() { w(J, "animated") }, 150));
        J.style.right = 100 - 100 * c + "%";
        b && setTimeout(b, 300)
    }

    function aa() {
        if (h && h.length)
            for (var a =
                    0; a < h.length; a++) { var b = h[a]; if (b.current) { ba = b.score; break } }
    }

    function K() {
        if (!1 !== h && n) {
            for (var a = "", b = 0; b < h.length; b++) {
                var c = h[b];
                a += '<li class="row' + (c.current ? " you" : "") + '"><span class="place">' + c.pos + '.</span><span class="score">' + c.score + '</span><div class="name">' + c.name + "</div></li>"
            }
            oa.innerHTML = a;
            0 < h.length ? t(ca, "opened") : w(ca, "opened")
        }
    }

    function L() {
        z(M, "in_greet", !A);
        z(M, "in_game", !n);
        z(M, "in_result", n)
    }

    function N() {
        x = A = !0;
        n = !1;
        m = T();
        v = +new Date + 1E4;
        u = 0;
        B = !1;
        U();
        H();
        I();
        G();
        L();
        z(O, "shown",
            B)
    }

    function da(a, b, c) {
        var d = new XMLHttpRequest,
            f = [],
            e;
        for (e in b) f.push(encodeURIComponent(e) + "=" + encodeURIComponent(b[e]));
        d.onreadystatechange = function() { 4 == d.readyState && 200 == d.status && c(JSON.parse(d.responseText)) };
        d.open("POST", a, !0);
        d.send(f.join("&"))
    }

    function pa() {
        q && da("/api/setScore", { data: q, score: u || 0 }, function(a) {
            h = a.scores;
            aa();
            K();
            a["new"] && n && (B = !0, z(O, "shown", B))
        })
    }

    function ea() {
        q && da("/api/getHighScores", { data: q }, function(a) {
            h = a.scores;
            aa();
            K()
        })
    }

    function W() {
        if (!n) {
            n = !0;
            a: {
                var a =
                    u;
                if (C && a) {
                    h || (h = []);
                    for (var b = 0, c = 0; c < h.length; c++) {
                        var d = h[c];
                        if (d.current) {
                            if (d.score >= a) break a;
                            b = d.pos;
                            break
                        }
                    }
                    b || (b = d ? d.pos + 1 : 1, h.push({ pos: b, score: 0, name: C, current: !0 }));
                    var f = !1;
                    for (c = 0; c < h.length; c++)
                        if (d = h[c], f)
                            if (d.pos <= b) f.pos++, h[c] = f, f = d;
                            else break;
                    else a > d.score && (h[c] = { pos: d.pos, score: a, name: C, current: !0 }, f = d)
                }
            }
            K();
            u > ba ? pa() : ea();
            L()
        }
    }

    function D(a) { x && (!a === !m.correct ? (v += 1500, 1E4 < v - +new Date && (v = +new Date + 1E4), u++, H()) : (v -= 4E3, na()), V(!1, !a !== !m.correct), m = T(), I()) }

    function P(a) {
        t(a,
            "hover");
        setTimeout(function() { w(a, "hover") }, 100)
    }
    var v, F, A = !1,
        x = !1,
        n = !0,
        m, h = !1,
        u = 0,
        B, q = (location.hash || "").substr(1);
    q = q.replace(/[\?&].*/g, "");
    var ba = 0,
        C = !1;
    if (q) try {
        var E = decodeURIComponent(escape(atob(q)));
        C = JSON.parse(E.substr(0, E.length - 32)).n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\n/g, "<br>")
    } catch (a) {}
    var ha = g("score_value"),
        ia = g("result_score_value"),
        O = g("score_share"),
        Y = g("task"),
        ja = g("task_x"),
        ka = g("task_op"),
        la = g("task_y"),
        ma = g("task_res"),
        J = g("timeline_progress"),
        oa = g("table"),
        ca = g("table_wrap"),
        M = g("page_wrap");
    E = g("game_title");
    var Q = g("button_correct"),
        fa = g("button_wrong"),
        X, Z;
    p(E, "click", function() { A || N() });
    p(Q, "click", function() {!A || n ? N() : D(!0) });
    p(fa, "click", function() { x && D(!1) });
    p(O, "click", function() { B && TelegramGameProxy && TelegramGameProxy.shareScore() });
    p(r, "keydown", function(a) {
        a.preventDefault();
        a = a.which || a.keyCode;
        x ? (37 == a && (P(Q), D(!0)), 39 == a && (P(fa), D(!1))) : A && !n || 32 != a || (P(Q), N())
    });
    H();
    I();
    L();
    ea();
    var k = {
        obj: null,
        start: function(a) { a.touches && 1 == a.touches.length && (k.end(a), k.obj = this || null, k.obj && t(k.obj, "hover")) },
        cancel: function(a) { k.obj && k.end(a) },
        end: function() { k.obj && (w(k.obj, "hover"), k.obj = null, k.highlight = !1) },
        check: function(a) {
            if (!a) return !1;
            do
                if (y(a, "button") || y(a, "score_share")) return a;
            while (a = a.parentNode);
            return !1
        }
    };
    p(r, "touchmove touchcancel", k.cancel);
    p(r, "touchend", k.end);
    p(r, "touchstart", function(a) {
        var b = k.check(a.target);
        b && k.start.call(b, a)
    });
    "ontouchstart" in
    r || t(r.body, "_hover")
})(window, document);