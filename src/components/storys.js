const StoryUsers = [
    {nome: "9gag",
     image: "assets/img/9gag.svg",
     alt: "9gag"  
    },
     {nome: "meowed",
     image: "assets/img/meowed.svg" ,
     alt: "meowed"  
    },
     {nome: "barked",
     image: "assets/img/barked.svg" ,
     alt: "barked"  
    },
     {nome: "nathanwpyle",
     image: "assets/img/nathanwpylestrangeplanet.svg" ,
     alt: "nathanwpyle"  
    },
     {nome: "wawawiwac",
     image: "assets/img/wawawicomics.svg" ,
     alt: "wawawiwac"  
    },
     {nome: "respondeai",
     image: "assets/img/respondeai.svg" ,
     alt: "respondeai"  
    },
     {nome: "filomoderna",
     image: "assets/img/filomoderna.svg" ,
     alt: "filomoderna"  
    },
     {nome: "memeriago",
     image: "assets/img/memeriagourmet.svg" ,
     alt: "memeriago"  
    },
]
export default function Storys() {
    return (
			<div class="stories">
                {StoryUsers.map((identifica) => 
                <div class="story">
                    <div class="imagem">
                        <img src={identifica.image} alt={identifica.alt}/>
                        </div>
                        <div class="usuario">
                        {identifica.nome}
                        </div>
                    </div>)}
                    <div class="setinha">
                        <ion-icon name="chevron-forward-circle"></ion-icon>
                    </div>
            </div>
            
    );
}