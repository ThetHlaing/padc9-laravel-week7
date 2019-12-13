Vue.component('task-list',{
    template : `
        <ul>
            <task v-for="item in tasks" v-text="item">
            </task>
        </ul>
        `,
    data(){
        return {
            tasks : [
                'To go watch movie' ,
                'To wash clothes',
                'To play football'
            ]
        }
    }
})

Vue.component('task', {
    template : '<li><slot></slot></li>'
});



const app = new Vue({
    el: "#root"
});