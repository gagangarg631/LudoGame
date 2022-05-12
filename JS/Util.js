const util = {
    
    mkgoti(id,color){
        let goti = document.createElement('div');
        goti.classList.add("goti");
        goti.id = "g" + id;
        goti.style.backgroundColor = color;
        return goti;
    }
}

export default util;