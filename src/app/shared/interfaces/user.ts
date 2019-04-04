// export interface IUser {
//     'id': number;
//     'name': string;
//     'username': string;
//     'email': string;
//     'address': {
//         'street': string;
//         'suite': string;
//         'city': string;
//         'zipcode': string;
//         'geo': {
//             'lat': string;
//             'lng': string
//         }
//     };
//     'phone': string;
//     'website': string;
//     'company': {
//         'name': string;
//         'catchPhrase': string;
//         'bs': string
//     };
// }

export interface IUser {
    'id': number;
    'login': string;
    'avatar_url': string;
    'repos_url': string;
    'url': string;
    'type': string;
    'created_at': string;
}
