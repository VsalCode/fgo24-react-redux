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
        <section className="section border-t-15 border-t-secondary">
          <h1 className="font-bold text-3xl">Hasil Survey Perokok</h1>
          <p className="text-lg">Halo! Terima kasih telah mengisi form ini!😊</p>
          <table className="border mt-5">
            <thead className="border">
              <th className="border text-center py-3">Nama</th>
              <th className="border text-center py-3">Umur</th>
              <th className="border text-center py-3">Gender</th>
              <th className="border text-center py-3">Perokok</th>
              <th className="border text-center py-3">Jenis Rokok</th>
            </thead>
            <tbody className="border">
              {data.map((item) => (
                <tr key={item} className="border">
                  <td className="border text-center py-3">{item.name}</td>
                  <td className="border text-center py-3">{item.age}</td>
                  <td className="border text-center py-3">{item.gender}</td>
                  <td className="border text-center py-3">{item.smoker}</td>
                  <td className="border text-center py-3">{item.cigarette.join(',')}</td>
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
