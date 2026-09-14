<script setup>
import { BNavbar, BNavbarBrand, BNavbarToggle, BCollapse, BNavbarNav, BNavItem, BNavForm, BFormInput, BButton, BApp } from 'bootstrap-vue-next';
</script>

<template>
  <BApp>
    <div>
      <div class="navbar-container">
        <BNavbar class="navbar" toggleable="lg">
          <BNavbarBrand href="#">Programación Frontend</BNavbarBrand>

          <BNavbarToggle target="nav-collapse" />

          <BCollapse id="nav-collapse" is-nav>
            <BNavbarNav>
              <BNavItem to="/">Cálculo de calificaciones</BNavItem>
              <BNavItem to="/formulario-registro">Formulario de registro</BNavItem>
              <BNavItem disabled>En construcción</BNavItem>
            </BNavbarNav>

            <BNavbarNav class="ms-auto">
              <BNavForm>
                <BFormInput size="sm" class="me-sm-2" placeholder="Buscar"></BFormInput>
                <BButton size="sm" class="my-2 my-sm-0" type="submit">Buscar</BButton>
              </BNavForm>
            </BNavbarNav>
          </BCollapse>
        </BNavbar>
      </div>

      <section>

      </section>
      <RouterView />
    </div>
  </BApp>
</template>

<style scoped>
.navbar-container {
  background-color: #f8f9fa;
}

.navbar {
  max-width: 1400px;
  margin: 0 auto;
}
</style>
