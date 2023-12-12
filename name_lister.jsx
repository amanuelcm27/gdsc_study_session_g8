import "./box.css"
function Greeting () {
    const names = ['amanuel','']
    return (
        <p className="boxed">
               
        </p>
    )
}

const NameList = () => {
  const names = ["Afomia Dugassa",
    "Agumas Desalew",
   " Alazar Gebre Habtemariam ",
   " Alem Ayalew Yimer ",
   " Amanuel Addisu Belay",
   " Amanuel firew ",
    "Amanuel Mandefrow Reta",
   " Amanuel Wubishet Bezabih",
   " Aminat Muhammed",
    "Amir mohammed adem",
    "Amir seife ali",
   " AMMAR MOHAMMED YASIN ",
   " Anania Girma Senbeta",
   ' Andinet Dereje',
   ' Anteneh Addisu',
   " Anteneh Getnet Tirfu",
   ' Ariyam Yilma Eshete'
   
  ];

  return (
    <ul>
      {names.map((name,index)=> <li id={index}>{name}</li>)}
    </ul>
  );
};

export default NameList;
