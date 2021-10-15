<template>
<nav class="navbar navbar-expand-md navbar-light">

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
        <a class="nav-link" href="/Work">Work Experience</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/VolunteerWorkandAwards">Volunteer Work & Awards</a>
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
* {
  font-family: sans-serif;
}

.navbar {
    background-color: transparent, white !important;
    color: black !important;
    
}
.nav-link{
            color: black !important;
            font-size: 1.1em;
            font-weight: bold;
            padding-right: 1em !important;
}
</style>
