function affiche(){
    var jour = new Date;
    Mois = ["Janvier", "Fevrier","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
    Jours = ["Dimanche", "Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
    mois = Mois[jour.getMonth()];
    jours = Jours[jour.getDay()];
    heure = jour.getHours();
    minute = jour.getMinutes();
    second = jour.getSeconds();
    annee = jour.getFullYear();
    dates = jour.getDate();

    mE= (minute + (second/60));
    hE = (heure + (minute/60));

    s = second * 6;
    h = hE * 30 ;
    m = mE * 6;

    if (second<10)
    {
        Second.innerText = `${heure}:${minute}:0${second}` ; 
    }
    else 
    {
        Second.innerText = `${heure}:${minute}:${second}`; 
    };
    msg = `${jours} ${dates} ${mois} ${annee}` ;
    console.log(msg); 
    Dates.innerText = `${jours} ${dates} ${mois} ${annee}`
    AHeure.style.transform = `rotate(${h}deg)`;
    AMinute.style.transform = `rotate(${m}deg)`;
    ASecond.style.transform = `rotate(${s}deg)`;

};


setInterval(affiche, 1000);
var theme = 'LIGHT'; 
mode.innerText = `${theme}`;

function lod(){
    if (theme == 'LIGHT'){
        body.style.background = `white`;
        all.style.background = `white`;
        Mode.style.background = `white`;
        Mode.style.color = `black`;
        Mode.style.border = `1px solid black`;
        CorpsM.style.background = `azure `;
        quote.style.color = `black `;
        CorpsM.style.border = `1px solid black `;
        theme = 'DARK';
        mode.innerText = `${theme}`;
    }
    else{
        body.style.background = `grey`;
        all.style.background = `grey`;
        Mode.style.background = `grey`;
        Mode.style.color = `whitesmoke`;
        Mode.style.border = `1px solid whitesmoke`;
        CorpsM.style.background = `rgb(255 255 255 / 10%) `;
        quote.style.color = `antiquewhite `;
        CorpsM.style.border = `none `;
        theme = 'LIGHT';
        mode.innerText = `${theme}`;
    }
};


