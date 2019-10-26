const view = (shop => {
    const testMethod = () => {
        console.log('Testing view!');
        const hw = shop.testMethod(); // Method from 'shop' module
        console.log(hw);
    }

    const runSpinner = (activeSpinner) => {        
        const btnfinish = document.getElementById('btn-finish');
        btnfinish.disabled = true;        
        const spinnerblock = document.getElementById('spinner');
        if (activeSpinner) {
            spinnerblock.className ='spinner-border d-inline-block';            
            const t2 = timer();
            t2.then(numRnd => {              
              view.runSpinner(false);
              const ms = document.getElementById('modal-msg');
              ms.innerText = getMSG(numRnd);
              $('#exampleModal').modal('show')
              btnfinish.disabled = false;
              localStorage.setItem('finishPurchase', numRnd);
            });
        } else {            
            spinnerblock.className ='spinner-border d-none';
        }    
    }

    const timer = () => {       
        const random = new Promise((resolve, reject) => {            
            setTimeout(() => {
                const a = getRnd(0,1);
                resolve(a);
            }, 3000);
        });
        return random;
    }

    const getRnd = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    const getMSG = typeMsg =>{
        let msg;
        if (typeMsg) {
            msg = 'La compra se realizó con Exito.';
        } else {
            msg = 'Se produjo un error. Intente más tarde.';
        }
        return msg;
    }

    const goPage = () =>{
        const statusPurchase = localStorage.getItem('finishPurchase');
        if (statusPurchase === '1') {
            window.location="./index.html";
        }
    } 

    const createElement = (element, id, className, html, type, placeholder, src, display) => {
        const elm = document.createElement(element);
        if (id) {
            elm.id = id;
        }
        if (className) {
            elm.className = className;
        }
        if (html) {
            elm.innerHTML = html;
        }
        if (type) {
            elm.type = type;
        }
        if (placeholder) {
            elm.placeholder = placeholder;
        }
        if (src) {
            elm.src = src;
        }
        if (display) {
            elm.display = display;
        }
        return elm
    }

    const productDetail = () => {
        const daddy = createElement ('div', 'daddy', 'row', false, false, false,false,false);
        const col1 = createElement('div', 'col1', 'col-3', false, false, false, false, false);
        const col2 = createElement('div', 'col1', 'col', false, false, false, false, false);
        const title = createElement('p', 'title', 'bold', 'Modelo',false, false, false, false);
        const description = createElement('p', 'description', false, 'Descripcion del producto', false, false, false, false);
        const features = document.getElementById('features');
        col1.appendChild(title);
        col2.appendChild(description);
        daddy.appendChild(col1);
        daddy.appendChild(col2);
        features.appendChild(daddy);



    }  
    
    
    return {
         testMethod,
         runSpinner,
         goPage,
         productDetail
    }

})(shop);

view.testMethod();
view.productDetail();



