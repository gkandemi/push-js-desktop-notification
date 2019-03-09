
window.onload = function(){
    
    let btn = document.querySelector("button#btn");
    let closeBtn = document.querySelector("button#closeBtn");

    let permission = Push.Permission.has();

    // alert(permission);

    btn.addEventListener("click", function(){
        Push.create("kablosuzKedi", {
            title : "Notifi mi cation?",
            body: "ooo kardeşim naber ya???",
            icon : "/logo.png",
            tag : "kk",
            link : "https://www.videosinif.com",
            timeout : 3000, 
            onClick: function(){
                //window.focus();
                this.close();
            },
            onShow : function (){
                console.log("Ekranda gösterildi...");
            }
        });
        
    })
    closeBtn.addEventListener("click", function(){
        // Push.clear("kk");
        Push.clear();
    })
    
}

