import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import { removeData } from '../redux/reducers/surveyResult';

const FormPage = () => {
  const dispatch = useDispatch();
  const formResult = useSelector((state) => state.surveyResult.data);

  return (
    <div className="bg-primary h-fit flex flex-col items-center py-15">
      <div className="flex flex-col gap-3 w-full max-w-[700px] px-10">
        <section className="bg-white border-t-4 border-t-secondary p-5">
          <h1 className="font-bold text-3xl">Hasil Survey Perokok</h1>
          <p className="text-lg">Halo! Terima kasih telah mengisi form ini! 😊</p>
          <table className="border mt-5 w-full">
            <thead className="border">
              <tr>
                <th scope="col" className="border text-center py-3">Nama</th>
                <th scope="col" className="border text-center py-3">Umur</th>
                <th scope="col" className="border text-center py-3">Gender</th>
                <th scope="col" className="border text-center py-3">Perokok</th>
                <th scope="col" className="border text-center py-3">Jenis Rokok</th>
                <th scope="col" className="border text-center py-3">Aksi</th>
              </tr>
            </thead>
            <tbody className="border">
              {formResult.map((item, index) => (
                <tr key={index} className="border">
                  <td className="border text-center py-3">{item.name}</td>
                  <td className="border text-center py-3">{item.age}</td>
                  <td className="border text-center py-3">{item.gender}</td>
                  <td className="border text-center py-3">{item.smoker}</td>
                  <td className="border text-center py-3">
                    {item.cigarette?.join(', ') || 'N/A'}
                  </td>
                  <td className="text-center px-1">
                    <button
                      onClick={() => {dispatch(removeData(index)) }}
                      className="cursor-pointer border-none"
                      aria-label={`Delete entry for ${item.name}`}
                    >
                      <MdDelete className="text-2xl text-[#CB0404]" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <Link
          to="/"
          className="bg-secondary text-white rounded cursor-pointer shadow py-3 mt-3 text-center"
        >
          Kembali
        </Link>
      </div>
    </div>
  );
};

export default FormPage;