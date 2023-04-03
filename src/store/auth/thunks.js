import { singInWithGoogle } from '../../firebase/providers';
import { checkingCredentials } from './';

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {

        dispatch(checkingCredentials());

    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(startGoogleSignIn());

        const result = await singInWithGoogle();
        console.log({ result });
    }
}