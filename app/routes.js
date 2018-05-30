// var express = require('express')
// var router = express.Router()

var express = require('express')
var fs = require('fs')
var marked = require('marked')
var path = require('path')
var router = express.Router()
var utils = require('../lib/utils.js')

//
function getDate(){
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  if(dd<10) {
    dd = '0'+dd
  }
  if(mm<10) {
    mm = '0'+mm
  }
  today = dd + '/' + mm + '/' + yyyy;
  return today;
}

// Route index page
router.get('/', function (req, res) {
  var data = {
  } ;
  res.render('index', { data });
})
// router.get('/health_09', function (req, res) {
//   var data = {
//       contact_details: '0123456789'
//     } ;
//   res.render('health_09', { data });
// })
// add your routes here

// router.get('/dashboard_automation', function (req, res) {
//   var test = getDate();
//   req.session.data.test = test;
//   res.render('dashboard_automation', { 'date': test} );
// })

// router.get('/dashboard_police_empty', function (req, res) {
//   var date = getDate();
//   //  req.session.data.test = test;
//   var data = {
//     dateoftravel: date
//   } ;
//   res.render('dashboard_police_empty', { data });
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
