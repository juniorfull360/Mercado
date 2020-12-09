    var ul = document.getElementById("Lista")
    var li
    var itemId
    var item
   
    adicionarItem = function (){
        
        if(document.getElementById("task").value != ""){
            
            item    = document.getElementById("task")
            itemId  = ul.childElementCount
            li      = criarItem(item.value, itemId)
            li.appendChild(criarButton(itemId))
            ul.appendChild(li)
            item.value = ""

        }
    }

    removerItem = function (itemId){
        for( i = 0 ; i < ul.children.length ; i++){
            if(ul.children[i].getAttribute("index") == itemId){
                ul.children[i].remove()
            }
        }
    }

    criarItem = function (itemValue, itemId){
        let li = document.createElement("li")
        li.setAttribute("index", itemId)
        li.appendChild(document.createTextNode(itemValue))
        return li
    }

    criarButton = function (itemId){
        let btn = document.createElement("button1")
        btn.setAttribute("onclick", "removerItem("+itemId+")") 
        btn.innerHTML ="X"
        return btn
    }


;