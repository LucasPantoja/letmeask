import { createContext, ReactNode, useEffect, useState } from "react";
import { auth, firebase } from "../services/firebase";

type User = {
    id: string;
    name: string;
    avatar: string;
}

type authContextType = {
    user: User | undefined;
    signInWithGoogle: () => Promise<void>;
}

type authContextProps = {
    children: ReactNode;
}

export const authContext = createContext({} as authContextType) 

export function AuthContextProvider(props: authContextProps) {
    const [ user, setUser ] = useState<User>();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                const { displayName, photoURL, uid } = user;

                if (!displayName || !photoURL) {
                    throw new Error("Missing Information from Google Account.");
                }

                setUser({
                    id: uid,
                    name: displayName,
                    avatar: photoURL,
                });
            }
        })

        return () => {
            unsubscribe();
        }
    }, [])

    async function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        const result =  await auth.signInWithPopup(provider);

        if (result.user) {
            const { displayName, photoURL, uid } = result.user;
            
            if (!displayName || !photoURL) {
                throw new Error("Missing Information from Google Account.");
            }

            setUser({
                id: uid,
                name: displayName,
                avatar: photoURL,
            });
        }
    }

    return(
        <authContext.Provider value={{user, signInWithGoogle}}>
            {props.children}
        </authContext.Provider>
    );
}