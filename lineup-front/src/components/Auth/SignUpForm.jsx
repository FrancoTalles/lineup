import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authApi from "../../services/authApi";

export default function SignUpForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    profileImg: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function submit(event) {
    event.preventDefault();

    try {
      const userData = await authApi.signUp(form);
      navigate("/");
    } catch (error) {
      setErrorMessage("Não foi possível fazer cadastro!");
      console.log(error)
    }
  }

  return (
    <>
      <div className="flex flex-col items-center px-5 py-12 h-fit rounded bg-MainRed w-96">
        <h1 className="font-ubun mb-10 text-5xl text-MainWhite">Cadastro</h1>
        <form onSubmit={submit}>
          <div>
            <h2 className="font-ubun mb-3 text-MainWhite">Nome</h2>
            <input
              className="block w-full h-9 bg-center border-none outline-none placeholder-gray-400 text-sm font-pop mb-3 rounded pl-2"
              name="name"
              type="name"
              required
              value={form.name}
              onChange={handleForm}
              placeholder="Digite seu nome"
            />
          </div>
          <div>
            <h2 className="font-ubun mb-3 text-MainWhite">Email</h2>
            <input
              className="block w-full h-9 bg-center border-none outline-none placeholder-gray-400 text-sm font-pop mb-3 rounded pl-2"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleForm}
              placeholder="Digite seu email"
            />
          </div>
          <div>
            <h2 className="font-ubun mb-3 text-MainWhite">Imagem Perfil</h2>
            <input
              className="block w-full h-9 bg-center border-none outline-none placeholder-gray-400 text-sm font-pop mb-3 rounded pl-2"
              name="profileImg"
              type="profileImg"
              required
              value={form.profileImg}
              onChange={handleForm}
              placeholder="Digite o link de uma imagem"
            />
          </div>
          <div>
            <h2 className="font-ubun mb-3 text-MainWhite">Senha</h2>
            <input
              className="block w-full h-9 bg-center border-none outline-none placeholder-gray-400 text-sm font-pop mb-3 rounded pl-2"
              name="password"
              type="password"
              required
              value={form.password}
              onChange={handleForm}
              placeholder="Digite sua senha"
            />
          </div>
          {errorMessage && (
            <p className="text-MainWhite text-center mb-3">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="w-full h-10 flex items-center justify-center border-none rounded cursor-pointer bg-MainBlue text-white mt-8"
          >
            Fazer Cadastro
          </button>
        </form>
        <Link to="/" className="mt-9 text-MainWhite">
          Já está cadastrado? Faça login!
        </Link>
      </div>
    </>
  );
}
