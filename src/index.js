module.exports = function solveEquation(equation) {
  // your implementation
  var mass=equation.split(' ');

if(mass[3]=='-') mass[4]*=-1;
if(mass[7]=='-') mass[8]*=-1;

/*for(let i=0; i<mass.lenght; i++) {
  if(mass[i]=='-') 
  mass[i+1]=mass[i+1]*(-1);
}*/

var Dis=mass[4]*mass[4]-(4*mass[0]*mass[8]);
var x1=Math.round(((-1)*mass[4]+Math.sqrt(Dis))/(2*mass[0]));
var x2=Math.round(((-1)*mass[4]-Math.sqrt(Dis))/(2*mass[0]));

var Res=[];
Res[0]=x2;
Res[1]=x1;
/*if (x1>=x2){
    Res[0]=x2;
    Res[1]=x1;
}*/
return Res.sort((a,b) => a-b);

}