<template>
  <div class="background-changer pull-right" data-id="background-changer">
    <b class="pull-left">Zmień tło:</b>
    <ul class="colors-list list-inline pull-left">
      <li
        v-for="color in colors"
        :key="color.name"
        :class="{ [color.name]: true, active: color.active }"
        @click="setActive(color)"
      >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'CardBg',
  props: {
    colors: Array
  },
  data () {
    return {
      checker: {
        'background-color': 'rgb(255, 255, 255)',
        'background-image': 'url("https://platform.docplanner.com/img/general/layout/checker-bg.jpg")'
      },
      silver: {
        'background-color': 'rgb(237, 239, 242',
        'background-image': 'none'
      },
      dark: {
        'background-color': 'rgb(27, 39, 52)',
        'background-image': 'none'
      }
    }
  },
  methods: {
    setActive (item) {
      this.colors.map(el => {
        el.active = false
      })
      item.active = true
      this.emitChange(item)
    },
    emitChange (item) {
      this.$emit('change', this[item.name])
    }
  }
}
</script>
