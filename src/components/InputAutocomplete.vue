<template>
  <div class="autocomplete" @mousedown="mousefocus = true" @mouseout="mousefocus = false">
    <input type="text"
           name="widget-url"
           ref="widget-url"
           v-model="search"
           @keyup="onChange"
           class="form-control"
           autocomplete="off"
           @blur="focused = false"
           @focus="focused = true"
           autofocus>
    <ul class="typeahead dropdown-menu autocomplete__dropdown" style="display:block;" v-show="showSuggestions">
      <li v-for="item in data" :key="item['objectID']" @click="setSelectedItem(item)">
        <a>
          <div class="livesearch-record yellow clearfix doctors">
            <div class="left-content pull-left">
              <i class="avatar avatar-xs">
                <img :src="item['image_micro_square']">
              </i>
              {{ item['fullname_formatted'] }}
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'InputAutocomplete',
  props: {
    data: Array
  },
  data () {
    return {
      search: '',
      focused: false,
      mousefocus: false
    }
  },
  computed: {
    showSuggestions () {
      if (!this.data || !this.search) {
        return false
      }
      return (this.focused || this.mousefocus)
    }
  },
  methods: {
    onChange () {
      this.$emit('input', this.search)
    },
    setSelectedItem (item) {
      this.mousefocus = false
      this.focused = false
      this.$emit('selected', item)
      this.search = process.env.VUE_APP_DOMAIN_URL + item['urlname']
      this.$emit('input', this.search)
    }
  }
}
</script>
<style scoped lang="scss">
  .autocomplete {
    position: relative;
    &__dropdown {
      position: absolute;
    }
  }
</style>
