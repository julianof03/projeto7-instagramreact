const usuario = [
    {nome: "catanacomics",
    image: "assets/img/catanacomics.svg",
    alt: "catanacomics",
    Username: "Catana"
    }];
const Sugestions = [
    {nome: "bad.vibes.memes",
     image: "assets/img/bad.vibes.memes.svg",
     alt: "bad.vibes.memes",
     stattus: "Segue Você"
    },
    {nome: "chibirdart",
     image: "assets/img/chibirdart.svg",
     alt: "chibirdart",
     stattus: "Segue Você" 
    },
    {nome: "razoesparaacreditar",
     image: "assets/img/razoesparaacreditar.svg",
     alt: "razoesparaacreditar",
     stattus: "Novo no Instagram"  
    },
    {nome: "adorable_animals",
     image: "assets/img/adorable_animals.svg",
     alt: "adorable_animals",
     stattus: "Segue Você"  
    },
    {nome: "smallcutecats",
     image: "assets/img/smallcutecats.svg",
     alt: "smallcutecats",
     stattus: "Segue Você"  
    }
]
function EsqueletoSide(SugestionInfo){
    const SugestaoTemplate = 
    <div class="sugestao">
              <div class="usuario">
                <img src={SugestionInfo.image} alt={SugestionInfo.alt}/>
                <div class="texto">
                  <div class="nome">{SugestionInfo.nome}</div>
                  <div class="razao">{SugestionInfo.stattus}</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>;
            return SugestaoTemplate;
}
function UserProfile(UserInfo){
  return(
  <div class="usuario">
    <img src={UserInfo.image} alt={UserInfo.alt}/>
    <div class="texto">
      <strong>{UserInfo.nome}</strong>
      {UserInfo.Username}
    </div>
  </div>);
}
export default function SideBar(){
  return(
    <div class="sidebar">
      <div class="usuario">
        {usuario.map((user) => 
          <UserProfile 
            nome = {user.nome}
            image = {user.image}
            alt = {user.alt}
            Username = {user.Username}
          />)}
      </div>
      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
          {Sugestions.map((Sugestion) =>  
            <EsqueletoSide
              nome = {Sugestion.nome}
              image = {Sugestion.image}
              alt = {Sugestion.alt}
              stattus = {Sugestion.stattus}
            />)}
      </div>
      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>
      <div class="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
    </div>
  );
}