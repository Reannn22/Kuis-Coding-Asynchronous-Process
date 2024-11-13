import { API, sampleErrorData, sampleSuccessData } from './support.mjs';

function processData(data) {
  // Gunakan Promise.all untuk menangani array of promises
  return Promise.all(
    data.map((item) => {
      // Memastikan fungsi `API.fetch` dipanggil dengan parameter yang benar
      return API.fetch(item.delay, item.simulateError);
    })
  );
}

// Menjalankan dan menampilkan hasil dari data yang berbeda
processData(sampleErrorData).then(console.log).catch(console.error);
processData(sampleSuccessData).then(console.log).catch(console.error);
