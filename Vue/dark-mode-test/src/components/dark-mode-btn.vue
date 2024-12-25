<script>
export default {
    data() {
        return {
            btnClass: {
                active: false,
            }
        }
    },
    methods: {
        toggleDarkMode() {
            this.btnClass.active = !this.btnClass.active;
            this.$emit('toggle');
        }
    }
}
</script>

<template>
    <div id="dark-mode-btn" :class="btnClass" @click="toggleDarkMode()">
        <span class="iconfont icon-taiyang"></span>
        <span class="iconfont icon-yueliang"></span>
        <div id="btn-inner"></div>
    </div>
</template>

<style>
#dark-mode-btn {
    position: relative;
    left: 40px;
    top: 2px;
    height: 30px;
    width: 60px;
    border: 3px rgb(50, 50, 50) solid;
    color: rgb(50, 50, 50);
    border-radius: 25px;
    transition: all 0.3s ease;
}

#btn-inner {
    position: relative;
    height: 30px;
    width: 30px;
    top: -1px;
    left: -1px;
    background-color: rgb(50, 50, 50);
    border: 1px rgb(50, 50, 50) solid;
    border-radius: 50%;
    transition: all 0.3s ease;
}

#dark-mode-btn.active {
    color: #fff;
    border: 3px #fff solid;
}

#dark-mode-btn.active #btn-inner {
    background-color: #fff;
    border: 1px #fff solid;
    left: 30px;
}

.icon-taiyang {
    position: absolute;
    font-size: 45px;
    left: -45px;
    top: -7px;
}

.icon-yueliang {
    position: absolute;
    font-size: 32px;
    left: 65px;
    top: 0px;
}
</style>