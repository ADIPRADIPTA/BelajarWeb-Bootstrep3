$('body').scrollspy({target: ".navbar", offset: 50});

// event pada saat link di klik
$('.page-scroll').on('click', function(event) {

    //ambil isi href
//    var tujuan = $(this).attr('href');

    // tangkap elemen ybs
//    var elemenTujuan = $(tujuan);
    
    if (this.elemenTujuan !== "") {
        // Prevent default anchor click behavior
        event.preventDefault(); 
        // Store hash
        var tujuan = $(this).attr('href');
        var elemenTujuan = $(tujuan);
    // pindahkan scroll
        $('html,body').animate({
            scrollTop: elemenTujuan.offset().top - 50
        }, 1000, function(){
            window.location.elemenTujuan = elemenTujuan;
        });
        }
});