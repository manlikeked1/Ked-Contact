<template>
    <div>
        <div class="word">Welcome</div>
        <div class="img" :style="{backgroundImage: 'url('+image+')'}"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            image: require('./../assets/Welcome.svg')
        }
    }
    
}
</script>
<style  scoped>
.img{
    background-position: center, center;
    background-size: contain;
    background-repeat: no-repeat;
    width: auto;
    height: 60vh;
}
.word{
    text-align: center;
    font-size: 40px;
    margin-bottom: 30px;
}


</style>





