import { TweenMax, Expo } from "gsap";
import Map from "../../components/Map/Map";
import VisualSlider from "../../components/VisualSlider/VisualSlider";
import VisualCafeDetail from "../../components/VisualCafeDetail/VisualCafeDetail";
import InputDropdown from "../../components/InputDropdown/InputDropdown.vue";
import ButtonIcon from "../../components/ButtonIcon/ButtonIcon.vue";
import ButtonGeneral from "../../components/ButtonGeneral/ButtonGeneral";
import AllFilters from "../../components/AllFilters/AllFilters.vue";

export default {
  name: "customMap",
  components: {
    MapWrapper: Map,
    VisualCafeDetail,
    VisualSlider,
    InputDropdown,
    ButtonIcon,
    ButtonGeneral,
    AllFilters
  },
  data() {
    return {
      title: "CustomMap",
      coffee: null,
      modalIn: false,
      modalOut: false
    };
  },
  methods: {
    handleCoffeeClick: function(coffee) {
      this.coffee = coffee; // TODO: Hacer que se obtenga el café desde un getter
      this.$router.push({ name: "coffee", params: { id: coffee.id } });
    },
    changeNeighborhood(value) {
      this.$store.dispatch("selectNeighborhood", value);
    },
    closeDetail() {
      this.coffee = null;
      this.$router.push({ name: "map" });
    },
    handleMarkerClick: function(coffee) {
      let idx = this.coffees.indexOf(coffee);
      this.$refs.slider.slideTo(idx);
    },

    handleClickFilter(filter) {
      this.$store.dispatch("updateFilter", filter);
    },
    onEnter(el, done) {
      TweenMax.from(el, 0.5, {
        right: -150,
        autoAlpha: 0,
        //scale: 0.8,
        ease: Expo.easeInOut,
        onComplete: () => {
          done();
        }
      });
    },
    onLeave(el, done) {
      TweenMax.to(el, 0.7, {
        right: -150,
        autoAlpha: 0,
        //scale: 0.8,
        ease: Expo.easeInOut,
        onComplete: () => {
          done();
        }
      });
    }
  },
  computed: {
    neighborhood() {
      return this.$store.getters.getCurrentNeighborhood;
    },
    coffees() {
      return this.$store.getters.getFilteredCoffes;
    }
  }
};
