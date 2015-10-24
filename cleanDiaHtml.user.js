// ==UserScript==
// @name         Clean DIA HTML
// @namespace    tag:tbitai.github.io,2015-10-24:Clean_DIA_HTML
// @version      1.0
// @author       Tamás Bitai
// @description  Digitális Irodalmi Akadémia HTML tisztító (e-könyv készítéshez)
// @include      http://dia.jadox.pim.hu/jetspeed/*
// @require      http://code.jquery.com/jquery-2.1.4.min.js
// ==/UserScript==

$('span.oldaltores').remove();
