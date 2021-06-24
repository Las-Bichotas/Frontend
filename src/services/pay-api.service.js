import http from './http.common';

class PayApiService {

    pay(data) {
        return http.post('/pay', data);
    }

}

export default new PayApiService();