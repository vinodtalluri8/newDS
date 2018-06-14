import { HttpHeaders } from '@angular/common/http';

export const appConstants = {

    getHeaderOptions: {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Request-Method': 'GET',
            'Access-Control-Request-Headers': '*',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
        }),
        withCredentials: false,
        params: {}
    },
    postHeaderOptions: {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Request-Method': 'POST',
            'Access-Control-Request-Headers': '*',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
        }),
        withCredentials: false,
        params: {}
    },
    deleteHeaderOptions: {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Request-Method': 'DELETE',
            'Access-Control-Request-Headers': '*',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
        }),
        withCredentials: false,
        params: {}
    },
    putHeaderOptions: {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Request-Method': 'PUT',
            'Access-Control-Request-Headers': '*',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
        }),
        withCredentials: false,
        params: {}
    }
};


