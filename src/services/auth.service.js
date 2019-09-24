import Api from './api.service';

let instance = null;

class AuthService {

    static get instance() {
        if (instance === null) {
          instance = new AuthService();
        }
    
        return instance;
    }

    login(username, password) {
        const body = {
            grant_type: "password",
            provider: "rateandgrade",
            client_id: "PwRoiRBIijIZveNiJvq5GCKuEavR4mK4LlbzaJrU",
            username,
            password
        };
        console.log(body);
        return Api.instance.post('user/action/login/', body);
    }


}

export default AuthService;