import http from './http.common';

class SubscriptionsApiService {
    getAll() {
        //return http.get('/api/subscriptions'); 
        return http.get('/subscription'); //mockito
    }
}

export default new SubscriptionsApiService();