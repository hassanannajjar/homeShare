import axios from 'axios';
import moment from 'moment';
import { getSecureToken } from '../store';
import { BASE_API } from '../utils/constants';
// import { handleAPIError } from '../utils/helper';

const { CancelToken } = axios;
const source = CancelToken.source();

// use axios like function with call back or promise
// Axios('/xxxx',{},post or get)

const AX = axios.create({
  baseURL: BASE_API,
  // timeout: 3000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
  cancelToken: source.token,
});

const printRequestAndResponse = ({
  route,
  method,
  body,
  contentType,
  authorization,
  response,
  startTime,
  endTime,
}) =>
  console.log(
    '\n 📘\x1B[36m ******** Request Details **********📘 \n',
    `  \x1B[35m Full URL: \x1B[37m ${BASE_API.concat(route)} \n 
    \x1B[35m Start Time: \x1B[37m ${moment(startTime).format('h:mm:ss a')} \n 
    \x1B[35m End Time: \x1B[37m ${moment(endTime).format('h:mm:ss a')} \n 
    \x1B[35m Milliseconds Time: \x1B[37m ${endTime - startTime} \n 
    \x1B[35m Methoud: \x1B[37m ${method || 'get'} \n
    \x1B[35m Path: \x1B[37m ${route} \n
    \x1B[35m Body: \x1B[37m ${JSON.stringify(body)} \n
    \x1B[35m Content Type: \x1B[37m ${JSON.stringify(contentType)} \n
    \x1B[35m AUTHORIZATION: \x1B[37m ${authorization} \n
    \x1B[35m Response: \x1B[37m ${JSON.stringify(response)} \n
      `,
    '\x1B[36m  *************** END ************** \x1B[3m \n'
  );

const API = async (route, method, body = {}) => {
  const currentTime = new Date();
  AX.defaults.headers['Accept-Language'] = 'en';
  const token = await getSecureToken();
  AX.defaults.headers.AUTHORIZATION = token ? `Bearer ${token}` : '';
  AX.defaults.headers['Content-Type'] = route.includes('documents')
    ? `multipart/form-data`
    : `application/json`;

  let response;
  try {
    response = await AX[method || 'get'](route, body);
    printRequestAndResponse({
      route,
      method,
      startTime: currentTime,
      endTime: new Date(),
      body,
      contentType: AX.defaults.headers['Content-Type'],
      authorization:
        AX.defaults.headers.AUTHORIZATION || '\x1B[31m  unauthorize \x1B[3m ',
      response: response.data,
    });
    return response;
  } catch (error) {
    printRequestAndResponse({
      route,
      method,
      startTime: currentTime,
      endTime: new Date(),
      body,
      contentType: AX.defaults.headers['Content-Type'],
      authorization:
        AX.defaults.headers.AUTHORIZATION || '\x1B[31m  unauthorize \x1B[3m ',
      response: error.response.data,
    });
    // handleAPIError(error);
    throw error;
  }
};

const cancelConnection = () => {
  console.log('Connection was cancelled');
  source.cancel;
};

export { API, cancelConnection };
