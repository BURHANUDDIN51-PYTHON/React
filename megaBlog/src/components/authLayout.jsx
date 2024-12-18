import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom0'

// Used to render things based on whether the user is authenticated or not 
// Generally used for protection process
export default function Protected({children, authentication = true}) {

    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);

    const authStatus = useSelector(state => state.auth.status);

    useEffect(() => {
        if(authentication && authStatus !== authentication){
            navigate('/login');
        } else if (!authentication && authStatus !== authentication){
            navigate('/');
        }
        setLoader(false);
        // Do it on the basis of authstatus only 
        // if (authStatus) {
        //     navigate('/');
        // } else {
        //     navigate('/login');
        // }
    }, [authStatus, navigate, authentication])

    return loader ? <h1>Loading...</h1> : <>{children}</>
}

