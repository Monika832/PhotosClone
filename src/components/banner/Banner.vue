
<template>
  <div id="banner">
      <div class="text">One place for all memories</div>
      <div class="get_started">
          <div>
             <b-button  class="btn" variant="primary"> Login </b-button>
              </div>
          <div >
              <b-button class="btn" variant="primary">
              Signup
              </b-button>
          </div>
      </div>
  </div>
</template>

<script>
import {BButton} from 'bootstrap-vue';
export default {
    name:"Banner",
    components:{BButton}
}
</script>

<style scoped>
#banner{
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);   
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-width: 300px;
    min-height: 300px;
}
#banner .text{
    font-family: 'Playfair Display', serif;
    background: #2C2B2Ccc;
    font-size: 3rem;
    font-weight: bolder;
    margin: 10px;
}

#banner .get_started{
    display: flex;
    justify-content: center;
    align-items: center;
}
#banner .get_started>div{
    margin: 10px 30px 0px 0px;
}
#banner .btn{
    font-size: 1.3rem;
}
</style>