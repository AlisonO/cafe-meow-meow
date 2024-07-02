const menu = [
    {
        id: 1,
        title: 'Razzle Dazzle Latte',
        text: 'Razzle my dazzle'
    }
];

export function onRequestGet() {
    return Response.json(menu)
}