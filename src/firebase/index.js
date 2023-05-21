// import firebase from 'firebase/compat/app';
// import 'firebase/compat/storage';
// import axios from 'axios';

// const firebaseConfig = {
//     apiKey: 'AIzaSyB-E1_LcqVNTVnI5L_6CnpciSM4QjwCh0w',
//     authDomain: 'looka-e5275.firebaseapp.com',
//     projectId: 'looka-e5275',
//     storageBucket: 'looka-e5275.appspot.com',
//     messagingSenderId: '500960340086',
//     appId: '1:500960340086:web:ccd8dd37c826b765249757',
//     measurementId: 'G-M1BYCZC2DY',
// };

// function listAll(folder) {
//     const storageRef = firebase.storage().ref();
//     let i = 2783;

//     // [START storage_list_all]
//     // Create a reference under which you want to list
//     var listRef = storageRef.child(folder);

//     // Find all the prefixes and items.
//     listRef
//         .listAll()
//         .then((res) => {
//             res.prefixes.forEach((folderRef) => {
//                 // All the prefixes under listRef.
//                 // You may call listAll() recursively on them.
//             });
//             res.items.map((item) =>
//                 item.getDownloadURL().then(async (url) => {
//                     await axios.post('http://localhost:5000/looka/addApi', {
//                         id: i++,
//                         link: url,
//                         category: 'accessories',
//                     });
//                 }),
//             );
//         })
//         .catch((error) => {
//             // Uh-oh, an error occurred!
//             console.log(error);
//         });
//     // [END storage_list_all]
// }

// firebase.initializeApp(firebaseConfig);
// const storage = firebase.storage();

// export { storage, listAll, firebase as default };
