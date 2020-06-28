import { createContext } from "react";

const AuthUserContext = createContext(null);
AuthUserContext.displayName = "sessions";

export default AuthUserContext;
