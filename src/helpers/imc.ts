export type Level = {
    title:string;
    color:string;
    icon:'down' | 'up';
    imc: number[],
    yourImc?:number;
}

export const calculateImc = (height:number, weight:number)=>{
    const imc = weight / (height * height);

    for(let i in levels){
    if(imc >= levels[i].imc[0] && imc < levels[i].imc[1]){
        let levelCopy : Level = {...levels[i]};
        levelCopy.yourImc = parseInt(imc.toFixed(2));

        return levelCopy;
    }
    }
    return null;
}

export const levels:Level[] = [
    {title:'Magreza', color:'silver', icon:'down', imc:[0,18.5]},
    {title:'Normal', color:'green', icon:'up', imc:[18.6,24.9]},
    {title:'Sobrepeso', color:'orange', icon:'down', imc:[25,30]},
    {title:'Obesidade', color:'red', icon:'down', imc:[30.1,99]}
]