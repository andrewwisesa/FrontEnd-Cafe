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
                            <a href="/kasirhome" class="nav-item nav-link active">Home</a>
                            <a href="/transaksi" class="nav-item nav-link">transaction</a>
                            <a href="/ongoing" class="nav-item nav-link">On Going</a>
                            <a href="/history" class="nav-item nav-link">History</a>
                            <!-- <a href="/menu" class="nav-item nav-link">Menu</a> -->
                            <a href="#" @click="logout" class="nav-item nav-link">LogOut</a>
                        </div>
                        <a href="" class="btn btn-primary py-2 px-4">Cashier</a>
                    </div>
                </nav>

                <div class="container-xxl py-5 bg-dark hero-header mb-5">
                    <div class="container my-5 py-5">
                        <div class="row align-items-center g-5">
                            <div class="col-lg-6 text-center text-lg-start">
                                <h1 class="display-3 text-white animated slideInLeft">Welcome<br>Wikusama | Cafe</h1>
                                <p class="text-white animated slideInLeft mb-4 pb-2">"Kafe kami, tempat nikmatnya bertemu rasa dan inspirasi."</p>
                                <a href="" class="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Kasir</a>
                            </div>
                            <div class="col-lg-6 text-center text-lg-end overflow-hidden">
                                <img class="img-fluid" src="img/hero.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Navbar & Hero End -->
            
  <!-- Service Start -->
  <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h5 class="section-title ff-secondary text-center text-primary fw-normal mb-4">On Going</h5>
                    </div>
                    <input type="number" class="form-control mb-4" v-model="cari_meja" placeholder="Cari nomor meja..."
                        autocomplete="off">
                    <div class="row g-4">

                        <div data-bs-toggle="modal" data-bs-target="#finish" @click="handleclick(meja)"
                            class="col-lg-3 col-sm-6 wow fadeInUp" v-for="meja in filter_ongoing" :key="meja.id_meja"
                            data-wow-delay="0.3s">
                            <div class="service-item rounded pt-3">
                                <div class="p-4">
                                    <i class="fa fa-3x fa-utensils text-primary mb-4"></i>
                                    <h5>Meja Nomor : {{ meja.nomor_meja }}</h5>
                                    <p>
                                        <span v-if="meja.status == 'digunakan'" class="badge bg-danger">Di Gunakan</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
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

            <!-- FINISH TRANSAKSI -->
            <div class="modal fade" id="finish" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">SELESAIKAN TRANSAKSI</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form @submit.prevent="selesaitransaksi">
                            <div class="modal-body">
                                <span style="font-family: 'Times New Roman', Times, serif;">ATAS NAMA: <b>{{
                                    detail_ongoing.nama_pelanggan }}</b> </span>
                                <br>
                                <span style="font-family: 'Times New Roman', Times, serif;">TOTAL HARGA: <b>{{
                                    totalharga }}</b> </span>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary">Selesai</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- END FINISH TRANSAKSI -->

            <!-- Back to Top -->
            
        </div>
    </div>
</template>

<script>



import axios from 'axios'
import swal from 'sweetalert'

export default {
    data() {
        return {
            ongoing: {},
            totalharga: '',
            detail_ongoing: {},
            cari_meja: ''
        }
    },
    mounted() {
        this.getongoing()
        this.gettotalharga()
    },
    computed: {
        filter_ongoing() {
            let filtered = this.ongoing
            if (this.cari_meja) {
                filtered = filtered.filter(meja => meja.nomor_meja.toString().toLowerCase().includes(this.cari_meja.toLowerCase()))
            }
            return filtered
        }
    },
    methods: {
        getongoing() {
            axios.get('http://localhost:8000/api/getongoing')
                .then(
                    ({ data }) => {
                        console.log(data)
                        this.ongoing = data
                    }
                )
        },
        handleclick(meja) {
            this.getdetailtransaksi(meja)
            this.gettotalharga(meja)
        },
        getdetailtransaksi(meja) {
            axios.get('http://localhost:8000/api/get_ongoing_transaksi/' + meja.id_meja)
                .then(
                    ({ data }) => {
                        console.log(data)
                        this.detail_ongoing = data
                    }
                )
        },
        gettotalharga(meja) {
            axios.get('http://localhost:8000/api/gettotalharga/' + meja.id_meja)
                .then(
                    ({ data }) => {
                        console.log(data)
                        this.totalharga = data
                    }
                )
        },
        selesaitransaksi() {
            swal({
                icon: 'warning',
                title: 'Complete the transaction?',
                dangerMode: true,
                buttons: true
            }).then(
                (response) => {
                    if (response) {
                        axios.put('http://localhost:8000/api/done_transaksi/' + this.detail_ongoing.id_meja, this.detail_ongoing.id_meja)
                            .then(
                                (response) => {
                                    console.log(response)
                                    swal({
                                        icon: 'success',
                                        title: 'Success'
                                    })
                                    setTimeout(() => {
                                        
                                        location.href = '/printnota/' + this.detail_ongoing.id_pelayanan
                                      }, 1200);
                                }
                            )
                            .catch(
                                (error) => {
                                    console.log(error)
                                    swal({
                                        title: 'Failed',
                                        icon: 'error'
                                    })
                                }
                            )
                    }
                }
            )
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
                            icon: 'success'
                        })
                        setTimeout(() => {
                            location.href = '/loginpage'
                        }, 1200);
                    }
                }
            )
        },
    }
}

</script>