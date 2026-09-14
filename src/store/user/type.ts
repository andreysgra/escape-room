import {TUser} from '../../types/user';
import {AuthorizationStatus, RequestStatus} from '../../services/api/const';

export type TUserState = {
  user: TUser | null;
  authorizationStatus: AuthorizationStatus;
  loginStatus: RequestStatus;
}
