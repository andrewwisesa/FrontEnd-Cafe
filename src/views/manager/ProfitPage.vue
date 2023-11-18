<template>
    <div>
        <div class="container-xxl bg-white p-0">
            <!-- Spinner Start -->
            <!-- <div id="spinner"
                class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div> -->
            <!-- Spinner End -->


            <!-- Navbar & Hero Start -->
            <div class="container-xxl position-relative p-0">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                    <a href="" class="navbar-brand p-0">
                        <h1 class="text-primary m-0"><i class="fa fa-utensils me-3"></i>Wikusama Cafe</h1>
                        <!-- <img src="img/logo.png" alt="Logo"> -->
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="fa fa-bars"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav ms-auto py-0 pe-4">
                            <a href="/ManagerHome" class="nav-item nav-link active">Home</a>
                            <a href="/AllTransaksi" class="nav-item nav-link">Filter Nama</a>
                            <a href="/FilterTransaksi" class="nav-item nav-link">Filter Tanggal&Bulan</a>
                            <a href="/ProfitPage" class="nav-item nav-link">Filter Profit</a>
                            <!-- <a href="/menu" class="nav-item nav-link">Menu</a> -->
                            <a href="#" @click="logout" class="nav-item nav-link">LogOut</a>
                        </div>
                        <a href="" class="btn btn-primary py-2 px-4">Manager</a>
                    </div>
                </nav>

                <div class="container-xxl py-5 bg-dark hero-header mb-5">
                    <div class="container my-5 py-5">
                        <div class="row align-items-center g-5">
                            <div class="col-lg-6 text-center text-lg-start">
                                <h1 class="display-3 text-white animated slideInLeft">Welcome<br>Wikusama | Cafe</h1>
                                <p class="text-white animated slideInLeft mb-4 pb-2">"Kafe kami, tempat nikmatnya bertemu rasa dan inspirasi."</p>
                                <a href="" class="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Manager</a>
                            </div>
                            <div class="col-lg-6 text-center text-lg-end overflow-hidden">
                                <img class="img-fluid" src="img/hero.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Navbar & Hero End -->
            -- Service Start -->
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h5 class="section-title ff-secondary text-center text-primary fw-normal">Transaction profit</h5>
                    </div>

                    <div class="row mt-3">
                        <div class="col">
                            <input type="date" class="form-control" v-model="cari_tgl">
                        </div>
                        <div class="col">
                            <input type="month" class="form-control" v-model="cari_bulan">
                        </div>
                        <div class="col">
                            <input type="submit" @click="getdate" class="btn btn-outline-primary">
                        </div>
                    </div>

                    <div class="card mt-4">
                        <div class="card-header">
                            Penghasilan
                        </div>
                        <div class="card-body">
                            <h5 class="card-title" v-if="this.cari_bulan">Pendapatan bulan {{ cari_bulan }} Adalah Rp.{{
                                profitbulan }}</h5>
                            <p class="card-text" v-if="this.cari_tgl">Pendapatan Tanggal {{ cari_tgl }} Adalah Rp.{{
                                profithari }}</p>
                        </div>
                    </div>

                </div>
                <div style="width: 300px; height: 300px; margin: auto;" class="mt-4">
                <canvas id="piechart" width="300" height="300"></canvas>
            </div>
            </div>
            <!-- Service End -->

            
            <!-- footer section -->
  <footer class="footer_section">
    <div class="container">
      <div class="row">
        <div class="col-md-4 footer-col">
          <div class="footer_contact">
            <h4>
              Kontak
            </h4>
            <div class="contact_link_box">
              <a href="https://maps.app.goo.gl/XKfYNJDiNXigyTuZA">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <span>
                  Lokasi
                </span>
              </a>
              <a href="">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span>
                  Hubungi 0863753626
                </span>
              </a>
              <a href="">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span>
                  wikusamacafe@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-4 footer-col">
          <div class="footer_detail">
            <a href="" class="footer-logo">
              Wikusama Cafe
            </a>
            <p>
                Wikusama Cafe dimulai pada tahun 2025-an di kota Malang sebagai sebuah usaha kecil yang didirikan oleh Angga, seorang pengusaha muda. Ia memiliki visi untuk menciptakan sebuah tempat yang nyaman dan hangat di mana orang dapat menikmati kopi berkualitas tinggi sambil bersantai atau bekerja
            </p>
            <div class="footer_social">
              <a href="">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-pinterest" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-4 footer-col">
          <h4>
            Buka Jam
          </h4>
          <p>
            Senin - Sabtu
          </p>
          <p>
            10 Pagi - 8 Malam
          </p>
        </div>
      </div>
      <div class="footer-info">
        
      </div>
    </div>
     <!-- Back to Top -->
     <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
  </footer>
  <!-- footer section -->
