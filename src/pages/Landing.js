import { useNavigate } from "react-router-dom";

const Landing = () => {

    const navigate = useNavigate();

    return ( 
        <div>
           <h1>Landing Page</h1> 
           <div>
                <button onClick={() => navigate("/register") }>Register</button>
           </div>
        </div>
     );
}
 
export default Landing;