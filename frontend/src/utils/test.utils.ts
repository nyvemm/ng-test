import { runSaga } from 'redux-saga';

type Action = {
    type?: any;
    payload?: any;
};

export async function recordSaga(worker: any, initialAction: Action) {
    const dispatched: Array<Function> = [];
    await runSaga(
        {
            dispatch: (action: Function) => dispatched.push(action),
        },
        worker,
        initialAction
    ).toPromise();
    return dispatched;
}
