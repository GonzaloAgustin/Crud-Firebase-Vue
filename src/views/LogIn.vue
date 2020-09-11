<template>
    <div class="text-center">
        <h2 class="mt-3">Log In</h2>

        <form @submit.prevent="usuarioLogIn({email: email, clave: clave})">

        <input 
        type="email"
        placeholder="Ingrese su email"
        v-model="$v.email.$model"
        class="m-2 form-control"
        >

        <small v-if="!$v.email.required" class="text-danger text-left d-block ml-3">
            Campo requerido
        </small>
        
        <small v-if="!$v.email.email" class="text-danger text-left d-block ml-3">
            Email inválido
        </small>

        <input 
        type="password"
        placeholder="Ingrese su clave"
        v-model="clave"
        class="m-2 form-control"
        >

        <small v-if="!$v.clave.required" class="text-danger text-left d-block ml-3">
            Campo requerido
        </small>

        <small v-if="!$v.clave.minLength" class="text-danger text-left d-block ml-3">
            Mínimo 6 carácteres
        </small>

        <button type='submit' class='btn btn-info m-2' :disabled="$v.$invalid">
            Acceder
        </button>

        </form>
        <b class="text-danger">{{error}}</b>
        
    </div>
</template>

<script>

import {mapActions, mapState} from 'vuex'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
    name: 'LogIn',
    data(){
        return{
            email: '',
            clave: ''
        }
    },
    computed:{
        ...mapState(['error'])
    },
    methods:{
        ...mapActions(['usuarioLogIn'])
    },
    validations:{
        email:{
            required,
            email
        },
        clave:{
            required,
            minLength: minLength(6)
        }
    }
}
</script>