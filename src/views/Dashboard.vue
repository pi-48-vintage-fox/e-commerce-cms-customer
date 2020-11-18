<template>
  <div class="d-flex" id="wrapper">

    <!-- Sidebar -->
    <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-heading">E-Commerce CMS</div>
      <div class="list-group list-group-flush">
        <router-link to="/dashboard/product-list" class="list-group-item list-group-item-action bg-light">Product</router-link>
        <router-link to="/dashboard/category-list" class="list-group-item list-group-item-action bg-light">Category</router-link>
        <router-link to="/dashboard/banner-list" class="list-group-item list-group-item-action bg-light">Banner</router-link>
      </div>
    </div>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">

      <div class="container-fluid">
         <router-view />
      </div>
    </div>
    <!-- /#page-content-wrapper -->

  </div>
  <!-- /#wrapper -->
</template>

<script>
export default {
  name: 'Dashboard',
  beforeRouteEnter (to, from, next) {
    const accessToken = localStorage.getItem('access_token')
    let decoded
    if (accessToken) {
      var base64Url = accessToken.split('.')[1]
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
      var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      }).join(''))
      decoded = JSON.parse(jsonPayload)
    }

    if (accessToken && decoded.role === 'admin') {
      next()
    } else {
      next('/')
    }
  }
}
</script>

<style scoped>
  #wrapper {
    overflow-x: hidden;
  }

  #sidebar-wrapper {
    min-height: 100vh;
    margin-left: -15rem;
    -webkit-transition: margin .25s ease-out;
    -moz-transition: margin .25s ease-out;
    -o-transition: margin .25s ease-out;
    transition: margin .25s ease-out;
  }

  #sidebar-wrapper .sidebar-heading {
    padding: 0.875rem 1.25rem;
    font-size: 1.2rem;
  }

  #sidebar-wrapper .list-group {
    width: 15rem;
  }

  #page-content-wrapper {
    min-width: 100vw;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: 0;
  }

  @media (min-width: 768px) {
    #sidebar-wrapper {
      margin-left: 0;
    }

    #page-content-wrapper {
      min-width: 0;
      width: 100%;
    }

    #wrapper.toggled #sidebar-wrapper {
      margin-left: -15rem;
    }
  }
</style>
