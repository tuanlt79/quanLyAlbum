export class Update{
    danhSachAlbum = [];
    themAlbum(album) { 
       this.danhSachAlbum.push(album);
    };
    xoaAlbum() { };
    suaAlbum() { };
    capNhatAlbum() { };
    saveAlbum() {
        let sUpdate = JSON.stringify(this.danhSachAlbum);
        localStorage.setItem('Album: ', sUpdate);
    }
    layAlbum() {
        if (localStorage.getItem('Album: ')) {
            let update = JSON.parse(this.danhSachAlbum);
            this.danhSachAlbum = update;
        }
    };
};