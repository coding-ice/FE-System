<script setup>
import { ref } from 'vue';

const dir = ref('row');
const toggle = () => (dir.value = dir.value === 'row' ? 'column' : 'row');

</script>

<template>
  <div :class="$style.btns">
    <button @click="toggle">
      {{ dir }}
    </button>
  </div>
  <div :class="[dir === 'row' ? $style.row : $style.column, $style.container]">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
  </div>
</template>

<style module>
.btns {
  margin-bottom: 10px;

  button {
    background: #abb1f4;
    padding: 3px 5px;
    border-radius: 5px;
    color: white;
  }

}

.container {
  display: flex;
  gap: 10px;
  width: 140px;
  height: 140px;
  background: #aab1f9;
  text-align: center;

  div {
    width: 40px;
    height: 40px;
    line-height: 40px;
    background: #9898a5;
  }

  &.row {
    flex-direction: row;
  }

  &.column {
    flex-direction: column;
  }
}
</style>