const initState = {
    posts: [
        {id: '1', title: 'Pikachu thunder bolt', body: 'Pokemon'},
        {id: '2', title: 'Classic 350', body: 'Gun Metal Grey'},
        {id: '3', title: 'Standard 350', body: 'Standard Black'}
    ]
}
const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        })
        return {
            ...state,
            posts: newPosts
        }
    }
    return state
}

export default rootReducer