import React from 'react';
import { Hero, RegisterForm } from '../components';
import SideBySideLayout from '../layouts/SideBySideLayout';

const RegisterScreen = () => {
    return (
        <div>
            <SideBySideLayout
                leftContainer={
                    <Hero
                        title="A CARTEIRA DA NOVA GERAÇÃO."
                        subtitle="É para todas as idades!"
                    />
                }
                rightContainer={<RegisterForm />}
            />
        </div>
    );
};

export default RegisterScreen;
