const teamList=[
    {
        nome:"Wayne Barnett",
        ruolo:"Founder & CEO",
        foto:"wayne-barnett-founder-ceo.jpg"
    },
    {
        nome:"Angela Caroll",
        ruolo:"Chief Editor",
        foto:"angela-caroll-chief-editor.jpg"
    }
    ,
    {
        nome:"Walter Gordon",
        ruolo:"Office Manager",
        foto:"walter-gordon-office-manager.jpg"
    }
    ,
    {
        nome:"Angela Lopez",
        ruolo:"Social Media Manager",
        foto:"angela-lopez-social-media-manager.jpg"
    }
    ,
    {
        nome:"Scott Estrada",
        ruolo:"Developer",
        foto:"scott-estrada-developer.jpg"
    }
    ,
    {
        nome:"Barbara Ramos",
        ruolo:"Graphic Designer",
        foto:"barbara-ramos-graphic-designer.jpg"
    }
]
console.log(teamList);
for(let i=0;i<teamList.length;i++){
    const dipendente=teamList[i];
    const txt=`${dipendente.nome} svolge il ruolo di ${dipendente.ruolo} 
    e la sua foto è ${dipendente.foto}`
    console.log(txt);
}


//carico le immagini dentro le card dinamicamente
const cardImgElList=document.querySelectorAll(".my-img-card");
const cardTextElList=document.querySelectorAll(".card-text");
for(let i=0;i<teamList.length;i++){
    const dipendente=teamList[i];
    const txt=`${dipendente.nome} svolge il ruolo di ${dipendente.ruolo}`
    cardImgElList[i].src="img/"+dipendente.foto;
    cardTextElList[i].textContent=txt;
    
}
