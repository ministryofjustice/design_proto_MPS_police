var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
  console.log()
});

//// attempt to get post and seesion cookie working

// router.post('/health_03', function (req, res) {
//   var physical_health = req.body['physical_health'];
//   console.log('day = ' + physical_health);
//   req.session.physical_health = physical_health;
//   console.log(req.session);
//   console.log('health_03');
//   res.render('health_03')
// })


// add your routes here
// MPS routes
// HEALTH section
router.get('/health_03', function(req, res) {
  var physical_health = req.query['physical_health'];
  req.session.physical_health = physical_health;
  var physical_health_info = req.query['physical_health_info'];
  req.session.physical_health_info = physical_health_info;
  console.log('health_03');
  res.render('health_03')
})
router.get('/health_04', function(req, res) {
  var mental_health = req.query['mental_health'];
  req.session.mental_health = mental_health;
  var mental_health_info = req.query['mental_health_info'];
  req.session.mental_health_info = mental_health_info;
  console.log('health_04');
  res.render('health_04')
})
//special_vehicle
router.get('/health_05', function(req, res) {
  var special_vehicle = req.query['special_vehicle'];
  req.session.special_vehicle = special_vehicle;
  var special_vehicle_info = req.query['special_vehicle_info'];
  req.session.special_vehicle_info = special_vehicle_info;
  console.log('health_05');
  res.render('health_05')
})
// medicine
router.get('/health_06', function(req, res) {
  var medicine = req.query['medicine'];
  req.session.medicine = medicine;
  var medicine_name = req.query['medicine_name'];
  req.session.medicine_name = medicine_name;
  var medicine_howgiven = req.query['medicine_howgiven'];
  req.session.medicine_howgiven = medicine_howgiven;
  //medicine_dosage
  var medicine_dosage = req.query['medicine_dosage'];
  req.session.medicine_dosage = medicine_dosage;
  //medicine_dosagefrequency
  var medicine_dosagefrequency = req.query['medicine_dosagefrequency'];
  req.session.medicine_dosagefrequency = medicine_dosagefrequency;
  var medicine_carriedby = req.query['medicine_carriedby'];
  console.log('medicine_carriedby: '  +  medicine_carriedby);
  if (medicine_carriedby == 'Escort' || medicine_carriedby == 'Prisoner') {
    medicine_carriedby = ' | Carried by:' + medicine_carriedby;
  } else {
    medicine_carriedby = ''
  }
  req.session.medicine_carriedby = medicine_carriedby;
  console.log('medicine_carriedby: '  +  medicine_carriedby);
  console.log("req.session.medicine_carriedby = " + req.session.medicine_carriedby);
  console.log('health_06');
  res.render('health_06')
})

// dependencies
router.get('/health_07', function(req, res) {
  var dependencies = req.query['dependencies'];
  req.session.dependencies = dependencies;
  var dependencies_info = req.query['dependencies_info'];
  req.session.dependencies_info = dependencies_info;
  console.log('health_07');
  res.render('health_07')
})

//allergies
router.get('/health_08', function(req, res) {
  var allergies = req.query['allergies'];
  req.session.allergies = allergies;
  var allergies_info = req.query['allergies_info'];
  req.session.allergies_info = allergies_info;
  console.log('health_08');
  res.render('health_08')
})

//personalcare
router.get('/health_09', function(req, res) {
  var personalcare = req.query['personalcare'];
  req.session.personalcare = personalcare;
  var personalcare_info = req.query['personalcare_info'];
  req.session.personalcare_info = personalcare_info;
  console.log('health_09');
  res.render('health_09')
})

//contact
router.get('/check-your-answers-health', function(req, res) {
  var contact_details = req.query['contact_details']
  if (contact_details == ''){
    contact_details = '01234 567 890'
  }
  req.session.contact_details = contact_details;
  // var manualcontact = req.query['manualcontact'];
  // if (manualcontact != '') {
  //   contact_details = manualcontact;
  // }
  // req.session.contact_details = contact_details;
  console.log('check-your-answers-health');
  res.render('check-your-answers-health')
})

