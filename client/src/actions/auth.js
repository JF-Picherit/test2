import { AUTH } from '../constants/actionTypes';
import userService from "../services/UserServices";


export const signin = (formData, router) => async (dispatch) => {

  try {

    const { data } = await userService.signIn(formData);

    dispatch({ type: AUTH, data }); 

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await userService.signUp(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};
