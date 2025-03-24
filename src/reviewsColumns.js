export const reviews = [
  {
    data: "fieldData._pk_id_exam",
    title: "Id",
    visible: false,
    searchable: false,
  },
  {
    data: "",
    title: "Action",
    visible: true,
    defaultContent:
      "<button type='button' class='btn btn-light btn-sm'>Resubmit</button>",
  },
  { data: "fieldData.reviewCategory", title: "Type", visible: true },
  {
    data: "fieldData._examApplicantNameLastFirst",
    title: "Applicant Name",
    visible: true,
  },
  { data: "fieldData._employerName", title: "Employer", visible: true },
  { data: "fieldData._examDeptContract", title: "DeptContract", visible: true },
  { data: "fieldData._examExamType", title: "Exam Type", visible: true },
  { data: "fieldData.DenyReason", title: "Deny Reason", visible: true },
];
