<script setup>
import { BForm, BFormGroup, BFormInput, BButton } from 'bootstrap-vue-next';
import { ref } from 'vue';

const formData = ref({
    nombre: "",
    correo: "",
    contraseña: "",
    repContraseña: ""
})

const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const regexSoloLetras = /^[a-zA-Z]+$/

const formDataInvalid = ref({
    invalidNombre: "",
    invalidNombreFormat: "",
    invalidCorreo: "",
    invalidCorreoFormat: "",
    invalidContraseña: "",
    invalidRepContraseña: "",
    invalidContraseñas: ""
})

function handleSubmitForm(event) {
    event.preventDefault()

    if (!formData.value.nombre) {
        formDataInvalid.value.invalidNombre = "El campo nombre es requerido"
    } else if (formData.value.nombre && !regexSoloLetras.test(formData.value.nombre)) {
        formDataInvalid.value.invalidNombreFormat = "El campo nombre no puede contener números"
    }
    else if (!formData.value.correo) {
        formDataInvalid.value.invalidCorreo = "El campo correo es requerido"
    } else if (formData.value.correo && !regexCorreo.test(formData.value.correo)) {
        formDataInvalid.value.invalidCorreoFormat = "El formato del correo es inválido"
    } else if (!formData.value.contraseña) {
        formDataInvalid.value.invalidContraseña = "El campo contraseña es requerido"
    } else if (!formData.value.repContraseña) {
        formDataInvalid.value.invalidRepContraseña = "El campo repetir contraseña es requerido"
    } else if (formData.value.contraseña !== formData.value.repContraseña) {
        formDataInvalid.value.invalidContraseñas = "Las contraseñas no coinciden"
    } else {
        formDataInvalid.value.invalidNombre = ""
        formDataInvalid.value.invalidCorreo = ""
        formDataInvalid.value.invalidCorreoFormat = ""
        formDataInvalid.value.invalidContraseña = ""
        formDataInvalid.value.invalidRepContraseña = ""
        formDataInvalid.value.invalidContraseñas = ""
        formDataInvalid.value.invalidNombreFormat = ""
        alert("El registro se ha realizado correctamente")
    }
}
</script>

<template>
    <div class="container-fluid">
        <div class="container-fluid form-container">
            <BForm @submit="handleSubmitForm" class="form">
                <BFormGroup id="input-group-1" label="Nombre" label-for="nombre">
                    <BFormInput v-model="formData.nombre" id="nombre" type="text" placeholder="Nombre" />
                    <p style="color: red; font-weight: 400;" v-if="!formData.nombre">{{
                        formDataInvalid.invalidNombre }} </p>
                    <p style="color: red; font-weight: 400;"
                        v-else-if="formData.nombre && !regexSoloLetras.test(formData.nombre)">{{
                            formDataInvalid.invalidNombreFormat }} </p>
                </BFormGroup>
                <BFormGroup id="input-group-2" label="Correo" label-for="correo">
                    <BFormInput v-model="formData.correo" id="correo" type="text" placeholder="Correo" />
                    <p style="color: red; font-weight: 400;" v-if="!formData.correo">{{
                        formDataInvalid.invalidCorreo }}</p>
                    <p style="color: red; font-weight: 400;"
                        v-else-if="formData.correo && !regexCorreo.test(formData.correo)">{{
                            formDataInvalid.invalidCorreoFormat }}</p>
                </BFormGroup>
                <BFormGroup id="input-group-3" label="Contraseña" label-for="contraseña">
                    <BFormInput v-model="formData.contraseña" id="contraseña" type="password"
                        placeholder="Contraseña" />
                    <p style="color: red; font-weight: 400;" v-if="!formData.contraseña">{{
                        formDataInvalid.invalidContraseña }}</p>
                </BFormGroup>
                <BFormGroup id="input-group-4" label="Repetir contraseña" label-for="contraseña-2">
                    <BFormInput v-model="formData.repContraseña" id="contraseña-2" type="password"
                        placeholder="Repetir contraseña" />
                    <p style="color: red; font-weight: 400;" v-if="!formData.repContraseña">{{
                        formDataInvalid.invalidRepContraseña }}</p>
                    <p style="color: red; font-weight: 400;" v-else-if="formData.contraseña !== formData.repContraseña">
                        {{ formDataInvalid.invalidContraseñas }}</p>
                </BFormGroup>
                <BButton type="submit" class="form-button" variant="success">Enviar</BButton>
            </BForm>
        </div>
    </div>
</template>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 430px;
}

.form-container {
    max-width: 550px;
    margin: 50px auto;
}

.form-button {
    max-width: fit-content;
    margin: 0 auto;
}
</style>
