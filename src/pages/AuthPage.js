
import { redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";


const AuthPage = () => {
  return <AuthForm/>
}

export default AuthPage;


export const action = async () => {
      
    // Authenticate data
    
    return redirect("/");
  };
