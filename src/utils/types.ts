export interface User {
  _id?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  staffID?: string;
}

export interface UserPatient extends User {
  medPharmaCode?: string;
  dateOfBirth?: number;
  gender?: string;
}

export enum ConsultationType {
  DIAGNOSIS = 'Advice on diagnosis',
  TEST = 'Special Test',
  REVIEW = 'Review',
  SURGERY = 'Special Procedures or Surgery',
}

export type Gender = 'Male' | 'Female';

export interface PatientProps {
  _id?: string;
  firstname?: string;
  lastname?: string;
  dateOfBirth?: number;
  phone?: string;
  gender?: Gender;
  address?: string;
  email?: string;
  medPharmaCode?: string;
}

export interface ConsultationProps {
  _id?: string;
  patient?: PatientProps;
  consultationType?: ConsultationType;
  medicalCondition?: string;
  date?: number;
  note?: string;
  createdBy?: string;
}

export interface AddPatientsProps extends PatientProps {
  createdBy: string;
}

export interface SpecificModalProps {
  visible: boolean;
  onClose: () => void;
  onSave?: (options: PatientProps | string | string[]) => void;
}

export interface GeneralModalProps {
  visible: boolean;
  title?: string;
  subtitle?: string;
  onClose: () => void;
  options?: React.ReactNode;
  saveDisabled?: boolean;
  onSave?: () => void;
  noSave?: boolean;
  loading?: boolean;
}

export interface LoginRequest {
  phone: string;
  password: string;
}

export interface StaffLoginRequest {
  staffID: string;
  phone: string;
  password: string;
}
export interface PatientLoginRequest {
  medPharmaCode: string;
  phone: string;
  password: string;
}

export interface RegisterUserRequest extends User {
  password?: string;
  confirmPassword?: string;
}

export interface SendOTPProps {
  phone: string;
}

export interface VerifyOTPProps extends SendOTPProps {
  code: string;
}

export interface GetUserByPhoneProps {
  phone: string;
}

export interface ResetPasswordProps {
  phone: string;
  newPassword: string;
  confirmNewPassword: string;
}

export interface ChangePasswordProps extends ResetPasswordProps {
  currentPassword: string;
}
