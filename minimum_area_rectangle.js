function minArea(x,y,k){
    x=x.sort(function(a, b) {
        return a - b;
      })
    console.log("x:",x);
    y= y.sort(function(a, b) {
        return a - b;
      });
      console.log("y:",y);
    let l = x.length-1;
    let xtmp=0,xtmp2=0,ytmp=0,ytmp2=0;
    if (l==k){
        
    }

    for (let i=0; i<l-k+1 ; i++)
    {
        xtmp= x[k-1+i] - x[i];
        if(xtmp>xtmp2)
        {
            xtmp2=xtmp;
        }
        console.log("xtmp2:",xtmp2);
    }
    for (let i=0; i<l-k+1 ; i++)
    {
        ytmp= x[k-1+i] - x[i];
        if(ytmp>ytmp2)
        {
            ytmp2=ytmp;
        }
        console.log("ytmp2:",ytmp2);
    }

	if((xtmp2)<(ytmp2)){
        console.log("max-min:",(xtmp2));
		return ((xtmp2)*(xtmp2));
    }
	else{
        console.log("max-min:",(ytmp2));
        return ((ytmp2)*(ytmp2));
    }
	
}	

let x = [1 ,8 ,7 ,9,10];
let y = [1 ,10 ,7,9,11];
let k=5;
let result = minArea(x,y,k);
console.log("The result is:",result);

