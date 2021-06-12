<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">nuxt_firebase_starter</h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@nuxtjs/composition-api'
import { firestore } from "~/plugins/firebase"

export default defineComponent({
  setup() {
    onMounted(async () => {
      const collectionName = "tests"
      const tests = await firestore.collection(collectionName).get()
      tests.docs.forEach(_doc => {
        console.log(_doc.data())
      })
    })
  }
})
</script>
