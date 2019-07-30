<template>
  <div class="preview-area">
    <div id="widget-preview">
      <iframe
        v-if="id"
        frameborder="0"
        id="widget-preview-iframe"
        :src="source"
        class="default"
        :style="{height: config.height}">
      </iframe>
      <!-- @TODO get height from iframe -->
    </div>
    <div class="bottom-decors"></div>
  </div>
</template>
<script>
import _ from 'lodash'
import { mapGetters } from 'vuex'
export default {
  name: 'CardPreview',
  props: {
    id: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'big'
    }
  },
  computed: {
    ...mapGetters({
      widgets: 'getWidgetTypes'
    }),
    config () {
      return _.find(this.widgets, { value: this.type })
    },
    source () {
      return `${process.env.VUE_APP_DOMAIN_URL}ajax/marketing/doctor/widget/${this.config.type}/${this.id}?hide_branding=${this.config.hide_branding}&opinion=${this.config.opinion}`
    }
  }
}
</script>
