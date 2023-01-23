import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

const Login = () => {

  const {userData,setUserData} = useContext(AuthContext)

  const navigate = useNavigate() 
  
  
  const handleSubmit = (event) => {
    event.preventDefault();

    setUserData(
        {
         ...userData,
         name:event.target.elements.name.value,
         lastName:event.target.elements.lastName.value
         }
         );
         navigate("/Landing")
  };
  console.log(userData)

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Ingresa tu nombre" name="name" />
        <input type="text" placeholder="Ingresa tu apellido" name="lastName" />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
