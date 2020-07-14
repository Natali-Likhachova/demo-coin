const  HOST = 'http://coins.demo.javascript.ninja';

// eslint-disable-next-line
export function getTicker(pair) {
    return fetch(`${HOST}/ticker/${pair}`)
        .then(r => r.json())
        .then(({ last }) => last);
}