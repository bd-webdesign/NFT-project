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

var num = 4;
var start = 0;
var btn = $("#btn-collection");
btn.click(function () {
    console.log("click");
    start = 5;
    document.location.href = "/NFT/client/collectionView.php";
    num = Object.keys(data).length;
    ShowElement();
});

function ShowElement() {
    console.log(start);
    const container = document.getElementById("cards");
    //Create card element
    console.log(num);
    for (var i = start; i <= num; i++) {
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

