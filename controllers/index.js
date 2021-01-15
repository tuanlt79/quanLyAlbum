import { Album } from '../models/album.js';
import { Update } from '../models/update.js';
let update = new Update();

document.getElementById("btnThemAlbum").onclick = (e) => {
    e.preventDefault(); // cản sự kiện submit của browser

    let album = new Album();

    let arrInput = document.querySelectorAll('.card-body .form-group input,select');
    
    for (let input of arrInput) {
        let id = input.id;
        let value = input.value;
        album[id] = value;    
    };
    update.themAlbum(album);
    //lưu vào localstoge
    update.saveAlbum();
};
