import * as CONST from '../ActionTypes';

export const loading = () => ({
  type: CONST.LOADING,
});

export const unLoading = () => ({
  type: CONST.UNLOADING,
});

export const requestResult = (typeName, result) => ({
  type: typeName,
  data: result,
});

// -----------------
// LOGIN
// -----------------
export const login = param => (dispatch) => {
  // dispatch(loading());
  return fetch(`${process.env.REACT_APP_ENDPOINT}/api/v1/members/sign_in`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(param),
    mode: 'cors',
  })
    .then(response => {
      var header = {}
      for (let [key, value] of response.headers) {
        header[key] = value
      }
      if (header["access-token"]) {
        localStorage.setItem('access_token', JSON.stringify(header));
      } else {
        localStorage.removeItem('access_token');
      }
      return response.json();
    })
    .then(data => {
      if (data.errors) {
        dispatch(requestResult(CONST.LOGIN_FAILURE, data ? data : []));
      } else {
        dispatch(requestResult(CONST.LOGIN_SUCCESS, data));
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

// -----------------
// VALIDATE TOKEN
// -----------------
export const validate_token = () => (dispatch) => {
  const accessToken = localStorage.getItem("access_token");
  var headers = JSON.parse(accessToken)
  if (headers) {
    return fetch(`${process.env.REACT_APP_ENDPOINT}/api/v1/members/validate_token`, {
      method: 'GET',
      headers: headers,
      mode: 'cors',
    })
      .then(response => {
        var header = {}
        for (let [key, value] of response.headers) {
          header[key] = value
        }
        if (header["access-token"]) {
          localStorage.setItem('access_token', JSON.stringify(header));
        } else {
          dispatch(requestResult(CONST.LOGIN_FAILURE, []));
        }
        return response.json();
      })
      .then(data => {
        if (data.errors) {
          dispatch(requestResult(CONST.LOGIN_FAILURE, data ? data : []));
        } else {
          dispatch(requestResult(CONST.LOGIN_SUCCESS, data));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

};

/**
 * LOGOUT
 */
export const logout = () => ({
  type: CONST.LOGOUT,
});