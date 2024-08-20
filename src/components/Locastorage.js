const getstorejob =()=>{
    const storejob = localStorage.getItem('storejob');
    if(storejob){
        return JSON.parse(storejob);
    }
    return [];
}
const storejobApplication =(id)=>{
    const storejob = getstorejob();
    const exists = storejob.find(jobid=> jobid ===id)
    if(!exists){
        storejob.push(id)
        localStorage.setItem('storejob', JSON.stringify(storejob))
    }
}
export {storejobApplication, getstorejob} 