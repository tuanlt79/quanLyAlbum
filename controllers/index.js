import { Album } from '../models/album.js';

document.getElementById("btnThemAlbum").onclick = (e) => {
    e.preventDefault(); // cản sự kiện submit của browser
    let album=new Album();
    let arrInput = document.querySelectorAll('.card-body .form-group input,select');
    for (let input of arrInput) {
        let id = input.id;
        let value = input.value;
        arrInput[id] = value;
       
    }
    
};