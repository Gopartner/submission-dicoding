import React from 'react';
//import data from './e-KTP.json'; // Impor data JSON
import data from '../data/e-KTP.json'
//import foto from '../assets/profile.jpg';

const CardKTP = ({ data }) => {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="flex">
        <div className="w-1/2 p-4">
          <div className="uppercase text-sm text-gray-500 font-semibold">{data.provinsi}</div>
          <div className="text-lg font-semibold">{data.kota}</div>
          <div className="mt-2">
            <span className="font-bold">NIK:</span> {data.nik}
          </div>
          <div>
            <span className="font-bold">Nama:</span> {data.nama}
          </div>
          <div>
            <span className="font-bold">Tempat/Tanggal Lahir:</span> {data.tempatLahir}, {data.tanggalLahir}
          </div>
          <div>
            <span className="font-bold">Jenis Kelamin:</span> {data.jenisKelamin}

          </div>
          <div>
            <span className="font-bold">Golongan Darah:</span> {data.golonganDarah}
          </div>
          <div>
            <span className="font-bold">Alamat:</span> {data.alamat}
          </div>
          <div>
            <span className="font-bold">RT/RW:</span> {data.rtRw}
          </div>
          <div>
            <span className="font-bold">Kelurahan/Desa:</span> {data.kelurahanDesa}
          </div>
          <div>
            <span className="font-bold">Kecamatan:</span> {data.kecamatan}
          </div>
          <div>
            <span className="font-bold">Agama:</span> {data.agama}
          </div>
          <div>
            <span className="font-bold">Status Perkawinan:</span> {data.statusPerkawinan}
          </div>
          <div>
            <span className="font-bold">Pekerjaan:</span> {data.pekerjaan}
          </div>
          <div>
            <span className="font-bold">Kewarganegaraan:</span> {data.kewarganegaraan}
          </div>
          <div>
            <span className="font-bold">Berlaku Hingga:</span> {data.berlakuHingga}
          </div>
        </div>
        <div className="w-1/2 p-4 bg-gray-200 flex items-center justify-center">
          <img className="h-48 w-auto object-cover" src={data.foto} alt="Foto" />
          <div className="text-center text-sm text-gray-600 mt-2">{data.tulisanBawahFoto}</div>
        </div>
      </div>
    </div>
  );
};

export default CardKTP;

