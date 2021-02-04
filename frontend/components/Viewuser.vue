<template>
    <div>
        <usercard :user="user"></usercard>
    </div>
</template>

<script>

import timeline from '~/components/Timeline.vue'
import usercard from '~/components/Usercard.vue'

export default {
    props: ['user','caronas'],
    components: {
        timeline, usercard
    },
    data () {
        return {}
    }
}

</script>
<style>

</style>
