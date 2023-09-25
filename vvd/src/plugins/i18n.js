export default {
    install: (app, options) => {
        //console.log(options) //options from app.use(plugin, options)

        app.config.globalProperties.$t = (key) => {
            // retrieve a nested property in `options`
            // using `key` as the path
            // key=='greetings.hello'
            let keySplitted = key.split('.')
            /*
            let res = keySplitted.reduce((o, i) => {
                if (o) return o[i]
            }, options)
            return res
            */

            if (options.hasOwnProperty(keySplitted[0])) {
                return options[keySplitted[0]][keySplitted[1]]
            }

        }


    }
}