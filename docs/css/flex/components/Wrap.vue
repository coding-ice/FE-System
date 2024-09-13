<template>
  <div :class="$style.btns">
    <template v-for="val in wrapValues" key="val">
      <button @click="wrap = val">{{ val }}</button>
    </template>
  </div>
  <div :class="[$style.container, $style[wrap]]">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const wrapValues = ['wrap', 'nowrap', 'wrap-reverse'];

const wrap = ref(wrapValues[0]);
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
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    line-height: 40px;
    background: #9898a5;
  }

  &.wrap {
    flex-wrap: wrap;
  }

  &.nowrap {
    flex-wrap: nowrap;
  }

  &.wrap-reverse {
    flex-wrap: wrap-reverse;
  }
}
</style>