// RISK section
router.get('/risk_02', function (req, res) {
  var acct = req.query['radio-inline-group'];
  req.session.acct = acct;
  var acctsixmonths_info = req.query['acctsixmonths_info'];
  req.session.acctsixmonths_info = acctsixmonths_info;
  var acctday = req.query['acctday'] + '/';
  req.session.acctday = acctday;
  var acctmonth = req.query['acctmonth'] + '/';
  req.session.acctmonth = acctmonth;
  var acctyear = req.query['acctyear'] + '. ';
  req.session.acctyear = acctyear;
  if (acct != "Closed") {
    req.session.acctday = '';
    req.session.acctmonth = '';
    req.session.acctyear = '';
  }
  // section answer for printout
  var risktoself = 'No'
  if (acct == 'Open' || acct == "Post closure") {
    risktoself = 'Yes'
  }
  req.session.risktoself = risktoself;

  // selfharm
  var selfharm = req.query['selfharm'];
  req.session.selfharm = selfharm;
  var selfharm_info = req.query['selfharm_info'];
  req.session.selfharm_info = selfharm_info;
  //

  res.render ('risk_02');
  console.log('---------------------console: ' + req.session.acct);
})

router.get('/risk_03', function (req, res) {
  // CSRA
  var csra = req.query['csra'];
  req.session.csra = csra;
  var rule45 = req.query['rule45'];
  req.session.rule45 = rule45;
  //vulnerable
  var vulnerable = req.query['vulnerable'];
  req.session.vulnerable = vulnerable;
  var vulnerable_info = req.query['vulnerable_info'];
  req.session.vulnerable_info = vulnerable_info;
  res.render ('risk_03');
  console.log('---------------------console: ' + req.originalUrl);
})

router.get('/risk_04', function (req, res) {
  // controlledunlock
  var controlledunlock = req.query['controlledunlock'];
  req.session.controlledunlock = controlledunlock;
  var controlledunlock_state = req.query['controlledunlock_state'];
  req.session.controlledunlock_state = controlledunlockUndefined(controlledunlock_state);
  var controlledunlock_info = req.query['controlledunlock_info'];
  req.session.controlledunlock_info = controlledunlock_info;
  //cata
  var cata = req.query['cata'];
  req.session.cata = cata;
  //
  var publicInterest = req.query['publicInterest'];
  req.session.publicInterest = publicInterest;
  var publicInterest_info = req.query['publicInterest_info'];
  req.session.publicInterest_info = publicInterest_info;
  //
  var pnc = req.query['pnc'];
  req.session.pnc = pnc;
  var pnc_info = req.query['pnc_info'];
  req.session.pnc_info = pnc_info;
  //
  res.render ('risk_04');
  console.log('---------------------console: ' + req.originalUrl);
})


router.get('/risk_05', function (req, res) {
  //intimidator
  var intimidator = req.query['intimidator'];
  req.session.intimidator = intimidator;
  //intimidator_staff
  var intimidator_staff = req.query['intimidator_staff'];
  req.session.intimidator_staff = ifundefined(intimidator_staff);
  var intimidator_staff_info = req.query['intimidator_staff_info'];
  req.session.intimidator_staff_info = intimidator_staff_info;
  //intimidator_public
  var intimidator_public = req.query['intimidator_public'];
  req.session.intimidator_public = ifundefined(intimidator_public);
  var intimidator_public_info = req.query['intimidator_public_info'];
  req.session.intimidator_public_info = intimidator_public_info;
  //intimidator_prisoners
  var intimidator_prisoners = req.query['intimidator_prisoners'];
  req.session.intimidator_prisoners = ifundefined(intimidator_prisoners);
  var intimidator_prisoners_info = req.query['intimidator_prisoners_info'];
  req.session.intimidator_prisoners_info = intimidator_prisoners_info;
  //intimidator_witnesses
  var intimidator_witnesses = req.query['intimidator_witnesses'];
  req.session.intimidator_witnesses = ifundefined(intimidator_witnesses);
  var intimidator_witnesses_info = req.query['intimidator_witnesses_info'];
  req.session.intimidator_witnesses_info = intimidator_witnesses_info;
  // gangs
  var gangs = req.query['gangs'];
  req.session.gangs = gangs;
  var gangs_info = req.query['gangs_info'];
  req.session.gangs_info = gangs_info;
  res.render ('risk_05');
  console.log('---------------------console: ' + req.originalUrl);
})

