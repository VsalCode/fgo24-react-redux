import React, { useEffect, useState } from "react";
import Input from "../Components/Input";
import Options from "../Components/Options";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
  const [data, setData] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    const getData = JSON.parse(window.localStorage.getItem("data"));

    if (getData) {
      setData(getData);
    }
  }, []);

  function handleBack() {
    nav("/");
  }

  return (
    <div className="bg-primary h-fit flex flex-col items-center py-15">
      <form className="flex flex-col gap-3 w-full max-w-[700px] px-10 ">
        <section className="flex flex-col gap-7 bg-white shadow rounded p-10 border-t-15 border-t-secondary">
          <h1 className="font-bold text-3xl">Hasil Survey Perokok</h1>
          <p className="text-lg">Halo! Terima kasih telah mengisi form ini!😊</p>
          <table border="2">
            <thead>
              <th>Nama</th>
              <th>Umur</th>
              <th>Gender</th>
              <th>Perokok</th>
              <th>Jenis Rokok</th>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.gender}</td>
                  <td>{item.smoker}</td>
                  <td>{item.cigarette.join(',')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <button onClick={handleBack} className="bg-secondary text-white rounded cursor-pointer shadow py-3 mt-3">
          Kembali
        </button>
      </form>
    </div>
  );
};

export default FormPage;
