import React, { useReducer, useEffect } from 'react'
import axios from 'axios';

const intialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.paylaod,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: true,    
                post: {},
                error: 'Something went wrong'
            }
        default:
            return state
    }
}

function DataFetchingTwo() {

    const [state, dispatch]=useReducer(reducer,intialState)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
            .then(response => {
                dispatch({type:'FETCH_SUCCESS',paylaod:response.data})
            })
            .catch(err => {
                dispatch({type:'FETCH_ERROR'})
            })
    }, [])

    

    return (
        <div>
            {state.loading ? 'Loading' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default DataFetchingTwo;