router.get('/risk_06', function (req, res) {
  // violent_to_staff
  var violent_to_staff = req.query['violent_to_staff'];
  req.session.violent_to_staff = violent_to_staff;
  // violent_to_staff_info
  var violent_to_staff_info = req.query['violent_to_staff_info'];
  req.session.violent_to_staff_info = violent_to_staff_info;

  //risktofemales
  var risktofemales = req.query['risktofemales'];
  req.session.risktofemales = risktofemales;
  var risktofemales_info = req.query['risktofemales_info'];
  req.session.risktofemales_info = risktofemales_info;
  // homosexuals
  var homosexuals = req.query['homosexuals'];
  req.session.homosexuals = homosexuals;
  var homosexuals_info = req.query['homosexuals_info'];
  req.session.homosexuals_info = homosexuals_info;
  // racist
  var racist = req.query['racist'];
  req.session.racist = racist;
  var racist_info = req.query['racist_info'];
  req.session.racist_info = racist_info;
  // racist
  var religions = req.query['religions'];
  req.session.religions = religions;
  var religions_info = req.query['religions_info'];
  req.session.religions_info = religions_info;
  // violent_risk_to_othergroups
  var violent_risk_to_othergroups = req.query['violent_risk_to_othergroups'];
  req.session.violent_risk_to_othergroups = violent_risk_to_othergroups;
  var violent_risk_to_othergroups_info = req.query['violent_risk_to_othergroups_info'];
  req.session.violent_risk_to_othergroups_info = violent_risk_to_othergroups_info;

  // section discrimination
  var discrimination = 'Yes';
  if (risktofemales != 'Yes' & homosexuals != 'Yes' & racist != 'Yes' & religions != 'Yes' & violent_risk_to_othergroups != 'yes')
  discrimination = 'No'
  req.session.discrimination = discrimination

  // // violent-to-detainees
  // var violent_to_detainees = req.query['violent_to_detainees']
  // req.session.violent_to_detainees = violent_to_detainees;
  // // co-defendant
  // var co_defendant = req.query['co_defendant'];
  // req.session.co_defendant = ifundefined(co_defendant);
  // var co_defendant_info = req.query['co_defendant_info'];
  // req.session.co_defendant_info = co_defendant_info;
  // //gang_member
  // var gang_member = req.query['gang_member'];
  // req.session.gang_member = ifundefined(gang_member);
  // var gang_member_info = req.query['gang_member_info'];
  // req.session.gang_member_info = gang_member_info;
  // //other_known_conflicts
  // var other_known_conflicts = req.query['other_known_conflicts'];
  // req.session.other_known_conflicts = ifundefined(other_known_conflicts);
  // var other_known_conflicts_info = req.query['other_known_conflicts_info'];
  // req.session.other_known_conflicts_info = other_known_conflicts_info;
  // // violent_general_public
  // var violent_general_public = req.query['violent_general_public'];
  // req.session.violent_general_public = violent_general_public;
  // var violent_general_public_info = req.query['violent_general_public_info'];
  // req.session.violent_general_public_info = violent_general_public_info;
  // section violent_risk_to_others
  // var violent_risk_to_others = 'Yes';
  // if (csra != 'High' || violent_to_staff !='Yes')
  // violent_risk_to_others = 'No';
  // req.session.violent_risk_to_others = violent_risk_to_others;
  //
  console.log('---------------------console: ' + req.originalUrl);
  res.render ('risk_06');
})
function controlledunlockUndefined(val){
  if(val == 'undefined' || val == undefined || val == ''){
    return ''
  } else {
    return val + '. '
  }
}
function noUserEntryCheck(val){
  if (val == '/' || val == '' || val == undefined) {val = ''};
  return val;
}
function giveMeNo(val){
  if (val != 'Yes') { val = 'No' };
  console.log('val:' + val );
  return val;
}
function ifundefined(val){
  if(val == undefined){
    return 'No'
  } else {
    return 'Yes'
  }
}
function datePrefixHostage(val){
  console.log('datePrefixHostage: ' + val);
  if(val == ''){
    return ''
  } else {
    return 'Last incident: ' + val
  }
}
// router.get('/index_automation', function (req, res) {
//   var elist = req.query['Maybe'];
//   req.session.elist = elist;
//   console.log('---------------------console: ' + req.originalUrl);
//   res.render ('index_automation');
// })
//
router.get('/risk_07', function (req, res) {
//elistinfo
var elistinfo = req.query['elistinfo'];
req.session.elistinfo = elistinfo;
  //elist
  var elist = req.query['elist'];
  req.session.elist = elist;
  var elist_state = req.query['elist_state'];
  req.session.elist_state = elist_state;
  //escape_attempt_prison
  var escape_attempt_prison = req.query['escape_attempt_prison'];
  req.session.escape_attempt_prison = ifundefined(escape_attempt_prison);
  var escape_risk_info = req.query['escape_risk_info'];
  req.session.escape_risk_info = escape_risk_info;
  //escort_risk_assessment
  var escort_risk_assessment = req.query['escort_risk_assessment'];
  req.session.escort_risk_assessment = escort_risk_assessment;
  var escort_risk_assessment_day = req.query['escort_risk_assessment_day'];
  req.session.escort_risk_assessment_day = escort_risk_assessment_day;
  var escort_risk_assessment_month = '/' + req.query['escort_risk_assessment_month'];
  req.session.escort_risk_assessment_month = noUserEntryCheck(escort_risk_assessment_month);
  var escort_risk_assessment_year = '/' + req.query['escort_risk_assessment_year'];
  req.session.escort_risk_assessment_year = noUserEntryCheck(escort_risk_assessment_year);
  //escape_pack
  var escape_pack = req.query['escape_pack'];
  req.session.escape_pack = escape_pack;
  var escape_pack_day = req.query['escape_pack_day'];
  req.session.escape_pack_day = escape_pack_day;
  var escape_pack_month = '/' + req.query['escape_pack_month'];
  req.session.escape_pack_month = noUserEntryCheck(escape_pack_month);
  var escape_pack_year = '/' + req.query['escape_pack_year'];
  req.session.escape_pack_year = noUserEntryCheck(escape_pack_year);
  var escape_attempts = req.query['escape_attempts'];
  req.session.escape_attempts = escape_attempts;
  //
  var further_security_docs = 'Yes'
  console.log('further_security_docs: ' + further_security_docs);
  if (escort_risk_assessment != 'Yes' || escape_pack != 'Yes') further_security_docs = 'No';
  req.session.further_security_docs = further_security_docs;
  console.log('session.further_security_docs: ' + req.session.further_security_docs);
  //
  var escape_history = 'Yes'
  console.log('escape_history: ' + escape_history);
  if (elist != 'Yes' & escape_attempts != 'Yes' & escort_risk_assessment != 'Yes' & escape_pack != 'Yes') escape_history = 'No';
  req.session.escape_history = escape_history;
  console.log('session.escape_history: ' + req.session.escape_history);
  console.log('---------------------console: ' + req.originalUrl);
  res.render ('risk_07');
})
router.get('/risk_08', function (req, res) {
  // hostage_taker
  var hostage_taker = req.query['hostage_taker'];
  req.session.hostage_taker = hostage_taker;
  var hostage_taker_info = req.query['hostage_taker_info'];
  req.session.hostage_taker_info = hostage_taker_info;
  //hostage_staff
  var hostage_staff = req.query['hostage_staff'];
  hostage_staff = giveMeNo(hostage_staff);
  req.session.hostage_staff = hostage_staff;
  var hostage_staff_day = req.query['hostage_staff_day'];
  hostage_staff_day = datePrefixHostage(hostage_staff_day);
  req.session.hostage_staff_day = hostage_staff_day;
  var hostage_staff_month = '/' + req.query['hostage_staff_month'];
  hostage_staff_month = noUserEntryCheck(hostage_staff_month);
  req.session.hostage_staff_month = hostage_staff_month;
  var hostage_staff_year = '/' + req.query['hostage_staff_year'];
  hostage_staff_year = noUserEntryCheck(hostage_staff_year);
  req.session.hostage_staff_year = hostage_staff_year;
  // hostage_prisoners
  var hostage_prisoners = req.query['hostage_prisoners'];
  hostage_prisoners = giveMeNo(hostage_prisoners);
  req.session.hostage_prisoners = hostage_prisoners;
  var hostage_prisoners_day = req.query['hostage_prisoners_day'];
  req.session.hostage_prisoners_day = datePrefixHostage(hostage_prisoners_day);
  var hostage_prisoners_month = '/' + req.query['hostage_prisoners_month'];
  hostage_prisoners_month = noUserEntryCheck(hostage_prisoners_month);
  req.session.hostage_prisoners_month = hostage_prisoners_month;
  var hostage_prisoners_year = '/' + req.query['hostage_prisoners_year'];
  hostage_prisoners_year = noUserEntryCheck(hostage_prisoners_year);
  req.session.hostage_prisoners_year = hostage_prisoners_year;
  //hostage_public
  var hostage_public = req.query['hostage_public'];
  hostage_public = giveMeNo(hostage_public);
  req.session.hostage_public = hostage_public;
  var hostage_public_day = req.query['hostage_public_day'];
  req.session.hostage_public_day = datePrefixHostage(hostage_public_day);
  var hostage_public_month = '/' + req.query['hostage_public_month'];
  hostage_public_month = noUserEntryCheck(hostage_public_month);
  req.session.hostage_public_month = hostage_public_month;
  var hostage_public_year = '/' + req.query['hostage_public_year'];
  hostage_public_year = noUserEntryCheck(hostage_public_year);
  req.session.hostage_public_year = hostage_public_year;
  var hostage_taker = req.query['hostage_taker'];
  if (hostage_taker == 'No') {
    req.session.hostage_staff = 'No';
    req.session.hostage_prisoners = 'No';
    req.session.hostage_public = 'No';
  }
  req.session.hostage_taker = hostage_taker;
  res.render ('risk_08');
  console.log('---------------------console: ' + req.originalUrl);
})

