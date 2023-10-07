import { ref, watchEffect, toValue } from 'vue'

//===composable, reusability=== 
//const url = ref('/products.json')
//const { data, error } = await useFetch(url)
//const { data, error } = useFetch(() => `/posts/${someId}`)

// accepts static URL strings, refs, and getters
// no need "async\await", because use reactive state. Return plain object: { ref, ref }
export function useFetch(url) {
    const data = ref(null)
    const error = ref(null)

    //arrow function use scope of their parent, instead of creating a new self scope => it can access to variable 'url'
    watchEffect(async () => {
        // reset state before fetching..
        data.value = null
        error.value = null

        // toValue() normalize refs or getters into value.
        // resolve the url value synchronously so it's tracked as a dependency by watchEffect()
        // toValue() is called inside the watchEffect callback. 
        // This ensures that any reactive dependencies accessed during the toValue() normalization are tracked by the watcher.
        const urlValue = toValue(url)

        try {
            const res = await fetch(urlValue)
            data.value = await res.json()
        } catch (e) {
            error.value = e
        }
    })

    return { data, error }
}

/*
Accepting Reactive State​
first-experiment-useFetch() takes a static URL string as input - so it performs the fetch only once and is then done. 
What if we want it to re-fetch whenever the URL changes? 
In order to achieve this, we need to pass reactive state into the composable function, 
and let the composable create watchers that perform actions using the passed state.
*/
