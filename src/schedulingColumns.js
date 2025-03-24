export const scheduling = [
  { data: "fieldData._pk_id", title: "Id", visible: false, searchable: false },
  {
    data: "fieldData.applicantNameFirstLast\\.indexedCalc",
    title: "Applicant Name",
    visible: true,
  },
  {
    data: "fieldData.examCompanyEmployerName",
    title: "Employer",
    visible: true,
  },
  { data: "fieldData.examDeptContract", title: "DeptContract", visible: true },
  { data: "fieldData.examExamType", title: "Exam Type", visible: true },
  { data: "fieldData.examJobClass", title: "Job Class", visible: true },
  {
    data: "fieldData.__ExamAddressCityStateZipCountryCommaSeparated",
    title: "App. Loc.",
    visible: true,
  },
  {
    data: "fieldData.%excelexport\\.NumberOfFollowUpAttempts",
    title: "Follow-Up",
    visible: true,
  },
  {
    data: "fieldData.examSchedulingDateOfNextFollowUp",
    title: "",
    visible: true,
  },
];
