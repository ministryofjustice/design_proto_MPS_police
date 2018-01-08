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
  var i, s = null, tr, td;

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
      } else {
        td.style="font-weight:bold;"
      }
      // s += ' ' + td.innerText;
    } // Here you could say else { return null; } if you want it to fail
    // when requested column is out of bounds. It depends.
  }
        console.log("count = " + count);
}
