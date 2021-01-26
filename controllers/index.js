import { Album } from "../models/album.js";
import { Update } from "../models/update.js";
let update = new Update();

document.getElementById("btnThemAlbum").onclick = (e) => {
  e.preventDefault(); // cản sự kiện submit của browser

  let album = new Album();

  let arrInput = document.querySelectorAll(
    ".card-body .form-group input,select"
  );

  for (let input of arrInput) {
    let id = input.id;
    let value = input.value;
    album[id] = value;
  }
  update.themAlbum(album);

  //lưu vào localstoge
  update.saveAlbum();
  taoDivDanhSach();
};

const taoDivDanhSach = () => {
  let xuatDanhSach = "";
  for (let album of update.danhSachAlbum) {
    xuatDanhSach += `
        <div class="col-md-4">
        <div class="card mb-4 box-shadow" >
          <div class="reponsive-img"  style="background-image: url(${album.linkAnh});">
        </div>
          <div class="card-body">
            <h3>${album.tenAlbum}</h3>
            <p class="card-text">${album.moTa}</p>
            <p class="card-text">Thể Loại: ${album.theLoai}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-success text-white btn-sm btn-outline-secondary mr-2" onclick="suaAlbum('${album.tenAlbum}')" >Chỉnh sửa</button>
                <button type="button" class="btn btn-danger text-white btn-sm btn-outline-secondary" onclick="xoaAlbum('${album.tenAlbum}')" >Xóa</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
  }

  document.getElementById("xuatDanhSach").innerHTML = xuatDanhSach;
};

window.xoaAlbum = (tenAlbum) => {
  update.xoaAlbum(tenAlbum);
  update.saveAlbum();
  taoDivDanhSach();
  document.getElementById("btnThemAlbum").disabled = false;
  document.getElementById("tenAlbum").disabled = false;
};
window.suaAlbum = (tenAlbum) => {
  document.getElementById("btnCapNhatAlbum").disabled = false;
  document.getElementById("btnThemAlbum").disabled = true;
  document.getElementById("tenAlbum").disabled = true;
  update.suaAlbum(tenAlbum);
  update.saveAlbum();
  taoDivDanhSach();
};

document.getElementById("btnCapNhatAlbum").onclick = (e) => {
  e.preventDefault(); // cản sự kiện submit của browser
  document.getElementById("tenAlbum").disabled = true;
  let album = new Album();
  let arrInput = document.querySelectorAll(
    ".card-body .form-group input,select"
  );

  for (let input of arrInput) {
    let id = input.id;
    let value = input.value;
    album[id] = value;
  }
  update.capNhatAlbum(album);
  // lưu vào localstoge
  update.saveAlbum();
  taoDivDanhSach(album);
};
