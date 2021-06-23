import http from './http.common';

class SubscriptionsApiService {
    getAll() {
        return http.get('/subscription');
    }
}

export default new SubscriptionsApiService();