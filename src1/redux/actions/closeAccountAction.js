export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

export const fetchData = (data) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data,
    };
};
