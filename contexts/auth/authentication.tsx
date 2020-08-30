import React, {useContext, createContext, useState} from 'react';

const AuthContext = createContext<any[]>([]);
export const useAuthenticationStore = () => useContext(AuthContext);

const AuthenticationStore : React.FC = (props) => {
    const [authenticated , setAuthenticated] = useState<boolean>(false);
    
    return (
        <AuthContext.Provider value={[authenticated , setAuthenticated]}>
                {props.children}
        </AuthContext.Provider>
    );
}

export default AuthenticationStore;