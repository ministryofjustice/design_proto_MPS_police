// var express = require('express')
// var router = express.Router()

var express = require('express')
var fs = require('fs')
var marked = require('marked')
var path = require('path')
var router = express.Router()
var utils = require('../lib/utils.js')


// Route index page
router.get('/', function (req, res) {
  res.render('index')
})
// add your routes here

// router.get('/dashboard_automation', function (req, res) {
//   res.render('dashboard_automation', { 'date': '02/02/2020'} );
// })

// Passing data into a page

router.get('/examples/template-data', function (req, res) {
  res.render('examples/template-data', { 'name': 'Foo' })
})

// router.get( '/profile', function( req, res ) {
//   var data = {
//     firstName: 'Andy',
//     lastName: 'Neale'
//   } ;
//   console.log('from the router');
//   res.render( 'profile', { data });
// } ) ;

// router.get( '/dashboard_automation', function( req, res ) {
//   // var data = {
//   //   selfharm : 'Maybe No'
//   // } ;
//   console.log('from the router');
//   res.render( 'dashboard_automation', { 'selfharm' : 'Maybe No' });
// } ) ;
// selfharm : 'No',
// csra : 'Standard',
// rule45 : 'No',
// vulnerable : 'No',
// controlledunlock : 'No',
// publicInterest : 'Yes',
// publicInterest_info : 'High Public Interest (10-Apr-17) Pot Cat A Offence not submitted as criteria not met',
// intimidator_public : 'Yes',
// intimidator_public_info : 'Violent (8-Sep-14) threatend partner with a knife ,common ass , murder common law26/08/99 , threats to kill robbery manslaughter abh , handgun knife p/p. Domestic Violence Perpetrator (12-Dec-17) As stated on OASys dated - 10/04/17',
// intimidator_prisoners : 'No',
// gangs : 'No',
// violent_to_staff : 'No',
// risktofemales : 'No',
// homosexuals : 'No',
// racist : 'No',
// religions : 'No',
// violent_risk_to_othergroups : 'Yes',
// violent_risk_to_othergroups_info : 'MAPPA Level 1 (3-Apr-17) LR states Mappa Level. OASys Serious Harm-High (9-Sep-14) Last oasys dated 08/09/14 states high risk to known adult',
// elist : 'No',
// escape_attempts : 'No',
// hostage_taker : 'No',
// sex_offender : 'No',
// arson : 'No',

module.exports = router
