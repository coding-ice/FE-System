<script setup>
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import { icp } from "../icp";

const { Layout: VP } = DefaultTheme;
const { theme } = useData();
</script>

<template>
  <VP>
    <template #layout-bottom>
      <div class="vp-beian-footer">
        <p v-if="theme.footer?.message" class="vp-beian-footer-message">
          <span v-html="theme.footer.message" />
        </p>
        <p v-if="theme.footer?.copyright" class="vp-beian-footer-copyright">
          <span v-html="theme.footer.copyright" />
        </p>
        <p v-if="icp" class="vp-beian-footer-icp">
          <a :href="icp.url" target="_blank">{{ icp.number }}</a>
        </p>
      </div>
    </template>
  </VP>
</template>