<!-- DETAIL -->
<div class="modal fade" id="detail" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">DETAIL</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <!-- <table class="table table-hover table-striped">
                                <thead class="bg-light text dark">
                                    <tr>
                                        <th>No</th>
                                        <th>Menu</th>
                                        <th>Jumlah</th>
                                        <th>Harga</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(t, nomor) in detail" :key="nomor">
                                        <td>{{ nomor + 1 }}</td>
                                        <td>{{ t.nama }}</td>
                                        <td>{{ t.total_pesanan }}</td>
                                        <td>{{ t.total_harga }}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>Total Harga: <b>{{ total }}</b></p> -->
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END DETAIL -->

            <!-- Back to Top -->
            
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert'
import Chart from 'chart.js/auto'
// import axios from 'axios'
// import { filter } from 'vue/types/umd';
// import { filter } from 'vue/types/umd'

export default {
    data() {
        return {
            cari_bulan: '',
            cari_tgl: '',
            profitbulan: '',
            profithari: '',
            datamenu: {}
        }
    },
    mounted() {
        this.getdate()
        axios.get('http://localhost:8000/api/getmenu')
            .then(
                (response) => {
                    console.log(response)
                    const data = response.data.map(item => item.jumlah_pesan)
                    const nama = response.data.map(item => item.nama_menu)

                    let colors = []
                    for (let i = 0; i < data.length; i++) {
                        let color = '#' + Math.floor(Math.random() * 16777215).toString(16)
                        colors.push(color)
                    }

                    const chartData = {
                        labels: nama,
                        datasets: [{
                            data: data,
                            backgroundColor: colors
                        }]
                    }


                    new Chart(document.getElementById('piechart'), {
                        type: 'pie',
                        labels: 'Data Menu',
                        data: chartData,
                        options: {
                            responsive: true
                        }
                    })
                })
            .catch(
                err => {
                    console.log(err)
                }
            )
    },
    computed: {
    },
    methods: {
        getdate() {
            if (this.cari_bulan) {
                axios.get('http://localhost:8000/api/getmonth/' + this.cari_bulan)
                    .then(
                        ({ data }) => {
                            console.log(data)
                            this.profitbulan = data
                        }
                    )
            }

            if (this.cari_tgl) {
                axios.get('http://localhost:8000/api/getday/' + this.cari_tgl)
                    .then(
                        ({ data }) => {
                            console.log(data)
                            this.profithari = data
                        }
                    )
            }

            // if (this.cari_bulan && this.cari_tgl) {
            //     swal({
            //         icon: 'warning',
            //         title: 'Cari salah satu!',
            //         button: true
            //     })
            // }
        },
        logout() {
            swal({
                icon: 'warning',
                title: 'Ingin Log Out?',
                dangerMode: true,
                buttons: true
            }).then(
                (response) => {
                    if (response) {
                        localStorage.removeItem('role')
                        localStorage.removeItem('token')
                        swal({
                            icon: 'success',
                            button: false
                        })
                        setTimeout(() => {
                            location.href = '/loginpage'
                        }, 1200);
                    }
                }
            )
        }
    }
}
</script>
