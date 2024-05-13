import React from 'react'
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
    const navigate = useNavigate();
    
      return (
        <>
          <h1>404 Page Not Found</h1>
          <button onClick={() => navigate("/")}>Back</button>
        </>
      )
    };

    export default PageNotFound;