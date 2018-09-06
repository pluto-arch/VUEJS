<template>
  <div id="app">
    <mdc-toolbar fixed>
      <mdc-toolbar-row>
        <mdc-toolbar-section align-start >
          <mdc-toolbar-menu-icon event="toggle-drawer"></mdc-toolbar-menu-icon>
          <mdc-toolbar-title>Hello VUE</mdc-toolbar-title>
        </mdc-toolbar-section>
      </mdc-toolbar-row>
    </mdc-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  font-family: Roboto, sans-serif;
}
</style>
