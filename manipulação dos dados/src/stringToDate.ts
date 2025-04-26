
export default function stringToDate(texto:string):Date{
  const [date,time]= texto.split(" ");
  const [dia,mes,ano]=date.split('/').map(Number);
  const [hour,min]=time.split(':').map(Number)

  return new Date(ano,mes-1,dia,hour,min);
  //console.log(dateFinal, time)
  
}