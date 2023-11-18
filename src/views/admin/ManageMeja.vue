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
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  mx-auto ">
              <li class="nav-item active">
                <a class="nav-link" href="/AdminHome">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/ManageMeja">Meja</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/ManageMenu">Menu</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/ManageUser">User</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="logout" href="#">LogOut</a>
              </li>
            </ul>
                        <a href="" class="btn btn-primary py-2 px-4">Admin</a>
                    </div>
                </nav>

                <div class="container-xxl py-5 bg-dark hero-header mb-5">
                    <div class="container my-5 py-5">
                        <div class="row align-items-center g-5">
                            <div class="col-lg-6 text-center text-lg-start">
                                <h1 class="display-3 text-white animated slideInLeft">Welcome<br>Wikusama | Cafe</h1>
                                <p class="text-white animated slideInLeft mb-4 pb-2">"Kafe kami, tempat nikmatnya bertemu rasa dan inspirasi."</p>
                                <a href="" class="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Admin</a>
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
                        <h5 class="section-title ff-secondary text-center text-primary fw-normal">Our Table</h5>
                        <h1 class="mb-4">Explore Our Table</h1>
                        <button class="btn btn-outline-dark mb-4" data-bs-toggle="modal" data-bs-target="#addtable"><i
                                class="bi bi-plus-circle-fill"></i></button>
                    </div>
                    <div class="row g-4">
                        <!-- MEJA START -->
                        <div class="col-lg-3 col-sm-6 wow fadeInUp" @click="getdetail(meja)" data-bs-toggle="modal"
                            data-bs-target="#editmeja" v-for="meja in datameja" :key="meja.id_meja" data-wow-delay="0.3s">
                            <div class="service-item rounded pt-3">
                                <div class="p-4">
                                    <i class="fa fa-3x fa-utensils text-primary mb-4"></i>
                                    <h5>Table number : {{ meja.nomor_meja }}</h5>
                                    <p>
                                        <span v-if="meja.status == 'dikosongkan'" class="badge bg-success">Kosong</span>
                                        <span v-else class="badge bg-danger">Di Pakai</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <!-- MEJA END -->
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
 <!-- ADD TABLE -->
 <div class="modal fade" id="addtable" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">ADD TABLE</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form @submit.prevent="addmeja">
                            <div class="modal-body">
                                <label for="nomor">Nomor Meja: </label>
                                <input type="number" class="form-control" v-model="meja.nomor_meja" required>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary">Add Table</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- END ADD TABLE -->

            <!-- EDIT MEJA -->
            <div class="modal fade" id="editmeja" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">TABLE EDIT</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form @submit.prevent="saveedit">
                            <div class="modal-body">
                                <label for="nomor">Nomor Meja: </label>
                                <input type="number" class="form-control" v-model="detailmeja.nomor_meja" required>

                                <label for="status">Status: </label>
                                <select class="form-control" v-model="detailmeja.status" id="status">
                                    <option value="dikosongkan">Kosong</option>
                                    <option value="digunakan">Di Pakai</option>
                                </select>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-danger" @click="removemeja()">Remove</button>
                                <button type="submit" class="btn btn-primary">Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- END EDIT MEJA -->

            
        </div>
    </div>
</template>


<script>
import axios from 'axios'
import swal from 'sweetalert'

export default {
    data() {
        return {
            meja: {},
            datameja: {},
            detailmeja: {
                nomor_meja: '',
                status: '',
                id_meja: ''
            }
        }
    },
    mounted() {
        this.gettable()
    },
    methods: {
        gettable() {
            axios.get('http://localhost:8000/api/getmeja')
                .then(
                    ({ data }) => {
                        this.datameja = data
                        console.log(data)
                    }
                )
        },
        getdetail(meja) {
            axios.get('http://localhost:8000/api/getmeja/' + meja.id_meja)
                .then(
                    (response) => {
                        console.log(response)
                        this.detailmeja.nomor_meja = response.data[0].nomor_meja
                        this.detailmeja.id_meja = response.data[0].id_meja
                        this.detailmeja.status = response.data[0].status

                    }
                )
        },
        addmeja() {
            axios.post('http://localhost:8000/api/createmeja', this.meja)
                .then(
                    (response) => {
                        console.log(response)
                        swal({
                            title: 'Success add table',
                            icon: 'success'
                        })
                        setTimeout(() => {
                            location.reload()
                        }, 1200);
                    }
                )
                .catch(
                    (error) => {
                        console.log(error)
                        if (error.response || error.response.status === 422) {
                            swal({
                                icon: 'error',
                                title: 'Table is already taken',
                                button: true
                            })
                        }
                    }
                )
        },
        saveedit() {
            axios.put('http://localhost:8000/api/updatemeja/' + this.detailmeja.id_meja, this.detailmeja)
                .then(
                    (response) => {
                        console.log(response)
                        swal({
                            title: 'Success Update Meja',
                            icon: 'success'
                        })
                        setTimeout(() => {
                            location.reload()
                        }, 1200);
                    }
                )
                .catch(
                    (error) => {
                        console.log(error)
                        swal({
                            title: 'Failed Update Meja',
                            icon: 'success'
                        })
                    }
                )
        },
        removemeja() {
            swal({
                title: 'Are you sure?',
                icon: 'warning',
                dangerMode: true,
                buttons: true
            }).then(
                (hapus) => {
                    if (hapus) {
                        axios.delete('http://localhost:8000/api/deletemeja/' + this.detailmeja.id_meja)
                            .then(
                                (response) => {
                                    console.log(response)
                                    swal({
                                        title: 'Succes remove table',
                                        icon: 'success'
                                    })
                                    setTimeout(() => {
                                        location.reload()
                                    }, 1200);
                                }
                            )
                            .catch(
                                (error) => {
                                    console.log(error)
                                    swal({
                                        title: 'Failed remove table',
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

