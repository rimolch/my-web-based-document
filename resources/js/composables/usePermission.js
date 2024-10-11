import {useStore} from "vuex";


export const usePermission = () => {
    const store = useStore();

    const can = (permission) => {
        const user = store.state.auth.user;
        return user.hasPermissionTo(permission);
    };

    return { can };
};
