// ==UserScript==
// @name         Clean DIA HTML
// @namespace    http://tbitai.github.io/clean-dia-html/
// @version      1.0
// @author       Tamás Bitai
// @description  Digitális Irodalmi Akadémia HTML tisztító (e-könyv készítéshez)
// @include      http://dia.jadox.pim.hu/jetspeed/*
// @require      http://code.jquery.com/jquery-2.1.4.min.js
// ==/UserScript==

$('span.oldaltores').remove();
