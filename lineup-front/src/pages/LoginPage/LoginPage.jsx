import MainContainer from "../../components/MainContainer";
import logo from "../../assets/logo/simbolo.png";
import name from "../../assets/logo/tipo.png";
import LoginForm from "../../components/Auth/LoginForm";

export default function LoginPage() {
  return (
    <MainContainer>
      <div className="flex justify-between mx-24">
        <div className="flex flex-col justify-center items-center ml-40">
          {<img src={logo} className="h-60 mb-3" />}
          <img src={name} className="w-80"/>
        </div>
        <div>
            <LoginForm />
        </div>
      </div>
    </MainContainer>
  );
}
