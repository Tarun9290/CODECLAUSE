$(".album-poster").on('click', function (e) {
    var dataSwitchId = $(this).attr('data-switch');
    ap.list.switch(dataSwitchId);
    ap.play();
    $("#aplayer").addClass('showPlayer');
});

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: true,
    audio: [
        {
            name: 'Kesariya',
            artist: 'Amitabh Bhattacharya',
            url: 'Songs/Kesariya - Brahmāstra.mp3',
            cover: 'Images/Kesariya - Brahmāstra.jpg'
        }, {
            name: 'Deva-Deva',
            artist: 'Amitabh Bhattacharya',
            url: 'Songs/Deva-Deva - Brahmastra.mp3',
            cover: 'Images/Deva-Deva - Brahmastra.jpg'
        }, {
            name: 'Manike',
            artist: 'Jubin Nautiyal',
            url: 'Songs/Manike - Thank God.mp3',
            cover: 'Images/Manike - Thank God.jpg'
        }, {
            name: 'Rangi Saari',
            artist: 'Kanishk Seth',
            url: 'Songs/Rangi Saari - Kanishk Seth & Kavita Seth.mp3',
            cover: 'Images/Rangi Saari - Kanishk Seth & Kavita Seth.jpg'
        }, {
            name: 'As It Was',
            artist: 'Harry Styles',
            url: 'Songs/As It Was - Harry Styles.mp3',
            cover: 'Images/As It Was - Harry Styles.jpg'
        }, {
            name: 'You',
            artist: 'Armaan Malik',
            url: 'Songs/You- Armaan Malik.mp3',
            cover: 'Images/You- Armaan Malik.jpg'
        }, {
            name: 'Kahani Song',
            artist: 'Amitabh Bhattacharya, Mohan Kannan, Pritam ',
            url: 'Songs/Kahani Song - Laal Singh Chaddha.mp3',
            cover: 'Images/Kahani Song - Laal Singh Chaddha.jpg'
        }, {
            name: 'Deva-Deva',
            artist: 'Amitabh Bhattacharya, Arijit Singh, Jonita Gandhi, Pritam',
            url: 'Songs/Deva-Deva - Brahmastra.mp3',
            cover: 'Images/Deva-Deva - Brahmastra.jpg'
        }, {
            name: 'Rangi Saari',
            artist: 'Kanishk Seth',
            url: 'Songs/Rangi Saari - Kanishk Seth & Kavita Seth.mp3',
            cover: 'Images/Rangi Saari - Kanishk Seth & Kavita Seth.jpg'
        }, {
            name: 'Golden hour',
            artist: 'JVKE',
            url: 'Songs/Golden hour - JVKE.mp3',
            cover: 'Images/Golden hour - JVKE.jpg'
        }, {
            name: 'Dandelions',
            artist: 'Ruth B.',
            url: 'Songs//Dandelions - Ruth B..mp3',
            cover: 'Images//Dandelions - Ruth B..jpg'
        }, {
            name: 'Manike',
            artist: 'Jubin Nautiyal ',
            url: 'Songs/Manike - Thank God.mp3',
            cover: 'Images/Manike - Thank God.jpg'
        }, ]
});
