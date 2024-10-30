import { FunctionComponent, useEffect } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface HomeProps {
    
}
 
const Home: FunctionComponent<HomeProps> = () => {

    const navigate: NavigateFunction = useNavigate();
    useEffect(() => {
        navigate("/login")
      }, []);

    return (  <>
    
    
    
    </>);
}
 
export default Home;