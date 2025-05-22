import { Link} from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

const FormPage = () => {
  const [ result, setResult ] = useState([])
  const formResult = useSelector(state => state.surveyResult.data) 

  useEffect(() => {
    setResult(formResult)
    console.log(result);
    
  }, [result])

  function handleDelete(index){
    setResult(result.filter((_, i) => i !== index))
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
              <th></th>
            </thead>
            <tbody className="border">
              {result.map((item) => (
                <tr key={item.id} className="border">
                  <td className="border text-center py-3">{item.name}</td>
                  <td className="border text-center py-3">{item.age}</td>
                  <td className="border text-center py-3">{item.gender}</td>
                  <td className="border text-center py-3">{item.smoker}</td>
                  <td className="border text-center py-3">{item.cigarette?.join(',')}</td>
                  <td className="text-center px-1"><button onClick={handleDelete} className="cursor-pointer border-none"> <MdDelete className="text-2xl text-[#CB0404]" /> </button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <Link to="/" className="bg-secondary text-white rounded cursor-pointer shadow py-3 mt-3 text-center">
          Kembali
        </Link>
      </form>
    </div>
  );
};

export default FormPage;
