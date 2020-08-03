import { serverUrl, errorNotJson } from '../constants/config';

const API = {
  url: serverUrl,
  errorNotJson,

  /**
   * fetch() will only reject a promise if the user is offline,
   * or some unlikely networking error occurs, such a DNS lookup failure.
   * However, there is a simple `ok` flag that indicates
   * whether an HTTP response's status code is in the successful range.
   */
  _handleError(_res) {
    return _res.ok ? _res : Promise.reject(_res.statusText);
  },

  /**
   * Check whether the content type is correct before you process it further.
   */
  _handleContentType(_response) {
    const contentType = _response.headers.get('content-type');

    if (contentType && contentType.includes('application/json')) {
      return _response.json();
    }

    return Promise.reject(this.errorNotJson);
  },

  get(_endpoint) {
    return fetch(this.url + _endpoint, {
      method: 'GET',
      // eslint-disable-next-line no-undef
      headers: new Headers({
        Accept: 'application/json',
      }),
    })
      .then(this._handleError)
      .then(this._handleContentType)
      .catch((error) => {
        throw new Error(error);
      });
  },

  post(_endpoint, _body) {
    return fetch(this.url + _endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: _body,
    })
      .then(this._handleError)
      .then(this._handleContentType)
      .catch((error) => {
        throw new Error(error);
      });
  },
};
export default API;
