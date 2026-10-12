import { Elysia } from 'elysia'

const app = new Elysia()
  // Root endpoint
  .get('/', () => ({ message: 'Selamat datang di REST API Elysia + TypeScript!' }))

  // 1. GET: Mengambil data resource
  .get('/items', () => {
    return {
      status: 'success',
      method: 'GET',
      data: [
        { id: 1, name: 'Item Alpha' },
        { id: 2, name: 'Item Beta' },
      ],
    }
  })

  // 2. POST: Menambahkan data baru
  .post('/items', ({ body }) => {
    return {
      status: 'success',
      method: 'POST',
      message: 'Data berhasil ditambahkan',
      receivedData: body,
    }
  })

  // 3. PUT: Memperbarui seluruh data berdasarkan ID
  .put('/items/:id', ({ params, body }) => {
    return {
      status: 'success',
      method: 'PUT',
      message: `Data dengan ID ${params.id} berhasil diperbarui sepenuhnya`,
      updatedData: body,
    }
  })

  // 4. PATCH: Memperbarui sebagian data berdasarkan ID
  .patch('/items/:id', ({ params, body }) => {
    return {
      status: 'success',
      method: 'PATCH',
      message: `Data dengan ID ${params.id} berhasil diperbarui sebagian`,
      patchedData: body,
    }
  })

  // 5. DELETE: Menghapus data berdasarkan ID
  .delete('/items/:id', ({ params }) => {
    return {
      status: 'success',
      method: 'DELETE',
      message: `Data dengan ID ${params.id} berhasil dihapus`,
    }
  })

  // 6. CONNECT: Method khusus untuk tunneling/koneksi proxy (menggunakan .route)
  .route('CONNECT', '/tunnel', () => {
    return {
      status: 'success',
      method: 'CONNECT',
      message: 'Koneksi tunnel berhasil diinisialisasi',
    }
  })

  .listen(3000)

console.log(
  `🦊 Elysia berjalan di http://${app.server?.hostname}:${app.server?.port}`
)