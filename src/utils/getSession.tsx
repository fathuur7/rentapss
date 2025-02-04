// utils/sessionManager.ts
interface SessionData {
    // token?: string;
    user?: {
        id: any;
        username: string;
        email: string;
        [key: string]: any;  // for other user properties for other user properties
    };
    [key: string]: any;  // for any additional session data
  }
  
  export const setSession = (data: SessionData) => {
    // Store in localStorage
    localStorage.setItem('sessionData', JSON.stringify(data));
    // Also set cookies for additional security
    document.cookie = `sessionToken=${data.token?.token}; path=/; secure; samesite=strict`;
  };
  
  export const getSession = (): SessionData | null => {
    const sessionData = localStorage.getItem('sessionData');
    return sessionData ? JSON.parse(sessionData) : null;
  };
  
  export const clearSession = () => {
    localStorage.removeItem('sessionData');
    document.cookie = 'sessionToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;';
  };