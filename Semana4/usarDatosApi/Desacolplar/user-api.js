import axios from 'axios'

export class UserApiServices {
  
  async getAll(){
    return axios.get("http://localhost:3000/users");
  }
}
