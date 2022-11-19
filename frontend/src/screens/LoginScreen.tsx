import React from 'react';
import { Hero, LoginForm } from '../components';
import SideBySideLayout from '../layouts/SideBySideLayout';

const LoginScreen = () => {
    return (
        <SideBySideLayout
            leftContainer={
                <Hero
                    title="A CARTEIRA DA NOVA GERAÇÃO."
                    subtitle="É para todas as idades!"
                />
            }
            rightContainer={<LoginForm />}
        />
    );
};

export default LoginScreen;
