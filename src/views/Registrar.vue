<template>
    <div class="text-center">
        <h2>Registrar usuario</h2>

        <form @submit.prevent="registrarUsuario({email: email, clave:clave1})">

            <input 
            type="email"
            v-model="$v.email.$model"
            placeholder="Ingrese su email"
            class="m-2 form-control"
            >

            <small class="d-block text-danger" v-if="!$v.email.required">
                Campo obligatorio
            </small>

            <small class="d-block text-danger" v-if="!$v.email.email">
                Email incorrecto
            </small>

            <input type="password"
            v-model="clave1"
            placeholder="Ingrese su clave"
            class="m-2 form-control"
            > 

            <small class="d-block text-danger" v-if="!$v.clave1.minLength">
                Mínimo 6 carácteres
            </small>

            <input type="password"
            v-model="clave2"
            placeholder="Verifique su clave"
            class="m-2 form-control"
            >

            <small class="d-block text-danger" v-if="!$v.clave2.sameAs">
                Contrseñas no coinciden
            </small>

            <button type="submit" class="btn btn-success" :disabled='$v.$invalid'>
                Registrar
            </button>
            <!--<b v-if="mensajeError" class="text-danger">{{msg}}</b>
            <b v-if="!mensajeError" class="text-success">{{msg}}</b> -->
            <br>
            <b class="text-dark">{{error}}</b>
        </form>

    </div>
</template>

<script>

import {mapActions, mapState} from 'vuex'
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'

export default {
    name: 'Registrar',
    data(){
        return{
            email:'',
            clave1:'',
            clave2:'',
            msg: ''
        }
    },
    created(){
 
    },
    methods:{
        ...mapActions(['registrarUsuario']),
    },
    computed:{
        ...mapState(['error']),
        desactivar(){
            return this.clave1 === this.clave2 && this.clave1.trim() !== '' && this.clave1.length >= 6
            },
            mensajeError(){
            if(this.desactivar === false){
                this.msg = 'Las claves deben ser iguales'
                return true;
            }else{
                this.msg = '¡Las claves son iguales!';
                return false;
            }
        } 
        },
        validations:{
            email:{required, email},
            clave1:{minLength: minLength(6)},
            clave2:{sameAs: sameAs('clave1')}
        }
  
}
</script>