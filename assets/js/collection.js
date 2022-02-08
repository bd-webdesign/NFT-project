const data = [
    {
        "id": 1,
        "description": "1-1",
        "iconUrl": "/NFT/assets/img/collection/1.jpg",
    },
    {
        "id": 2,
        "description": "2-2",
        "iconUrl": "/NFT/assets/img/collection/2.jpg",
    },
    {
        "id": 3,
        "description": "4-4",
        "iconUrl": "/NFT/assets/img/collection/4.jpg",
    },
    {
        "id": 4,
        "description": "6-6",
        "iconUrl": "/NFT/assets/img/collection/6.jpg",
    },
    {
        "id": 5,
        "description": "10-10",
        "iconUrl": "/NFT/assets/img/collection/10.jpg",
    },
    {
        "id": 6,
        "description": "10-10",
        "iconUrl": "/NFT/assets/img/collection/3.jpg",
    },
    {
        "id": 7,
        "description": "10-10",
        "iconUrl": "/NFT/assets/img/collection/5.jpg",
    },
    {
        "id": 8,
        "description": "10-10",
        "iconUrl": "/NFT/assets/img/collection/7.jpg",
    },
    {
        "id": 9,
        "description": "10-10",
        "iconUrl": "/NFT/assets/img/collection/8.jpg",
    },
    {
        "id": 10,
        "description": "10-10",
        "iconUrl": "/NFT/assets/img/collection/9.jpg",
    }

]

var btn = $("#btn-collection");
btn.click(function (e) {
    document.location.href = "/NFT/client/collectionView.php";
});

var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/') + 1);

if (filename == "collectionView.php") {
    $(".bar").css('display', 'none');
    $(".nav .menu").css('display', 'none');
    ShowCollection();
}

function ShowCollection() {
    var view = document.getElementById("view-collection");
    data.forEach((result) => {
        const wrapper = document.createElement('div');
        wrapper.classList = 'wrapper';
        //Create card content
        const content = `<div class="wrapper">
        <div class="container">
            <div class="top" id="element"><img  src="${result.iconUrl}" alt="element"></div> 
             <div class="bottom">
                <div class="left flex-center">
                    <i class="material-icons" id="description">${result.description}</i>
            </div>
        </div>
    </div> `;
        view.innerHTML += content;
    })
}

function ShowElement() {
    const container = document.getElementById("cards");
    //Create card element
    for (var i = 0; i <= 4; i++) {
        const wrapper = document.createElement('div');
        wrapper.classList = 'wrapper';
        //Create card content
        const content = `<div class="wrapper">
        <div class="container">
            <div class="top" id="element"><img  src="${data[i]['iconUrl']}" alt="element"></div> 
             <div class="bottom">
                <div class="left flex-center">
                    <i class="material-icons" id="description">${data[i]['description']}</i>
            </div>
        </div>
    </div> `;
        container.innerHTML += content;
    }
}

ShowElement();

