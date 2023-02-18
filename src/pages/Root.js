import {Outlet, useNavigation} from 'react-router-dom';
import { Fragment } from 'react';
import MainNavigation from '../components/MainNavigation';

const Root = () =>{

    const navigation = useNavigation();
    //navigation.state === 'idle'
    //navigation.state === 'loading'
    //navigation.state === 'submitting'

    return (
    <Fragment>
        <MainNavigation />
        <main>
            <Outlet />
        </main>
    </Fragment>
    );
}

export default Root;