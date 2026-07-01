<script setup>
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import { icp, psb } from "../icp";

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
        <p v-if="icp || psb" class="vp-beian-footer-icp">
          <a v-if="icp" :href="icp.url" target="_blank">{{ icp.number }}</a>
          <span v-if="icp && psb" class="vp-beian-footer-sep"> · </span>
          <a
            v-if="psb"
            :href="psb.url"
            rel="noreferrer"
            target="_blank"
            class="vp-beian-footer-psb"
          >
            <img
              v-if="psb.icon"
              :src="psb.icon"
              alt=""
              class="vp-beian-footer-psb-icon"
            />
            <span>{{ psb.number }}</span>
          </a>
        </p>
      </div>
    </template>
  </VP>
</template>
