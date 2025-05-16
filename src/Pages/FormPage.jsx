import { useForm } from "react-hook-form";
import Input from "../Components/Input";
import Options from "../Components/Options";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

const FormPage = () => {
  const { register, handleSubmit } = useForm()
  const nav = useNavigate()  
  const dataForm = []

  const onSubmit = (data) => {
    // console.log(data)
    dataForm.push(data)
    window.localStorage.setItem('data', JSON.stringify(dataForm))
    nav('/result')
  }
  
  return (
    <div className="bg-primary h-fit flex flex-col items-center py-15">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 w-full max-w-[700px] px-10 ">
        <section className="flex flex-col gap-7 bg-white shadow rounded p-10 border-t-15 border-t-secondary">
          <h1 className="font-bold text-3xl">Form Survey Perokok</h1>
          <p className="text-lg">Halo! Terima kasih telah membuka halaman ini! Silakan isi survey di sini untuk membantu kami melakukan penelitian. Terima kasih!😊</p>
        </section>
        <Input {...register('name')} type="text" id="name" label="Nama" placeholder="Silahkan Masukkan Nama Anda" />
        <Input {...register('age')} type="number" id="age" label="Umur" placeholder="Berapa Umur Anda" />
        <Options {...register('gender')} title="Gender" type="radio" value={["men", "woman"]} />
        <Options {...register('smoker')} title="Apakah anda seorang perokok?" type="radio" value={["iya", "tidak"]} />
        <Options {...register('cigarette')} title="Rokok apa yang sering anda gunakkan ?" type="checkbox" value={["Marlboro", "Sampoerna", "Gudang Garam", "Lainnya"]} />
        <button className="bg-secondary text-white rounded cursor-pointer shadow py-3 mt-3" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default FormPage;
