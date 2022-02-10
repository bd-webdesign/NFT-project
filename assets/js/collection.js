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
btn.click(function () {
    document.location.href = "/NFT/collection"; //CHANGED URL
});

var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/') + 1);

function menuClick(section) {
    document.location.href = "/NFT/home" + section;
}

if (filename == "collection") { //CHANGED URL

    $("#collection-menu").css("display", "none");
    $("#collection-phone").css("display", "none");

    if ($(document).width() >= 1020) {
        $(".footer").css({ "position": "fixed", "bottom": "0" });
    } else {
        $(".footer").css({ "position": "static"});
    }

    $(window).resize(function () {
        if ($(document).width() >= 1020) {
            $(".footer").css({ "position": "fixed", "bottom": "0" });
        } else {
            $(".footer").css({ "position": "static"});
        }

        console.log($(document).width());
    });

    ShowCollection();

    //url back to main page selected section
    var about = $("#about-menu");
    about.click(function () { menuClick("#about") });
    about = $("#about-phone");
    about.click(function () { menuClick("#about") });
    var team = $("#team-menu");
    team.click(function () { menuClick("#team") });
    team = $("#team-phone");
    team.click(function () { menuClick("#team") });
    var faqs = $("#faqs-menu");
    faqs.click(function () { menuClick("#faqs") });
    faqs = $("#faqs-phone");
    faqs.click(function () { menuClick("#faqs") });
}

if (filename == "home") {
    ShowElement();
    //on scroll to fix nav and not hide sections
    $(".menu li a").click(function () {
        var id = $(this).attr("href");
        var top = $(id).offset().top - 65;
        console.log(top);
        $("html, body").animate({ scrollTop: top }, 100);
    });
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

