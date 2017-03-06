var hu = ["Отвратительно","Ужасно","Господи"];
var railroadCar = ["images/emoji/D83DDC4D.png","/images/emoji/D83CDF46.png","/images/emoji/D83CDF4B.png","/images/emoji/D83CDF3D.png","/images/emoji/D83DDE1B.png","/images/emoji/D83DDC3C.png","/images/emoji/D83DDC3B.png","/images/emoji/D83DDC2E.png","/images/emoji/D83DDC03.png","/images/emoji/D83DDC18.png","/images/emoji/D83DDC13.png","/images/emoji/D83CDF4D.png","/images/emoji/D83DDC17.png","/images/emoji/D83DDC16.png","/images/emoji/D83DDC15.png","/images/emoji/261D.png","/images/emoji/D83DDC4C.png"]
var locomotive = "/images/emoji/D83DDE82.png";
console.log("Загрузка");
function zzz()
{
    if (document.getElementById('ui_rmenu_all'))
    {
        console.log('вкладка с диалогами')
        location.href="javascript:console.log(window); void 0";
        // console.log(document)
        var messages = document.getElementsByClassName("im_msg_text");
        // console.log("Основная");
        // console.log(messages);
        var chats = document.getElementsByClassName('_im_ui_peers_list')[0].childNodes; // ui_rmenu_item_sel
        var chatId;
        for(i = 0; i<chats.length; i++)
        {

            if (chats[i].className != undefined && chats[i].className.indexOf("ui_rmenu_item_sel")!=-1)
            {
                // console.log(chats[i])
                chatId=chats[i].getAttribute("data-list-id");
                // chatId=chatId.replace('im_tab','');
            }
            console.log(chatId)
        }
        // Очень важно
     /*   if(chatId == "24229762")
        {
            var very_messages = document.getElementsByClassName("im-page--history")[0].getElementsByClassName("im_in");
            for(i = 0; i < very_messages.length; i++)
            {
                if(very_messages[i].getElementsByClassName("im-mess--text"))
                {
                    for(j = 0; j<very_messages[i].getElementsByClassName("im-mess--text").length; j++)
                    {
                        var messagesText = very_messages[i].getElementsByClassName("im-mess--text")[j]
                        messagesText.textContent = "";
                        //messagesText.setAttribute("class","im_msg_very_important_text");
                        var like = document.createElement("img");
                        like.setAttribute("class","emoji");
                        like.setAttribute("src", "images/emoji/D83DDC4D.png");
                        messagesText.appendChild(like);
                    }
                }
            }
        }
        else */
        {
            for(i=messages.length; i>0; i--)
            {
                par = messages[i-1].parentNode
                messages[i-1].parentNode.textContent ="";
                console.log(par)
                var rand = Math.floor(Math.random() * 3) + 1;
                for(j=0; j<rand; j++)
                {
                    var loc = document.createElement("img");
                    loc.setAttribute("class","emoji");
                    loc.setAttribute("src", locomotive);
                    par.appendChild(loc);
                }
                rand = Math.floor(Math.random() * 7) + 3;

                var randRail = Math.floor(Math.random() * railroadCar.length);
                for(j=0; j<rand; j++)
                {
                    var railCar = document.createElement("img");
                    railCar.setAttribute("class","emoji");
                    railCar.setAttribute("src", railroadCar[randRail]);
                    par.appendChild(railCar);
                }

                // par.setAttribute("class","im_msg_locomotive_text");
            }
        }
    }

    setTimeout(function() {zzz();}, 2000);

}

zzz();
