
// export function setLoginUser(calendar) {
//     return {
//       type: 'EVENT_SET_LOGIN_USER',
//       selectedCalendar: calendar
//     };
//   }

import { checkLoginService } from "./Login.service";

export function checkLogin(a) {
    return async (dispatch) => {
        try {
            const resp = await checkLoginService(a);
            if (resp) {
                dispatch({
                    type: 'EVENT_SET_LOGIN_INFO',
                    loginInfo: resp
                });
            }
            return resp;
        }
        catch (err) {
            console.error(err);
            return Promise.reject();
        }
    };
}


export function logout() {
    return async (dispatch) => {
        dispatch({
            type: 'EVENT_RESET_LOGIN_INFO'
        });
    }
}