import ButtonGeneral from '../../components/ButtonGeneral/ButtonGeneral.vue';

export default {
    name: 'Home',
    components: {
				ButtonGeneral
    },
    created(){
        console.log(this.$route)
    },
    computed: {
        isModalOpen() {
            return this.$route.name === 'cafe'
            }
    },
    methods: {
        openModal() {
            this.isModalOpen = true;
        },
        closeModal() {
            this.$router.push('/')
        }
    }
};