<template>
  <div :class="$style.btns">
    <template v-for="val in alignValues" key="val">
      <button @click="align = val">{{ val }}</button>
    </template>
  </div>
  <div :class="[$style.container, $style[align]]">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const alignValues = ['center',
  'start',
  'end',
  'normal',
  'stretch'];

const align = ref(alignValues[0]);
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
    line-height: 40px;
    background: #9898a5;
  }

  &.start {
    align-items: start;
  }

  &.end {
    align-items: end;
  }

  &.center {
    align-items: center;
  }

  &.normal {
    align-items: normal;
  }

  &.stretch {
    align-items: stretch;
  }

}
</style>
