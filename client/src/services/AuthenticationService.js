import Api from '../services/Api'

export default {
        register(credentials){
            return Api().post('register',credentials)
        }
}

//from another file we call this method  so :
// AuthenticationService.register({
//      email : 'abc@',
//      password : '12434'
// })