router.get('/risk_09', function (req, res) {
  //sex_offender
  var sex_offender = req.query['sex_offender'];
  req.session.sex_offender = sex_offender;
  var sex_offender_info = req.query['sex_offender_info'];
  req.session.sex_offender_info = sex_offender_info;
  //adult_male
  var adult_male = req.query['adult_male'];
  req.session.adult_male = ifundefined(adult_male);
  var adult_female = req.query['adult_female'];
  req.session.adult_female = ifundefined(adult_female);
  var under18 = req.query['under18'];
  req.session.under18 = ifundefined(under18);
  var under18_info = req.query['under18_info'];
  req.session.under18_info = under18_info;
  // var sex_offence_day = req.query['sex_offence_day'];
  // req.session.sex_offence_day = sex_offence_day;
  // var sex_offence_month = '/' + req.query['sex_offence_month'];
  // req.session.sex_offence_month = noUserEntryCheck(sex_offence_month);
  // var sex_offence_year = '/' + req.query['sex_offence_year'];
  // req.session.sex_offence_year = noUserEntryCheck(sex_offence_year);
  // if (sex_offender == 'No') req.session.sex_offence_day = 'None'
  console.log('---------------------console: ' + req.originalUrl);
  res.render ('risk_09');
})


router.get('/risk_10', function (req, res) {
  // creates_uses_weapons
  var creates_uses_weapons = req.query['creates_uses_weapons'];
  req.session.creates_uses_weapons = creates_uses_weapons;
  var creates_uses_weapons_info = req.query['creates_uses_weapons_info'];
  req.session.creates_uses_weapons_info = creates_uses_weapons_info;
  //conceals_weapons
  var conceals_weapons = req.query['conceals_weapons'];
  req.session.conceals_weapons = conceals_weapons;
  var conceals_weapons_info = req.query['conceals_weapons_info'];
  req.session.conceals_weapons_info = conceals_weapons_info;
  //conceals_drugs
  var conceals_drugs = req.query['conceals_drugs'];
  req.session.conceals_drugs = conceals_drugs;
  var conceals_drugs_info = req.query['conceals_drugs_info'];
  req.session.conceals_drugs_info = conceals_drugs_info;
  //conceals_drugs
  var conceals_mobles_et_al = req.query['conceals_mobles_et_al'];
  req.session.conceals_mobles_et_al = conceals_mobles_et_al;
  var conceals_mobile_phones = req.query['conceals_mobile_phones'];
  req.session.conceals_mobile_phones = ifundefined(conceals_mobile_phones);
  var conceals_SIM_cards = req.query['conceals_SIM_cards'];
  req.session.conceals_SIM_cards = ifundefined(conceals_SIM_cards);
  var conceals_other = req.query['conceals_other'];
  req.session.conceals_other = ifundefined(conceals_other);
  var conceals_other_info = req.query['conceals_other_info'];
  req.session.conceals_other_info = conceals_other_info;
  //drugs trafficing
  var trafficdrugs = req.query['trafficdrugs'];
  req.session.trafficdrugs = trafficdrugs;
  //
  var weapons_drugs = 'Yes'
  console.log('weapons_drugs: ' + weapons_drugs);
  if (creates_uses_weapons != 'Yes' & conceals_weapons != 'Yes' & conceals_drugs != 'Yes' &  conceals_mobles_et_al != 'Yes') weapons_drugs = 'No';
  req.session.weapons_drugs = weapons_drugs;
  console.log('session.weapons_drugs: ' + req.session.weapons_drugs);
  //
  console.log('---------------------console: ' + req.originalUrl);
  res.render ('risk_10');
})

