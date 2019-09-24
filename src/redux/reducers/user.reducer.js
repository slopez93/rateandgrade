import { ADD_POLL_COUNTER } from '../types/user.types';

const INITIAL_STATE = {
    pollCounter: 0
};

const user = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_POLL_COUNTER:
            const pollCounter = ++state.pollCounter;
            return { ...state, pollCounter };
        default:
            return INITIAL_STATE;
    }    
}

export default user;