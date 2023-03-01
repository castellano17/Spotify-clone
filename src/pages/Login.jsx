import React from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/slices/userInfo.slice";

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = e.target.userName.value;
    dispatch(loginUser(userName));
  };

  return (
    <main className="min-h-screen flex flex-col">
      <header className="text-center py-5 text-2xl font-bold border-b-[2px]">
        <h1 className="flex items-center justify-center">
          <i className="text-3xl bx bxl-spotify"></i>SpotiClone
        </h1>
      </header>
      <section className="flex-1 grid place-content-center">
        <form onSubmit={handleSubmit} className="p-2">
          <p className="font-bold mb-4">
            Para continuar, inicia sesión con un nombre.
          </p>
          <div>
            <label className="font-bold">Nombre</label>
            <input
              required
              id="userName"
              className="block w-full p-3 border-2 rounded-md mt-2"
              type="text"
              placeholder="Escoge un nombre de usuario..."
            />
          </div>
          <button className="bg-bgsp-base text-black my-6 font-semibold uppercase py-3 w-full rounded-full hover:bg-bgsp-light duration-200 hover:tracking-wider">
            Inicia Sesión
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;
