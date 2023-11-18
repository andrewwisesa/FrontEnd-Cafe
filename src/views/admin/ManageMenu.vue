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


<!-- Menu Start -->
<div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h5 class="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
                        <h1 class="mb-5">Most Popular Items</h1>
                    </div>
                    <button class="btn btn-outline-dark mb-4" data-bs-toggle="modal" data-bs-target="#addmenu"><i
                            class="bi bi-cart-plus-fill"></i></button>

                    <!-- <button class="btn btn-outline-dark mb-4" data-bs-toggle="modal" data-bs-target="#addmenu"><i
                            class="bi bi-cart-plus-fill"></i></button> -->

                    <input type="text" class="form-control mb-4" v-model="carimenu" placeholder="Search menu...">
                    <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">

                        <div class="tab-content">
                            <div id="tab-1" class="tab-pane fade show p-0 active">
                                <!-- MENU -->
                                <!-- <div class="row g-4 mb-5" v-for="menu in filter_menu" :key="menu.id_menu">
                                    <div class="col-lg-6">
                                        <div class="d-flex align-items-center">
                                            <img class="flex-shrink-0 img-fluid rounded"
                                                :src="'http://localhost/KasirCafe/public/images/' + menu.foto"
                                                alt="Kopi mas" style="width: 80px;">
                                            <div class="w-100 d-flex flex-column text-start ps-4">
                                                <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                    <span>{{ menu.nama_menu }} <button class="btn btn-outline-primary"
                                                            data-bs-toggle="modal" @click="getdetail(menu)"
                                                            data-bs-target="#addmenu"><i
                                                                class="bi bi-cart-plus-fill"></i></button></span>

                                                    <span class="text-primary">Rp.{{ menu.harga }}</span>
                                                </h5>
                                                <small class="fst-italic">Ipsum ipsum clita erat amet dolor justo
                                                    diam</small>
                                            </div>
                                        </div>
                                    </div>
                                </div> -->
                               
                                <table class="table">
                                    <thead>
                                        <tr class="bg-dark text-light">
                                            <th>No</th>
                                            <th>Menu</th>
                                            <th>Type</th>
                                            <th>Harga</th>
                                            <th>Foto</th>
                                            <th>Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(menu,nomor) in filter_menu" :key="nomor">
                                            <td>{{ nomor + 1 }}</td>
                                            <td>{{ menu.nama_menu }}</td>
                                            <td>{{ menu.jenis }}</td>
                                            <td>{{ menu.harga }}</td>
                                            <td> <img
                                                :src="'http://localhost/KasirCafe/public/images/' + menu.foto"
                                                alt="Kopi mas" style="width: 220px;"></td>
                                            <td>
                                                <!-- <button data-bs-toggle="modal" data-bs-target="#addmenu"> <span class="text">Buat Menu</span>
                                                     <span class="blob"></span>
                                                    <span class="blob"></span>
  <span class="blob"></span>
  <span class="blob"></span>

  
</button> -->
<button class="btn btn-outline-primary"
                                                            data-bs-toggle="modal" @click="getdetail(menu)"
                                                            data-bs-target="#editmenu">Update</button>
  
<button class="btn btn-outline-primary" @click="removemenu(menu)"> <span class="text">delete</span>
                                                     <span class="blob"></span>
                                                    <span class="blob"></span>
  <span class="blob"></span>
  <span class="blob"></span>

  
