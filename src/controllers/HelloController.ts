import Controller from './Controller';

// importing interfaces
import {HelloGetRequestQuery, HelloGetResponseBody, HelloPostRequestBody, HelloPostResponseBody} from '../interfaces/HelloInterfaces'

export default class HelloController extends Controller {
  constructor(){
    super();
  }

  async getHi({request, response}) {
    const requestData: HelloGetRequestQuery = request.query
    console.log(request.query)
    
    const responseData : HelloGetResponseBody = {
      msg: `Hi ${requestData.name}!`,
      type: 'GET'
    }
    response.body = responseData
  }
  async postHi({request, response}) {
    const requestData: HelloPostRequestBody = request.body
    console.log(request.query)
    
    const responseData : HelloPostResponseBody = {
      msg: `Hi ${requestData.name}!`,
      type: 'POST'
    }
    response.body = responseData
  }
}