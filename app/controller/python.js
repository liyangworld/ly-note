'use strict';
/**
 * Created by liyang on 2017-08-06.
 */
var makeController = require('../utils/makeController');

const viewDir = 'python';
const actions = [
    {name:'index',hasAction:'',dir:''},
    {name:'module',hasAction:'module',dir:'summary'},

    {name:'grammar',hasAction:'grammar',dir:'grammar'},
    {name:'dataType',hasAction:'dataType',dir:'grammar'},
    {name:'operator',hasAction:'operator',dir:'grammar'},
    {name:'builtinFn',hasAction:'builtinFn',dir:'grammar'},
    {name:'number',hasAction:'number',dir:'grammar'},
    {name:'string',hasAction:'string',dir:'grammar'},
    {name:'stringFn',hasAction:'stringFn',dir:'grammar'},
    {name:'list',hasAction:'list',dir:'grammar'},
    {name:'tuple',hasAction:'tuple',dir:'grammar'},
    {name:'dict',hasAction:'dict',dir:'grammar'},
    {name:'set',hasAction:'set',dir:'grammar'},
    {name:'function',hasAction:'function',dir:'grammar'},
    {name:'functionHigh',hasAction:'functionHigh',dir:'grammar'},
    {name:'itergener',hasAction:'itergener',dir:'grammar'},
    {name:'error',hasAction:'error',dir:'grammar'},
    {name:'with',hasAction:'with',dir:'grammar'},

    {name:'class',hasAction:'class',dir:'oop'},
    {name:'private',hasAction:'private',dir:'oop'},
    {name:'extends',hasAction:'extends',dir:'oop'}
];

module.exports = app => {
    class pythonController extends app.Controller {}
    makeController.makeActions(pythonController,viewDir,actions);
    return pythonController;
};