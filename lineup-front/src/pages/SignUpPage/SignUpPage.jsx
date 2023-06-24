import MainContainer from "../../components/MainContainer";
import logo from "../../assets/logo/simbolo.png";
import name from "../../assets/logo/tipo.png";
import SignUpForm from "../../components/Auth/SignUpForm";

export default function SignUpPage(){
    return (
        <MainContainer>
            <div className="flex justify-between mx-24">
        <div className="flex flex-col justify-center items-center">
          {<img src={logo} className="h-48 mb-3" />}
          <img src={name} className="w-64"/>
        </div>
        <div>
            <SignUpForm />
        </div>
      </div>
        </MainContainer>
    )
}