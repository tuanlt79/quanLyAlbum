export class Update {
  danhSachAlbum = [];
  themAlbum(album) {
    this.danhSachAlbum.push(album);
  }
  xoaAlbum(tenAlbum) {
    //findIndex: là phương thức của mảng (arr) => tìm ra vị trí thảo với biểu thức
    let index = this.danhSachAlbum.findIndex(
      (item) => item.tenAlbum === tenAlbum
    );
    if (index !== -1) {
      this.danhSachAlbum.splice(index, 1);
    }
  }
  suaAlbum(tenAlbum) {
    let index = this.danhSachAlbum.findIndex(
      (item) => item.tenAlbum === tenAlbum
    );
    let albumSua = this.danhSachAlbum[index];

    document.getElementById("linkAnh").value = albumSua.linkAnh;
    document.getElementById("moTa").value = albumSua.moTa;
    document.getElementById("theLoai").value = albumSua.theLoai;
    document.getElementById("tenAlbum").value = albumSua.tenAlbum;
  }
  capNhatAlbum(tenAlbum) {
    let index = this.danhSachAlbum.findIndex(
      (item) => item.tenAlbum === tenAlbum
    );
    this.danhSachAlbum[index] = tenAlbum;
  }
  saveAlbum() {
    let sUpdate = JSON.stringify(this.danhSachAlbum);
    localStorage.setItem("Album: ", sUpdate);
  }
  layAlbum() {
    if (localStorage.getItem("Album: ")) {
      let update = JSON.parse(this.danhSachAlbum);
      this.danhSachAlbum = update;
    } else {
      this.danhSachAlbum = [];
    }
  }
}
