<template>
    <div class="text-center">
        <h2 class="mt-3">Logeado Exitosamente (Protected)</h2><br>

        <b>Bienvenido: </b>
        <b class="text-success">{{usuario.email}}</b>
        <br> 
        <b>Tu id es: </b>
        <b class="text-primary">{{usuario.uid}}</b>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Logeado',
    data(){
        return{
            
        }
    },
    computed:{
        ...mapState(['usuario'])
    }
}
</script>