router.get('/risk_11', function (req, res) {
  //arson
  var arson = req.query['arson'];
  req.session.arson = arson;
  console.log('---------------------console: ' + req.originalUrl);
  res.render ('risk_11');
})

router.get('/risk_12', function (req, res) {
  //mustreturn
  var mustreturn = req.query['mustreturn'];
  req.session.mustreturn = mustreturn;
  var mustreturn_name = req.query['mustreturn_name'];
  req.session.mustreturn_name = mustreturn_name + ". ";
  var mustreturn_info = req.query['mustreturn_info'];
  req.session.mustreturn_info = mustreturn_info;
  //mustnotreturn
  var mustnotreturn = req.query['mustnotreturn'];
  req.session.mustnotreturn = mustnotreturn;
  var mustnotreturn_name = req.query['mustnotreturn_name'];
  req.session.mustnotreturn_name = mustnotreturn_name + ". ";
  var mustnotreturn_info = req.query['mustnotreturn_info'];
  req.session.mustnotreturn_info = mustnotreturn_info;
  // section returnToPrison
  var returnToPrison = 'Yes'
  if (mustreturn != 'Yes' & mustnotreturn != 'Yes') returnToPrison = 'No'
  req.session.returnToPrison = returnToPrison;
  console.log('---------------------console: ' + req.originalUrl);
  res.render ('risk_12');
})

router.get('/check-your-answers-risk-check', function (req, res) {
  //other final
  var other_final = req.query['other_final'];
  req.session.other_final = other_final;
  var other_final_info = req.query['other_final_info'];
  req.session.other_final_info = other_final_info;
  console.log('---------------------console: ' + req.originalUrl);
  res.render ('check-your-answers-risk-check');
})


module.exports = router
