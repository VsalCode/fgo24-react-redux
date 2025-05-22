import { useForm } from "react-hook-form";
import Input from "../Components/Input";
import Options from "../Components/Options";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from 'react-redux'
import { addSurveyResult } from '../redux/reducers/surveyResult'

const validation = yup.object({
  name: yup.string().min(3, "nama minimal 3 karakter!").required("Nama Harus Diisi !"),
  age: yup.number().min(18, "Anda harus berusia minimal 18 tahun").required(),
  gender: yup.mixed().oneOf( ['men', 'woman']).required("Harus Pilih Salah Satu!"),
  smoker: yup.mixed().oneOf(['iya', 'tidak']).required("Harus Pilih Salah Satu!"),
  cigarette: yup.array().notRequired()
})

const FormPage = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(validation)
  })
  const nav = useNavigate()  
  // const dataForm = []

  const onSubmit = (data) => {
    // console.log(data)
    let sanitization = -1
    if(data.age < 0){
      sanitization *= data.age
    } else{
      sanitization = data.age
    }

    data.age = sanitization
    // dataForm.push(data)
    // window.localStorage.setItem('data', JSON.stringify(dataForm))

    dispatch(addSurveyResult(data))
    nav('/result')
  }
  
  return (
    <div className="bg-primary h-fit flex flex-col items-center py-15">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 w-full max-w-[700px] px-10 ">
        <section className="section border-t-15 border-t-secondary">
          <h1 className="font-bold text-3xl pb-5">Form Survey Perokok</h1>
          <p className="text-lg">Halo! Terima kasih telah membuka halaman ini! Silakan isi survey di sini untuk membantu kami melakukan penelitian. Terima kasih!😊</p>
        </section>
        <Input error={errors.name && <div className="bg-white text-red-600 py-2">{errors.name.message}</div>} {...register('name')} type="text" id="name" label="Nama" placeholder="Silahkan Masukkan Nama Anda" />
        
        <Input error={errors.name && <div className="bg-white text-red-600 py-2">{errors.age.message}</div>} {...register('age')} type="number" id="age" label="Umur" placeholder="Berapa Umur Anda" />
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
