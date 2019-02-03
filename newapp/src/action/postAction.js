import { mockData } from '../MockData'

export const fetchPosts = () => dispatch => {
    dispatch({
                type: 'GET_DATA',
                payload: mockData
            }
        )
}

export const createPosts = (posts) => dispatch => {
    mockData.push(posts);
    dispatch({
                type: 'NEW_DATA',
                payload: posts
            }
        )
}
