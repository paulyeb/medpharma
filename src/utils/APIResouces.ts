export const AuthenticationResources = {
  loginUser: '/user/login',
  loginPatient: '/user/login-patient',
  register: '/user/register',
  logout: '/user/logout',
  getUser: '/user/getUser',
  getUserByPhone: '/user/getUserByPhone',
  sendOTP: '/user/sendOTP',
  verifyOTP: '/user/verifyOTP',
  resetPassword: '/user/reset-password',
  changePassword: '/user/change-password',
};

export const PatientURIResource = {
  addPatient: '/patient',
  getAllPatients: '/patient',
};

export const ConsultationURIResource = {
  addConsultation: '/consultations',
  getAllConsultations: '/consultations',
};
