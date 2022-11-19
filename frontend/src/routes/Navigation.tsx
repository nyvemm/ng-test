import React, { useMemo } from 'react';
import PublicRoutes from './PublicRoutes';
import { useSelector } from 'react-redux';
import { StateType } from '../store/reducers';
import PrivateRoutes from './PrivateRoutes';

export const Navigation = () => {
    const user_login_status = useSelector(
        (state: StateType) => state.users.user_login_status
    );

    const isLogged = useMemo(() => {
        return user_login_status === 'SUCCESS';
    }, [user_login_status]);

    if (isLogged) {
        return <PrivateRoutes />;
    }

    return PublicRoutes();
};
