<template>
  <div :class="$style.btns">
    <template v-for="val in justifyContentValues" key="val">
      <button @click="justify = val">{{ val }}</button>
    </template>
  </div>
  <div :class="[$style.container, $style[justify]]">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const justifyContentValues = ["start", "space-between", 'center', "space-around", "space-evenly", "end"];

const justify = ref(justifyContentValues[0]);
</script>
<style module>
.btns {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;

  button {
    background: #abb1f4;
    padding: 3px 5px;
    border-radius: 5px;
    color: #000000;
  }
}

.container {
  display: flex;
  gap: 10px;
  width: 240px;
  height: 140px;
  background: #aab1f9;
  text-align: center;

  div {
    width: 40px;
    height: 40px;
    line-height: 40px;
    background: #9898a5;
  }

  &.start {
    justify-content: start;
  }

  &.end {
    justify-content: end;
  }

  &.center {
    justify-content: center;
  }

  &.space-between {
    justify-content: space-between;
  }

  &.space-around {
    justify-content: space-around;
  }

  &.space-evenly {
    justify-content: space-evenly;
  }
}
</style>
