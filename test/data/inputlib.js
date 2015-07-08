'use strict';


//--------//
// Inputs //
//--------//

var ops = ['>', '<', '+', '-', '*', '/', '%', '&', '|', '^', '?', ':'];
var operator_position = {
    comprehensive_simple: [
        'var res = a + b - c / d * e % f;',
        'var res = g & h | i ^ j;',
        'var res = (k && l || m) ? n : o;',
        'var res = p >> q << r >>> s;',
        'var res = t === u !== v != w == x >= y <= z > aa < bb;'
    ],
    comprehensive_newlines: [
        'var res = a + b',
        '- c /',
        'd  *     e',
        '%',
        'f;',
        '   var res = g & h',
        '| i ^',
        'j;',
        'var res = (k &&',
        'l',
        '|| m) ?',
        'n',
        ': o',
        ';',
        'var res = p',
        '>> q <<',
        'r',
        '>>> s;',
        'var res',
        '  = t',
        '',
        ' === u !== v',
        ' !=',
        'w',
        '== x >=',
        'y <= z > aa <',
        'bb;'
    ],
    colon_special_case: [
        'var a = {',
        '    b',
        ': bval,',
        '    c: cval',
        '};',
        'var d = e ? f : g;'
    ],
    catch_all: [
        'var d = 1;',
        'if (a === b',
        '    && c) {',
        '    d = (c * everything',
        '            / something_else) %',
        '        b;',
        '    e',
        '        += d;',
        '',
        '} else if (!(complex && simple) ||',
        '    (emotion && emotion.name === "happy")) {',
        '    cryTearsOfJoy(many ||',
        '        anOcean ||',
        '        aRiver);',
        '}'
    ]
};


//---------//
// Exports //
//---------//

module.exports = {
    operator_position: operator_position
}
