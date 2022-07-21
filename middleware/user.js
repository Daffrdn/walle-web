export default function ({redirect, store}) {
    if (store.state.auth.user.role_id !== 2){
       return redirect('/admin')
    }
} 