</button></td>
                                        </tr>
                                    </tbody>
                                </table>

                                <!-- END MENU -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Menu End -->
            
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
 <!-- ADD MENU -->
 <div class="modal fade" id="addmenu" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">ADD MENU</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form @submit.prevent="upload">
                            <div class="modal-body">

                                <label for="nama">Nama Menu:</label>
                                <input type="text" class="form-control" v-model="menu.nama_menu" required autocomplete="off"
                                    placeholder="Masukkan menu...">

                                <label for="jenis">Type: </label>
                                <select class="form-control" v-model="menu.jenis" id="jenis" required>
                                    <option value="makanan">Makanan</option>
                                    <option value="minuman">Minuman</option>
                                </select>

                                <label for="harga">Harga:</label>
                                <input type="number" class="form-control" v-model="menu.harga" required
                                    placeholder="Masukkan harga...">

                                <label for="foto">Foto:</label>
                                <input type="file" id="foto" class="form-control" @change="UploadFoto($event)" required>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary">Upload</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- END ADD MENU -->

           <!-- EDIT MENU -->
           <div class="modal fade" id="editmenu" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">EDIT MENU</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form @submit.prevent="editmenu">
                            <div class="modal-body">
                                <div class="card" style="width: 18rem;">
                                    <img :src="'http://localhost/KasirCafe/public/images/' + image"
                                        class="card-img-top" alt="...">
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col">
                                        <label for="nama">Nama Menu:</label>
                                        <input type="text" class="form-control" v-model="detailmenu.nama_menu" required>
                                    </div>

                                    <div class="col">
                                        <label for="harga">Harga:</label>
                                        <input type="number" class="form-control" v-model="detailmenu.harga" required>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <label for="jenis">Type:</label>
                                        <select class="form-control" v-model="detailmenu.jenis" required id="jenis">
                                            <option value="makanan">Makanan</option>
                                            <option value="minuman">Minuman</option>
                                        </select>
                                    </div>

                                    <!-- <div class="col">
                                        <label for="foto">Foto:</label>
                                        <input type="file" @change="updatefoto($event)" class="form-control" required
                                            id="foto">
                                    </div> -->
                                </div>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-danger" @click="removemenu()">Remove</button>
                                <button type="button" class="btn btn-info" data-bs-toggle="modal"
                                    data-bs-target="#editfoto">Update Photo</button>
                                <button type="submit" class="btn btn-primary">save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- END EDIT MENU -->

            <!-- EDIT FOTO -->
            <div class="modal fade" id="editfoto" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">UPDATE PHOTO</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form @submit.prevent="savefoto">
                            <div class="modal-body">
                                <input type="file" class="form-control" @change="updatefoto($event)" id="foto" required>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                                    aria-label="Close">Close</button>
                                <button type="submit" class="btn btn-primary">Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- END EDIT FOTO -->

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
            menu: {},
            datamenu: {},
            detailmenu: {},
            foto: '',
            image: '',
            carimenu: ''
        }
    },
    mounted() {
        this.getmenu()
        this.getdetail()
    },
    computed: {
        filter_menu() {
            let filter_data = this.datamenu
            if (this.carimenu) {
                filter_data = filter_data.filter(menu => menu.nama.toString().toLowerCase().includes(this.carimenu.toLowerCase()))
            }
            return filter_data
        }
    },
    methods: {
        getmenu() {
            axios.get('http://localhost:8000/api/getmenu')
                .then(
                    ({ data }) => {
                        this.datamenu = data
                    }
                )
        },
        getdetail(menu) {
            axios.get('http://localhost:8000/api/getmenu/' + menu.id_menu)
                .then(
                    (response) => {
                        console.log(response)
                        this.detailmenu.id_menu = response.data[0].id_menu
                        this.detailmenu.nama_menu = response.data[0].nama_menu
                        this.image = response.data[0].foto
                        this.detailmenu.jenis = response.data[0].jenis
                        this.detailmenu.harga = response.data[0].harga
                    }
                )
        },
        UploadFoto(e) {
            this.menu.foto = e.target.files[0]
        },
        upload() {
            let form = new FormData
            form.append('foto', this.menu.foto)
            form.append('nama_menu', this.menu.nama_menu)
            form.append('jenis', this.menu.jenis)
            form.append('harga', this.menu.harga)

            axios.post('http://127.0.0.1:8000/api/createmenu', form)
                .then(
                    (response) => {
                        console.log(response)
                        swal({
                            icon: 'success',
                            title: 'Success'
                        })
                        setTimeout(() => {
                            location.reload()
                        }, 1200);
                    }
                )
                .catch(
                    (err) => {
                        console.log(err)
                        swal({
                            icon: 'error',
                            title: 'Failed Upload Menu',
                            button: true
                        })
                    }
                )
        },
        editmenu() {
            // let form = new FormData
            // // form.append("foto", this.detailmenu.foto)
            // form.append("nama_menu", this.detailmenu.nama)
            // form.append("jenis", this.detailmenu.jenis)
            // form.append("harga", this.detailmenu.harga)

            swal({
                icon: 'warning',
                title: 'Are you sure?',
                dangerMode: true,
                buttons: true,
            }).then(
                (deletemenu) => {
                    if (deletemenu) {
                
                    
                        axios.put('http://127.0.0.1:8000/api/updatemenu/' + this.detailmenu.id_menu, this.detailmenu)
                            .then(
                                (response) => {
                                    console.log(response)
                                    swal({
                                        icon: 'success',
                                        title: 'Success Update Menu'
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
                                        icon: 'error',
                                        title: 'Failed Update Menu'
                                    })
                                }
                            )
                            }
                        }
            )
            
        },
        updatefoto(e) {
            this.foto = e.target.files[0]
        },
        savefoto() {
            let form = new FormData
            form.append("foto", this.foto)

            axios.post('http://localhost:8000/api/updatephoto/' + this.detailmenu.id_menu, form)
                .then(
                    (response) => {
                        console.log(response)
                        swal({
                            icon: 'success',
                            title: 'Success'
                        })
                        setTimeout(() => {
                            location.reload()
                        }, 1200);
                    }
                )
                .catch(
                    (err) => {
                        console.log(err)
                        swal({
                            icon: 'error',
                            title: 'Failed Update Photo',
                            button: true
                        })
                    }
                )
        },
        removemenu(menu) {
            swal({
                icon: 'warning',
                title: 'Are you sure?',
                dangerMode: true,
                buttons: true,
            }).then(
                (deletemenu) => {
                    if (deletemenu) {
                        axios.delete('http://localhost:8000/api/deletemenu/' + menu.id_menu)
                            .then(
                                (response) => {
                                    console.log(response)
                                    swal({
                                        icon: 'success',
                                        title: 'Success remove menu'
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
                                        title: 'Failed remove menu',
                                        icon: 'error',
                                        button: true
                                    })
                                }
                            )
                    } else {
                        swal({
                            icon: 'success',
                            title: 'Your menu is safe',
                            button: true
                        })
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