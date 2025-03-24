//Here we're importing items we'll need. You can add other imports here.
import { overseas, noshow, reschedule, newExams } from "./examColumns";
import { referrals } from "./referralsColumns";
import { reviews } from "./reviewsColumns";
import { scheduling } from "./schedulingColumns";
import { pendingProviderRequests, approvedProviderRequests } from "./providerRequests";
import { sampleData } from "./sampleData";
var JSONbig = require("json-bigint");
var table;
let newRows = [];
const allColumns = {
  Overseas: overseas,
  NoShow: noshow,
  Reschedule: reschedule,
  New: newExams,
  Pending: referrals,
  Denied: reviews,
  OccuVax: scheduling,
  PendingProviderRequests: pendingProviderRequests,
  ApprovedProviderRequests: approvedProviderRequests
};
console.log(allColumns);
// exposing loadData to FileMaker Script
window.loadData = function (json, type) {
  var obj = JSON.parse(json); // data from FM is a string
  console.log(obj);
  var data = obj.data || []; // data from FM is an array
  // return;
  // create column headers from data

  var columns = allColumns[type];
  console.log(columns);
  data.forEach((e, i) => {
    e.id = i;
    e.ind = i;
  });

  // Create the DataTable, after destroying it if already exists
  if (table) table.destroy();
  table = $("#dtable").DataTable({
    pageLength: 100,
    lengthChange: true,
    searching: true,
    scrollY: $(window).height() - 200,
    select: true,
    dom: "fltip",
    colReorder: true,
    language: {
      emptyTable: `No records found.`,
    },
    columns: columns,
    data: data,
    createdRow: function (row, data, dataIndex) {
      $(row).addClass(data.fieldData.HighLightColor_examScheduling);
    },
  });

  table
    .on("select", function (event) {
      getSelectedRows(type);
    })
    .on("deselect", function (event) {
      const rows = table.rows(".selected").data();
      console.log("SELECT", rows);
      const l = rows.length;
      console.log("deselect", rows);
      if (rows.length === 0) {
        sendDeselectAllRows("deselect");
      }
    });

  $("#dtable tbody").on("click", "button", function (e) {
    const btnType = this.id;
    e.stopPropagation();
    var data = table.row($(this).parents("tr")).data();
    const id = data.fieldData._pk_id;
    const examId = data.fieldData["PROVIDER_REQUEST | EXAM::_pk_id"]; //change this to be the field name of the exam ID field
    const obj = { id,type,examId,btnType};
    FileMaker.PerformScript("Click Button from DT", JSON.stringify(obj));
  });
};

const sendDeselectAllRows = () => {
  let newRows = [];
  const json = JSON.stringify(newRows);
  FileMaker.PerformScriptWithOption("MULTI SELECT GET IDS", json, 5);
};
const getSelectedRows = (type) => {
  let newRows = [];
  const rows = table.rows(".selected").data();

  if (rows.length > 0) {
    for (let i = 0; i < rows.length; i++) {
      const fmID =
        type === "Denied" ? rows[i].fieldData.id_exam : rows[i].fieldData._pk_id;
      console.log(fmID);
      const ind = rows[i].ind;
      newRows.push(fmID);
    }
  }
  console.log("NEW ROWS", newRows, newRows.length);
  const json = JSON.stringify(newRows);
  FileMaker.PerformScriptWithOption("MULTI SELECT GET IDS", json, 1);
  // table.rows(".selected").deselect();
};

window.removeSelectedRows = (array) => {
  const remove = JSON.parse(array);
  const selectedRow = table.row("#row-1").data();
  console.log("SELECTED", selectedRow);
  table.rows(remove).remove().draw();
};

window.updateRows = (array) => {
  const newData = JSON.parse(array).data;

  table.clear().draw();

  table.rows.add(newData).draw();
};
