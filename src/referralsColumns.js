export const referrals = [
  { data: "fieldData.id", title: "Id", visible: false, searchable: false },
  {
    data: "",
    title: "Action",
    visible: true,
    defaultContent:
      "<button type='button' class='btn btn-light btn-sm' id='referralsAction'>Open</button>",
  },
  {
    data: "fieldData.creationTimeStamp",
    title: "Creation Timestamp",
    visible: true,
  },
  { data: "fieldData.Source", title: "Source", visible: true },
  {
    data: "fieldData.creationAccountName",
    title: "Creation User",
    visible: true,
  },
  {
    data: function (row) {
      console.log("ROW", row);
      const appNameField = "CaseReferrals « Applicant::_nameFirstLast";
      const tempAppNameField = "_tempApplicantNameFirstLast";
      return row.fieldData[appNameField] || row.fieldData[tempAppNameField];
    },

    title: "Applicant Name",
  },
  { data: "fieldData.caseEmployerName", title: "Employer", visible: true },
  { data: "fieldData.caseDeptContract", title: "DeptContact", visible: true },
  { data: "fieldData.caseJobClassName", title: "Job Class", visible: true },
];
