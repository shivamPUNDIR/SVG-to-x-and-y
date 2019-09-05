//quadatric berzier

let quadatricBerzier = (x = [], y = [], k = 0.05) => {
    /*
     */

    let i = 0;

    for (let t = 0; t <= 1; t += k, i++) {
        x[i] = Math.pow(1 - t, 2) * x[0] + 2 * (1 - t) * t * x[1] + Math.pow(t, 2) * x[2];
        y[i] = Math.pow(1 - t, 2) * y[0] + 2 * (1 - t) * t * y[1] + Math.pow(t, 2) * y[2];;
    }
    if (x.length === 3 && y.length === 3) {
        return {
            xCoords: x,
            yCoords: y
        }
    }
    else {
        console.log("Enter correct parameters");
    }
}
//cubic berzier
let cubicBerzier = (x = [], y = [], k = 0.05) => {
    let i = 0;

    for (let t = 0; t <= 1; t += k, i++) {
        x[i] = Math.pow(1 - t, 3) * x[0] + 3 * Math.pow(1 - t, 2) * t * x[1] + 3 * (1 - t) * Math.pow(t, 2) * x[2] + Math.pow(t, 3) * x[3];
        y[i] = Math.pow(1 - t, 3) * y[1] + 3 * Math.pow(1 - t, 2) * t * y[1] + 3 * (1 - t) * Math.pow(t, 2) * y[2] + Math.pow(t, 3) * y[3];
    }
    if (x.length === 4 && y.length === 4) {
        return {
            xCoords: x,
            yCoords: y
        }
    }
    else {
        console.log("Enter correct parameters");
    }
}
//Move
let M = (x1, y1) => {
    return {
        x: [x1],
        y: [y1]
    }
}
//Line
let L = (x = [], y = [],k=0.5) => {
    
    
    let t=0;
    let x1=x[0];
    let x2=x[1];
    let y1=y[0];
    let y2=y[1];
    let slope=(y2-y1)/(x2-x1);
    console.log(slope);
    for(let i=Math.min(x1,x2);i<=Math.max(x1,x2);i+=k,t++){
        x[t]=i;   
        y[t]=(slope*(x[t]-x1))+y1;
    }
   
    console.log(x,y);
  // }
}
let H=(x = [], y = [],k=0.5)=>{
    let x1=x[0];
    let x2=x[1];
    let y1=y[0];
    let y2=y[1];
    let t=0;
    for(let i=Math.min(x1,x2);i<=Math.max(x1,x2);i+=k,t++){
        x[t]=i;   
        y[t]=y[0];
    }
    console.log(x,y)
}
let V=(x = [], y = [],k=0.5)=>{
    let x1=x[0];
    let x2=x[1];
    let y1=y[0];
    let y2=y[1];
    let t=0;
    for(let i=Math.min(y1,y2);i<=Math.max(y1,y2);i+=k,t++){
        y[t]=i;   
        x[t]=x[0];
    }
    console.log(x,y)
}

V([9,9],[10,-20])
