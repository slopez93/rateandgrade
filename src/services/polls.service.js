import Api from './api.service';

let instance = null;

class PollsService {

    static get instance() {
        if (instance === null) {
          instance = new PollsService();
        }
    
        return instance;
    }

    getAll() {
        return Api.instance.get('surveys/survey/');
    }

    get(id) {
        return Api.instance.get(`surveys/survey/${id}`);
    }

}

export default PollsService;