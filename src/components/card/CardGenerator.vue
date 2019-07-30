<template>
  <form action="#" id="widget-form">
    <h3 class="h5">Wyszukaj lub podaj adres do swojego profilu</h3>
    <div class="form-group">
      <InputAutocomplete
        v-model="query"
        :data="results"
        @selected="setSelected"
      />
    </div>
    <div data-id="widget-types" v-show="selected.name">
      <h3 class="h5">Wybierz typ widgetu</h3>
      <v-select
        :options="widgetTypes"
        v-model="settings.type"
        :reduce="type => type.value"
        :clearable="false">
      </v-select>
    </div>
    <hr/>
    <a
      id="widget-get-code"
      class="btn btn-primary btn-lg"
      :disabled="!selected.name"
      @click="showCodeEvent">
      <i class="svg-icon svg-icon__magic-wand svg-icon__size-20 svg-icon__color-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
          <path
            d="M10.7142321,0 C10.5441607,0 10.3746784,0.0850357143 10.2789641,0.254464286 L9.4965984,1.63392857 L7.96981269,1.20982143 C7.59438411,1.10582143 7.24862469,1.45158034 7.35262526,1.82700891 L7.77673211,3.35379463 L6.39726754,4.13504463 C6.05841097,4.32704463 6.05841097,4.815268 6.39726754,5.00669657 L7.77673211,5.78794629 L7.78008011,5.79129486 L9.78789269,3.78236606 C10.2610355,3.3092232 11.0290355,3.3092232 11.5021784,3.78236606 C11.9753213,4.25550891 11.9753213,5.02350914 11.5021784,5.496652 L9.49436583,7.50558057 L9.4977144,7.50892857 L10.2778481,8.88839314 C10.4698481,9.22724971 10.9591875,9.22724971 11.1506161,8.88839314 L11.9307498,7.50892857 L13.4586515,7.93191943 C13.8340801,8.03591943 14.178723,7.69127657 14.074723,7.315848 L13.6517321,5.78794629 L15.0311967,5.00781257 C15.3706247,4.81581257 15.3700538,4.32704463 15.0311967,4.13504463 L13.6517321,3.35379463 L14.075839,1.82700891 C14.179839,1.45158034 13.8340801,1.10582143 13.4586515,1.20982143 L11.9318658,1.63392857 L11.1506161,0.254464286 C11.0546161,0.0850357143 10.8843035,0 10.7142321,0 Z M7.77896411,5.79241086 L1.35485714,12.2165177 C0.881714286,12.6896606 0.881714286,13.4576606 1.35485714,13.9308034 C1.82799994,14.4039463 2.596,14.4039463 3.06914286,13.9308034 L9.49324983,7.50669657 L7.77896411,5.79241086 Z M10.133875,10.2779017 C9.81872286,10.282828 9.56705913,10.5419818 9.57137497,10.8571429 L9.57137497,11.4285714 L8.9999464,11.4285714 C8.79386873,11.425657 8.60218562,11.5339287 8.49829627,11.7119273 C8.39440693,11.8899259 8.39440693,12.1100741 8.49829627,12.2880727 C8.60218562,12.4660713 8.79386873,12.574343 8.9999464,12.5714286 L9.57137497,12.5714286 L9.57137497,13.1428571 C9.56846052,13.3489348 9.67673228,13.5406179 9.85473089,13.6445073 C10.0327295,13.7483966 10.2528776,13.7483966 10.4308762,13.6445073 C10.6088748,13.5406179 10.7171466,13.3489348 10.7142321,13.1428571 L10.7142321,12.5714286 L11.2856607,12.5714286 C11.4917384,12.574343 11.6834215,12.4660713 11.7873108,12.2880727 C11.8912002,12.1100741 11.8912002,11.8899259 11.7873108,11.7119273 C11.6834215,11.5339287 11.4917384,11.425657 11.2856607,11.4285714 L10.7142321,11.4285714 L10.7142321,10.8571429 C10.7163472,10.7026855 10.6558454,10.5539505 10.5465123,10.4448276 C10.4371792,10.3357047 10.2883279,10.2754893 10.133875,10.2779017 Z M14.133875,11.9921874 C13.8187229,11.9971138 13.5670591,12.2562675 13.571375,12.5714286 L13.571375,13.1428571 L12.9999464,13.1428571 C12.7938687,13.1399427 12.6021856,13.2482145 12.4982963,13.4262131 C12.3944069,13.6042117 12.3944069,13.8243598 12.4982963,14.0023584 C12.6021856,14.180357 12.7938687,14.2886287 12.9999464,14.2857143 L13.571375,14.2857143 L13.571375,14.8571429 C13.5684605,15.0632205 13.6767323,15.2549036 13.8547309,15.358793 C14.0327295,15.4626823 14.2528776,15.4626823 14.4308762,15.358793 C14.6088748,15.2549036 14.7171466,15.0632205 14.7142321,14.8571429 L14.7142321,14.2857143 L15.2856607,14.2857143 C15.4917384,14.2886287 15.6834215,14.180357 15.7873108,14.0023584 C15.8912002,13.8243598 15.8912002,13.6042117 15.7873108,13.4262131 C15.6834215,13.2482145 15.4917384,13.1399427 15.2856607,13.1428571 L14.7142321,13.1428571 L14.7142321,12.5714286 C14.7163472,12.4169712 14.6558454,12.2682362 14.5465123,12.1591133 C14.4371792,12.0499904 14.2883279,11.989775 14.133875,11.9921874 Z"></path>
        </svg>
      </i>
      Wygeneruj kod
    </a>
    <div class="form-group" id="widget-code" v-if="showCode">
      <label>Skopiuj i wklej poniższy kod na swoją stronę</label>
      <textarea name="widget-code" :value="getWidgetCode" readonly rows="10" class="form-control"></textarea>
    </div>
  </form>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import InputAutocomplete from '../InputAutocomplete'

export default {
  name: 'CardGenerator',
  data () {
    return {
      query: '',
      showCode: false
    }
  },
  components: { InputAutocomplete },
  computed: {
    ...mapGetters({
      results: 'getAutocompleteResults',
      widgetTypes: 'getWidgetTypes',
      selected: 'getSelectedUser',
      settings: 'getCardSettings'
    }),
    config () {
      return _.find(this.widgetTypes, { value: this.settings.type })
    },
    getWidgetCode () {
      let template = `<a id="zl-url" class="zl-url" href="${this.selected.url}" rel="nofollow" data-zlw-doctor="${this.selected['urlname']}" data-zlw-type="${this.config.type}" data-zlw-opinion="${this.config.opinion}" data-zlw-hide-branding="${this.config.hide_branding}">${this.selected['fullname_formatted']} - ZnanyLekarz.pl</a>`
      let js = '!function($_x,_s,id){var js,fjs=$_x.getElementsByTagName(_s)[0];if(!$_x.getElementById(id)){js = $_x.createElement(_s);js.id = id;js.src = "//platform.docplanner.com/js/widget.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","zl-widget-s");'
      return template + `<script>${js}<\/script>`
    }
  },
  methods: {
    ...mapActions({
      getAutocomplete: 'GET_CARD_AUTOCOMPLETE_ACTION'
    }),
    setSelected (item) {
      this.$store.commit('SET_CARD_SELECTED', item)
    },
    showCodeEvent () {
      if (this.selected.name) {
        this.showCode = true
      }
    }
  },
  watch: {
    'query': function () {
      this.getAutocomplete({ query: this.query, hits: 4 })
    }
  }
}
</script>
<style scoped>
  .form-control[readonly] {
    color: #000000;
    background-color: white;
  }
</style>
