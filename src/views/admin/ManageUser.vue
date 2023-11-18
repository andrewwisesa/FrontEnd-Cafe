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
<!-- Team Start -->
<div class="container-xxl pt-5 pb-3">
                <div class="container">
                    <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h5 class="section-title ff-secondary text-center text-primary fw-normal">Team Members</h5>
                        <h1 class="mb-5">Our Master Chefs</h1>
                    </div>
                    <button style="border-radius: 10px;" class="btn btn-outline-dark mb-4" data-bs-toggle="modal"
                        data-bs-target="#addUser"><i class="bi bi-person-plus"></i></button>
                    <table class="table table-hover table-striped">
                        <thead>
                            <tr class="bg-dark text-light">
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(user, number) in datauser" :key="number">
                                <td>{{ number + 1 }}</td>
                                <td>{{ user.nama_user }}</td>
                                <td>{{ user.username }}</td>
                                <td>
                                    <span v-if="user.gender == 'L'">Laki-laki</span>
                                    <span v-else>Perempuan</span>
                                </td>
                                <td>{{ user.role }}</td>
                                <td>
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal"
                                            data-bs-target="#edituser" @click="getdetail(user)"><i
                                                class="bi bi-gear-fill"></i></button>
                                        <button type="button" class="btn btn-outline-info"><i
                                                class="bi bi-eye-fill"></i></button>
                                        <button type="button" class="btn btn-outline-danger" @click="deleteuser(user)"><i
                                                class="bi bi-trash-fill"></i></button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- Team End -->

            
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
            <!-- MODAL ADD USER -->
        <div class="modal fade" id="addUser" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">ADD | USER</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="save">
                        <div class="modal-body">
                            <label for="nama">Nama:</label>
                            <input type="text" class="form-control" v-model="user.nama_user" required autocomplete="off"
                                placeholder="Masukkan nama...">

                            <label for="email">Email:</label>
                            <input type="text" class="form-control" v-model="user.username" required autocomplete="off"
                                placeholder="Masukkan email...">

                           <label for="gender">Gender</label>
                            <select id="gender" class="form-control" required v-model="user.gender">
                                <option value="L" style="background-color:blue; color:white;">Laki-Laki</option>
                                <option value="P" style="background-color:pink; color:white;">Perempuan</option>
                            </select>

                            <label for="password">Password:</label>
                            <input type="password" class="form-control" v-model="user.password" required
                                placeholder="Masukkan password...">

                            <label for="role">Role:</label>
                            <select v-model="user.role" id="role" class="form-control" required>
                                <option value="kasir">Kasir</option>
                                <option value="admin">Admin</option>
                                <option value="manager">Manager</option>
                            </select>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Save changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- END MODAL ADD USER -->


        <!-- MODAL EDIT USER -->
        <div class="modal fade" id="edituser" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Edit User</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="edituser">
                        <div class="modal-body">

                            <label for="nama">Nama:</label>
                            <input type="text" class="form-control" v-model="edit.nama_user" required autocomplete="off">

                            <label for="email">Email:</label>
                            <input type="email" class="form-control" v-model="edit.username" required autocomplete="off">

                            <label for="gender">Gender:</label>
                            <select class="form-control" v-model="edit.gender" required id="gender">
                                <option value="L" style="background-color: lightblue; color:black;">Laki-laki</option>
                                <option value="P" style="background-color: pink; color:black;">Perempuan</option>
                                <option value="L">Walmart Bag</option>
                            </select>

                            <label for="password">Password:</label>
                            <input type="password" class="form-control" v-model="edit.password" required>

                            <label for="Role">Role:</label>
                            <select class="form-control" v-model="edit.role" required id="Role">
                                <option value="admin">Admin</option>
                                <option value="kasir">Kasir</option>
                                <option value="manager">Manager</option>
                            </select>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- END MODAL EDIT USER -->

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
            user: {},
            datauser: {},
            detail: {},
            edit: {},

        }
    },
    mounted() {
        this.getuser()
        // this.getdetailuser()
    },
    methods: {
        tes() {
            console.log('P udah nih')
        },
        getuser() {
            axios.get('http://localhost:8000/api/getuser')
                .then(
                    ({ data }) => {
                        this.datauser = data
                        console.log(data)
                    }
                )
        },
        getdetail(user) {
            axios.get('http://localhost:8000/api/getuser/' + user.id_user)
                .then(
                    (response) => {
                        // console.log(data)
                        this.edit = response
                        this.edit.id_user = response.data[0].id_user
                        this.edit.nama_user = response.data[0].nama_user
                        this.edit.username = response.data[0].username
                        this.edit.password = response.data[0].password
                        this.edit.gender = response.data[0].gender
                        this.edit.role = response.data[0].role
                        // this.nama = response.data[0].nama
                    }
                )
        },
        save() {
            swal({
                icon: 'warning',
                title: 'You sure?',
                dangerMode: true,
                buttons: true
            }).then(
                (save) => {
                    if (save) {
                        axios.post('http://localhost:8000/api/createuser', this.user)
                            .then(
                                (response) => {
                                    console.log(response)
                                    swal({
                                        icon: 'success',
                                        title: 'Success',
                                    })
                                    setTimeout(() => {
                                        location.reload()
                                    }, 1200);
                                }
                            )
                            .catch(
                                (error) => {
                                    if (error.response || error.response.status === 422) {
                                        swal({
                                            icon: 'error',
                                            title: 'Email is already taken',
                                            button: true
                                        })
                                    }
                                }
                            )
                    }
                }
            )
        },
        edituser() {
            swal({
                icon: 'warning',
                title: 'Are you sure?',
                dangerMode: true,
                buttons: true
            }).then(
                (save) => {
                    if (save) {
                        axios.put('http://localhost:8000/api/updateuser/' + this.edit.id_user, this.edit)
                            .then(
                                (response) => {
                                    console.log(response)
                                    swal({
                                        icon: 'success',
                                        title: 'success',
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
                                        title: 'Failed Update User',
                                        buttons: true
                                    })
                                }
                            )
                    }
                }
            )
        },
        deleteuser(user) {
            swal({
                icon: 'warning',
                title: 'Are you sure?',
                dangerMode: true,
                buttons: true
            }).then(
                (hapus) => {
                    if (hapus) {
                        axios.delete('http://localhost:8000/api/deleteuser/' + user.id_user)
                            .then(
                                (response) => {
                                    console.log(response)
                                    swal({
                                        title: 'Success',
                                        icon: 'success',
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
                                        title: 'Failed delete user '
                                    })
                                }
                            )
                    } else {
                        swal({
                            icon: 'success',
                            title: 'Your data is safe',
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
