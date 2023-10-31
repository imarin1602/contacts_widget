const contactMessengers = (arrayContactsMessengers, selector) => {
    
    const container = document.querySelector(selector);
    
    arrayContactsMessengers.forEach(item => {
        const logoSrc = '../../' + item.icon;
        const divElem = `
            <a href="${item.url}" >
                <div class="messenger__item" id="${item.name}" style="background:${item.color}">
                    <img 
                        src="${logoSrc}"
                        width="30px"
                        heigth="30px"
                        alt=${item.name};
                    />
                    <span class="messenger__discription" style="background:${item.color}">${item.discription}</span>
                </div>
            
            </a>
        `
        container.innerHTML += divElem;
    })

    const messengerListBtn = document.getElementById('messengers__open-list');
    const messengersItems = document.querySelectorAll('.messenger__item');

    messengerListBtn.addEventListener("click", function() {
        if (messengerListBtn.classList.contains('messengers__open-list-collapsed')) {
            messengerListBtn.classList.remove('messengers__open-list-collapsed');
            messengerListBtn.classList.add('messengers__open-list-expanded');
            messengersOpenList();
        }
        else {
            messengerListBtn.classList.add('messengers__open-list-collapsed');
            messengerListBtn.classList.remove('messengers__open-list-expanded');
            messengersCloseList();
        } 
    });

    const messengersOpenList = () => {
        let btm = 130;
        messengersItems.forEach(item => {
            item.style.bottom = `${btm}px`;
            btm += 60;
        })
    }

    const messengersCloseList = () => {
        messengersItems.forEach(item => {
            item.style.bottom = `50px`;
        })
    }

} 
export default contactMessengers;