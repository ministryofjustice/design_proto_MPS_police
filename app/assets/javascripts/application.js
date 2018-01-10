/* global $ */
/* global GOVUK */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  // Use GOV.UK shim-links-with-button-role.js to trigger a link styled to look like a button,
  // with role="button" when the space key is pressed.
  GOVUK.shimLinksWithButtonRole.init()

  // Show and hide toggled content
  // Where .multiple-choice uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()
})
// JavaScript for Moving People Safely //
function clearDetails(target){
  target = document.getElementById(target);
  target.value = "";
}
function clearDetails2(target1,target2){
  target1 = document.getElementById(target1);
  target1.value = "";
  target2 = document.getElementById(target2);
  target2.value = "";
}
// function to set value to missing and style for questions with no answer//
function getColumn(table_id, col) {
  var tab = document.getElementById(table_id);
  var n = tab.rows.length;
  console.log('n = ' + n);
  var i, s = null, tr, td;
  var miss = true;

  // First check that col is not less then 0
  if (col < 0) {
    return null;
  }
  var count = 0;
  for (i = 0; i < n; i++) {
    tr = tab.rows[i];
    if (tr.cells.length > col) { // Check that cell exists before you try
      td = tr.cells[col];
      if(td.innerText == "" && td.tagName != 'TH'){     // to access it.
        td.innerHTML = 'Missing';
        td.className="missing"
        td.style="font-weight:normal;"
        count = count + 1;
        miss = false;
      }
      // console.log('window should open count = ' + count);
      // console.log('miss = ' + miss);
    }
  }
  console.log('n = ' + n);
  console.log('i = ' + i);
  console.log('miss = ' + miss);
  if (i == n && miss == true) {
    console.log('---------------------- miss is true = ' + miss);
    window.location = "check-your-answers-risk-check.html";
  }
}
//
function onlyShowMissing(table_id){
  var tab = document.getElementById(table_id);
  var bodies = tab.tBodies;
  var body;
  var th;
  for (i = 0; i < bodies.length; i++) {
    body = bodies[i];
    // console.log('previous = ' + body.previousSibling.);
    if (body.rows[0].cells[0].tagName == 'TH') {
      th = body.rows[0];
      // console.log(th.cells[0].tagName);
    }
    var hide = false;
    for (var k = 0; k < body.rows.length; k++) {
      var td = body.rows[k].cells[1]
      // console.log('K = ' + body.rows[k].cells[0].innerText);
      if (td.innerText == 'Missing') {
        console.log('K = ' + td);
        body.rows[k].style = "background-color:white;"
        hide = true;
      } else {
        body.rows[k].style = "background-color:blue; display:none;"
      }
      console.log('hide = ' + hide);
      console.log(th.cells[0].innerText + ' ------------ HIDE')
      if (hide) {
        th.style = "background-color:white;"
      } else {
        th.style = "background-color:lightblue; display:none;"
      }
    }
  }
}
//
function setState(elname, val){
  console.log('setState');
  var al = document.getElementsByName(elname);
  console.log(al.length);
  // check if user has manually checke
  for(var i=0; i< al.length; i++){
    if(al[i].checked == true) return;
  }
  // set if user has not overridden
  for(var i=0; i< al.length; i++)
  {
    console.log(al[i].value);
    if (al[i].value == val) {
      al[i].checked = true;
      console.log('This is the Open acct');
    }

  }
}
