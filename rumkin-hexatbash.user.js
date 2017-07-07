// ==UserScript==
// @name         Rumkin HexAtbash
// @version      0.1
// @description  letter-pair replacement solver - hex atbash helper
// @author       Ninjaburger
// @updateURL    https://raw.githubusercontent.com/Ninjaburger/userscripts/master/rumkin-hexatbash.user.js
// @downloadURL  https://raw.githubusercontent.com/Ninjaburger/userscripts/master/rumkin-hexatbash.user.js
// @match        http://rumkin.com/tools/cipher/cryptogram.php?hexatbash
// @require      http://code.jquery.com/jquery-latest.min.js
// ==/UserScript==

(function() {
    'use strict';
    $(document).ready(function() {
        var idx = '0123456789ABCDEF';
        var rev = idx.split('').reverse().join('');

        for(var i = 0; i < idx.length; i++) $('input[name=\'L_' + idx.charAt(i) + '\']').val(rev.charAt(i));

        RecalcAlphabet();
    });
})();
