<template>
<nav class="navbar navbar-expand-md">

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navBar">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse navBar justify-content-center">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Education">Education</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Work">Work</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Interests">Interests</a>
      </li>
    </ul>
  </div>

</nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped>
.navbar {
    background-color: transparent, black !important;
    
}
.nav-link{
            color: black ;
            font-size: 1.1em;
            font-weight: bold;
}
</style>
