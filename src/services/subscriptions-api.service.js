import http from './http.common';

class SubscriptionsApiService {
    getAll() {
        //return http.get('/api/subscriptions'); 
        return http.get('/subscription'); //mockito
    }

    create(data) {
        return http.post('/api/subscriptions', data);
    }

    get(id) {
        return http.get(`/api/subscriptions/${id}`);
    }

    update(id, data) {
        return http.put(`/api/subscriptions/${id}`, data);
    }

    getByName(name) {
        return http.get(`/api/subscriptions/${name}`);
    }

    getByDuration(duration) {
        return http.get(`/api/subscriptions/${duration}`);
    }

    delete(id) {
        return http.delete(`/api/subscriptions/${id}`);
    }
}

export default new SubscriptionsApiService();