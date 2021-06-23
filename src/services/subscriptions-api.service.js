import http from './http.common';

class SubscriptionsApiService {
    getAll() {
        return http.get('/api/subscriptions');
    }


}

export default new SubscriptionsApiService();