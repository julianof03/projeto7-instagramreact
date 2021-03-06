import react from "react";

const StoryUsers = [
{  nome: "meowed",
   image: "assets/img/meowed.svg",
   contentimage:"assets/img/gato-telefone.svg",
   alt: "meowed",
   lastlike: "respondeai",
   lastlikeimg: "assets/img/respondeai.svg", 
   likenumber:"101.523"
 },
 { nome: "barked",
   image: "assets/img/barked.svg",
   contentimage:"assets/img/dog.svg",
   alt: "barked",
   lastlike: "respondeai",
   lastlikeimg: "assets/img/respondeai.svg",
   likenumber:"101.523"
 },
 { nome: "meowed",
   image: "assets/img/meowed.svg",
   contentimage:"assets/img/gato-telefone.svg",
   alt: "meowed",
   lastlike: "respondeai",
   lastlikeimg: "assets/img/respondeai.svg", 
   likenumber:"101.523"
  }
]
export default function Post(){
  const [contador, SetContador] = react.useState(0);
  const [core, SetCore] = react.useState("md hydrated");
  const [core2, SetCore2] = react.useState("hide");

return(
 <div class="posts">
   {StoryUsers.map((User) =>  
   <div class="post" onClick={() => { 
    if(contador === 0){
     SetContador(contador + 1);
      SetCore("hide");
      SetCore2("md hydrated redHeart");
    }}}>
   <div class="topo">
      <div class="usuario">
         <img src={User.image} alt={User.alt}/>
           {User.nome}
       </div>
       <div class="acoes">
         <ion-icon name="ellipsis-horizontal"></ion-icon>
       </div>
   </div>

   <div class="conteudo">
     <img src={User.contentimage} alt={User.alt}/>
   </div>

   <div class="fundo">
     <div class="acoes">
       <div>
         <ion-icon name="heart-outline" class={core} onClick={() => {  
        if(contador === 1){
          SetContador(contador  - 1);
          SetCore("md hydrated");
          SetCore2("hide redHeart")
        }
     }
   }></ion-icon>
         <ion-icon name="heart" class={core2}onClick={() => {
        if(contador ===1 ){
          SetContador(contador  - 1);
          SetCore("md hydrated");
          SetCore2("hide redHeart")
         }
     }
   }></ion-icon>
         <ion-icon name="chatbubble-outline"></ion-icon>
         <ion-icon name="paper-plane-outline"></ion-icon>
       </div>
       <div>
         <ion-icon name="bookmark-outline"></ion-icon>
       </div>
   </div>
     <div class="curtidas">
       <img src={User.lastlikeimg} alt={User.alt}/>
       <div class="texto">
         Curtido por <strong>{User.lastlike}</strong> e <strong>outras 101.523 pessoas</strong>
       </div>
     </div>
   </div>
</div>)}
   </div>
);
}

