const data = [
    {
       "id":1,
       "description":"1-1",
       "iconUrl":"/NFT/assets/img/collection/1.jpg",
    },
    {
        "id":2,
        "description":"2-2",
        "iconUrl":"/NFT/assets/img/collection/2.jpg",
    },
    {
        "id":4,
        "description":"4-4",
        "iconUrl":"/NFT/assets/img/collection/4.jpg",
    },
    {
        "id":6,
        "description":"6-6",
        "iconUrl":"/NFT/assets/img/collection/6.jpg",
    },
    {
        "id":10,
        "description":"10-10",
        "iconUrl":"/NFT/assets/img/collection/10.jpg",
    }
 
 ]

 function ShowElement(){
   
    const container = document.getElementById("collection");

    data.forEach((result, element) => {
        //Create card element
        const wrapper = document.createElement('div');
        wrapper.classList = 'wrapper';

        //Create card content
        const content = `<div class="wrapper">
        <div class="container">
            <div class="top" id="element"><img  src="${result.iconUrl}" alt="element"></div> 
             <div class="bottom">
                <div class="left">
                    <i class="material-icons" id="description">${result.description}</i>
            </div>
        </div>
    </div> `;

    container.innerHTML += content;
    })
}

ShowElement();

