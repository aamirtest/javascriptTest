var x:number=1;

while(x<=10){
    console.log(x)
    x+=2;
}

var y=2;
do{
    console.log(y)
    y+=2;
}while(y<=20)

for(var z:number=10; z>0; z--){
    if(z==5)
    continue;
    console.log(z)
}