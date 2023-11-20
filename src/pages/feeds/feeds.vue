<template>
<div class="topline">
<topline>
<template #headline>
<div class="icon">
<icon name="home" />
</div>
<h1>Header</h1>
</template>
<template #content>
<ul class="stories">
<li class="stories-item" v-for="story in stories" :key="story.id">
<story-user-item
:avatar="story.avatar"
:username="story.username"
@onPress="hadlePress(story.id)"
/>
</li>
</ul>
</template>
</topline>
</div>
<toggler @onToggle="toggle" />
<div class="comments" v-if="shown">
<ul class="comments-list">
<li class="comments-item" v-for="n in 5" :key="n">
<comment text="Some text" username="Иван Иванов" />
</li>
</ul>
</div>
</template>

<script>
import { topline } from '../../components/topline'
import { icons } from '../../icons'
import { storyUserItem } from '../../components/storyUserItem'
import stories from './data.json'
import { toggler } from '../../components/toggler'
import { comment } from '../../components/comment'

export default {
    name: 'feeds',
    component: {
        topline,
        icons,
        storyUserItem,
        toggler,
        comment
    },
    data () {
        return {
            stories,
            shown: false
        }
    },
    methods: {
        toggle (isOpened) {
            this.shown = isOpened
        }
    }
}
</script>

<style lang="scss" scoped src="./feeds.scss"></style>
