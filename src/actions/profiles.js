import * as api from '../api';

export const createProfile = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createProfile(formData);
    dispatch({ type: 'CREATE', payload: data });
  } catch (err) {
    console.log(err);
  }
};


export const fetchProfile = () =>async(dispatch) =>{
    try{
        const {data} = await api.fetchProfiles();
        dispatch({type:'FETCH',payload:data})
    }
    catch(err){
        console.log(err);
    }
}

export const hotProfile = (id) => async(dispatch) =>{
    try{
        const{ data } = await api.hotProfile(id);

        dispatch({ type:'HOTIT',payload:data});
    }
    catch(err){
        console.log(err.message);
    }
}

export const compareProfiles = (winnerId, loserId) => async(dispatch) => {
    try{
        const { data } = await api.compareProfiles({ winnerId, loserId });
        dispatch({ type: 'UPDATE_RATINGS', payload: { winner: data.winner, loser: data.loser } });
    }
    catch(err){
        console.error('Error comparing profiles:', err);
        throw err;
    }
}