<script setup>
import { BForm, BFormGroup, BFormInput, BButton } from 'bootstrap-vue-next';
import { ref } from 'vue';

let nota_1 = ref("")
let nota_2 = ref("")
let nota_3 = ref("")
let promedio = ref("")
let asistencia = ref("")
const validate = ref(false)
const estado = ref({
    aprobado: "",
    reprobado: ""
})


function handleCalculateCalifications(event) {
    event.preventDefault()
    /*Agregué la validación en la función para hacerlo más robusto, aunque nunca llegue a ejecutarse mientras la validación propia del input esté funcionando.*/
    if (nota_1.value >= 10 && nota_1.value <= 70 &&
        nota_2.value >= 10 && nota_2.value <= 70 &&
        nota_3.value >= 10 && nota_3.value <= 70 &&
        asistencia.value >= 0 && asistencia.value <= 100
    ) {
        let porcentajeNota1 = nota_1.value * 35 / 100
        let porcentajeNota2 = nota_2.value * 35 / 100
        let porcentajeNota3 = nota_3.value * 30 / 100
        let ponderado = (porcentajeNota1 + porcentajeNota2 + porcentajeNota3)

        promedio.value = ponderado

        if (promedio.value >= 40 && asistencia.value >= 80) {
            estado.value.aprobado = "Aprobado"
        } else {
            estado.value.reprobado = "Reprobado"
            estado.value.aprobado = ""
        }

        validate.value = false
    } else {
        validate.value = true
    }

}
</script>

<template>
    <div class="container-fluid form-container">
        <BForm @submit="handleCalculateCalifications" class="form">
            <BFormGroup id="input-group-1" label="Nota 1" label-for="nota-1">
                <BFormInput min="10" max="70" v-model.number="nota_1" id="nota-1" type="number" placeholder="Nota 1"
                    required />
            </BFormGroup>
            <BFormGroup id="input-group-2" label="Nota 2" label-for="nota-2">
                <BFormInput min="10" max="70" v-model.number="nota_2" id="nota-2" type="number" placeholder="Nota 2"
                    required />
            </BFormGroup>
            <BFormGroup id="input-group-3" label="Nota 3" label-for="nota-3">
                <BFormInput min="10" max="70" v-model.number="nota_3" id="nota-3" type="number" placeholder="Nota 3"
                    required />
            </BFormGroup>
            <BFormGroup id="input-group-4" label="Asistencia %" label-for="asistencia">
                <BFormInput min="0" max="100" v-model.number="asistencia" id="asistencia" type="number"
                    placeholder="Asistencia" required />
            </BFormGroup>
            <BButton type="submit" class="form-button" variant="success">Calcular</BButton>
        </BForm>
        <div class="result">
            <p style="color: red;" v-if="validate">Por favor, ingrese valores válidos para las notas
                y asistencia
            </p>
            <p v-if="promedio">Tu promedio es: {{ promedio }}</p>
            <p v-if="estado.aprobado">Tu estado es: {{ estado.aprobado }}</p>
            <p v-else-if="estado.reprobado">Tu estado es: {{ estado.reprobado }}</p>
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

.result {
    margin-top: 50px;
}

.result p {
    text-align: center;
}
</style>
