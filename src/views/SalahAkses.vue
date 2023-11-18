<template>
    <div class="error-page">
        <h1>403</h1>
        <h2>Tindakan Di Larang!!</h2>
        <p>Pastikan anda login sesuai role.</p>
        <button class="btn btn-outline-danger" @click="balik">Kembali</button>
    </div>
</template>

<script>
export default {
    methods: {
        balik() {
            if (localStorage.getItem('role') === 'admin') {
                location.href = '/adminhome'
            } else if (localStorage.getItem('role')  === 'kasir') {
                location.href = '/kasirhome'
            } else if (localStorage.getItem('role') === 'manager') {
                location.href = '/managerhome'
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