import { createContext, useReducer } from "react";
import { createRoutesFromChildren } from "react-router-dom";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();



export const GithubProvider = ({ children }) => {
    const setLoading = () => dispatch({ type: 'LOADING' })
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)


    return <GithubContext.Provider value={{ ...state, dispatch }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext