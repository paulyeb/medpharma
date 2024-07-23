import { AuthenticationResources } from '../../../utils/APIResouces';
import { _get, _post } from '../../../utils/query';
import {
  ChangePasswordProps,
  GetUserByPhoneProps,
  PatientLoginRequest,
  RegisterUserRequest,
  ResetPasswordProps,
  SendOTPProps,
  StaffLoginRequest,
  VerifyOTPProps,
} from '../../../utils/types';
const api = AuthenticationResources;

export const loginUser = async (payload: StaffLoginRequest) => {
  return await _post(api.loginUser, payload);
};

export const loginPatient = async (payload: PatientLoginRequest) => {
  return await _post(api.loginPatient, payload);
};

export const register = async (payload: RegisterUserRequest) => {
  return await _post(api.register, payload);
};

export const sendOTP = async (payload: SendOTPProps) => {
  return await _post(api.sendOTP, payload);
};

export const verifyOTP = async (payload: VerifyOTPProps) => {
  return await _post(api.verifyOTP, payload);
};

export const getUserById = async (payload: GetUserByPhoneProps) => {
  return await _post(api.getUserByPhone, payload);
};
export const resetPassword = async (payload: ResetPasswordProps) => {
  return await _post(api.resetPassword, payload);
};
export const changePassword = async (payload: ChangePasswordProps) => {
  return await _post(api.changePassword, payload);
};
