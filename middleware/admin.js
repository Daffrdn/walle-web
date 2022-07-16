export default function ({redirect, store}) {
    if (!store.state.auth.loggedIn ) {
        console.log(store.state.auth.user)
        if(!store.state.auth.user.role_id === 1){
            redirect('/admin')
        }

    }
}