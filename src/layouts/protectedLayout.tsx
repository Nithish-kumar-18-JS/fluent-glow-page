import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useEffect, useState } from "react";

interface ProtectedLayoutProps {
    children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(() => auth.currentUser);
    
    useEffect(() => {
        const unsub = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
            // if (!currentUser) {
            //     navigate("/");
            // }
        });
        return () => unsub();
    }, [navigate]);

    // if (!user) {
    //     return null; // or a loading spinner
    // }

    return <>{children}</>;
}

export default ProtectedLayout
