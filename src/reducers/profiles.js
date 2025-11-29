export default (profiles=[],action) =>{
    switch(action.type){
        case 'CREATE':
            return [...profiles,action.payload];

        case 'FETCH':
            return action.payload;

        case 'HOTIT':
            return profiles.map((profile) => profile._id === action.payload._id ? action.payload : profile);

        case 'UPDATE_RATINGS':
            return profiles.map((profile) => {
                if (profile._id === action.payload.winner._id) {
                    return action.payload.winner;
                }
                if (profile._id === action.payload.loser._id) {
                    return action.payload.loser;
                }
                return profile;
            });
        
        default:
            return profiles;
    }
}