/**
 * @name vuyplu
 * @version 0.0.1
 * @description vuyplu is a test plugin
 * @author elliot
 *   
 */



 module.exports = class vuyghu2020 {
    
    load(){
        console.log("[vuyplu] Load");
        BdApi.showNotice("min uppe")
    }
    start(){
        console.log("[vuyplu] Start");
        setInterval(function() {
            
            var a= document.querySelector("span[data-slate-string]");
             if(a!=null||a!=undefined){
                var UserTyping= document.querySelector("span[data-slate-string]").textContent 
            }
            console.log(UserTyping);
            if(UserTyping != undefined) {
                if(UserTyping == "|menu") {
                    BdApi.alert("e");
                    document.querySelector("span[data-slate-string]").textContent ="     ";
                }
                if(UserTyping.endsWith("|")) {
                    document.querySelector("span[data-slate-string]").textContent = UserTyping;
                }
            }
        },300);
    }

stop(){
    console.log("[vuyplu] Stop");
}
}