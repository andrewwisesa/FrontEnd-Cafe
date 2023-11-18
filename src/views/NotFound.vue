<template>
    <div class="error-page">
        <h1>404</h1>
        <h2>Not Found</h2>
        <p>Halaman tidak ditemukan</p>
        <button class="btn btn-outline-danger" @click="balik">Kembali</button>
    </div>
</template>

<script>
export default {
    methods: {
        balik() {
            if (localStorage.getItem('role') === 'admin') {
                location.href = '/adminHome'
            } else if (localStorage.getItem('role' === 'kasir')) {
                location.href = '/kasirHome'
            } else if (localStorage.getItem('role') === ',manajer') {
                location.href = '/managerHome'
            }
        }
    }
}
</script>

<style scoped>
.error-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
}
h1 {
    font-size: 6rem;
    margin-bottom: 1rem;
}
h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}
p {
    font-size: 1.5rem;
}
</style>