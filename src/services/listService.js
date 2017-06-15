import axios from 'axios';
import { getList } from '../ducks/listReducer';
import store from '../store';
import apiURL from '../api';

export function dispatchGetList(){
    const promise = axios.get(apiURL).then(response => {
        return response.data
    } );
    store.dispatch( getList(promise) );
    
}