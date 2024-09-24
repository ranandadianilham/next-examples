import { createContext, useContext } from "react";
import { User } from "./types";

// set type with undefined in case someone forgot to wrap component with DashboardContext provider
export const DashboardContext = createContext<User | undefined>(undefined);

// 
export function useUserContext() {
    const user = useContext(DashboardContext);

    // validate and throw error when user is undefined, instead of giving nulish operation and show no error at all
    if (user === undefined) {
        throw new Error("useUserContext must be used with a DashboardContext")
    }

    return user;
}