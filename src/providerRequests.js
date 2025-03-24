export const approvedProviderRequests = [
  { data: "fieldData.id", title: "Id", visible: false, searchable: false },
  { data: "fieldData.id_clinic", title: "idClinic", visible: false, searchable: false },
  { data: "fieldData.authorized_components", title: "", visible: false, searchable: false },
  {
    data: "",
    title: "",
    visible: true,
    defaultContent:
      "<button type='button' class='btn btn-primary btn-sm' id='openExam'>Exam</button>",
  },{
    data: "",
    title: "",
    visible: true,
    defaultContent:
      "<button type='button' class='btn btn-success btn-sm' id='continueScheduling'>Schedule</button>",
  },{
    data: "",
    title: "",
    visible: true,
    defaultContent:
      "<button type='button' class='btn btn-danger btn-sm' id='cancelApproval'>Cancel</button>",
  },
  { data: "fieldData.PROVIDER_REQUEST | EXAM | PERSON::_nameFirstLast", title: "Applicant Name", visible: true },
  { data: "fieldData.creationTimeStamp", title: "Approved", visible: true, },
  { data: "fieldData.status", title: "Status", visible: false },
  { data: "fieldData.creationAccountName", title: "Creation User",visible: false,},
  { data: "fieldData.PROVIDER_REQUEST | REFERRAL::caseEmployerName", title: "Employer", visible: true },
  { data: "fieldData.PROVIDER_REQUEST | REFERRAL::caseDeptContract", title: "DeptContact", visible: true },
  { data: "fieldData.PROVIDER_REQUEST | REFERRAL::caseJobClassName", title: "Job Class", visible: true },
  { data: "fieldData.PROVIDER_REQUEST | EXAM::_pk_id", title: "id_exam", visible: false },
  { data: "fieldData.PROVIDER_REQUEST | EXAM::examExamType", title: "Exam Type", visible: true },
  { data: "fieldData.PROVIDER_REQUEST_APPROVAL | CLINIC::_medicalProviderName_unstored", title: "Clinic", visible: true },
  { data: "fieldData.PROVIDER_REQUEST_APPROVAL | CLINIC::_AddressCityStateZipCountryFormatted_indexed", title: "Location", visible: true },
  { data: "fieldData.PROVIDER_REQUEST_APPROVAL | CLINIC::_clinicPhoneDisplay", title: "Phone", visible: true },
];

export const pendingProviderRequests = [
  { data: "fieldData.id_exam", title: "Id", visible: false, searchable: false },
  {
    data: "",
    title: "Action",
    visible: true,
    defaultContent:
      "<button type='button' class='btn btn-light btn-sm' id='referralsAction'>Open</button>",
  },
  { data: "fieldData.creationTimeStamp", title: "Creation Timestamp",visible: true,},
  { data: "fieldData.PROVIDER_REQUEST | EXAM | PERSON::_nameFirstLast", title: "Applicant Name", visible: true },
  { data: "fieldData.PROVIDER_REQUEST | REFERRAL::caseEmployerName", title: "Employer", visible: true },
  { data: "fieldData.PROVIDER_REQUEST | REFERRAL::_referralAddressInline", title: "Location", visible: true },
  { data: "fieldData.PROVIDER_REQUEST | REFERRAL::caseJobClassName", title: "Job Class", visible: true },
  { data: "fieldData.PROVIDER_REQUEST | REFERRAL::caseRecruiterName", title: "Recruiter", visible: true },
  { data: "fieldData.status", title: "Status", visible: true },
  { data: "fieldData.dateDue", title: "Deadline", visible: true },

];