export function validacao(palavra){
    if(!palavra){
  
        return {
            ok:false,
            erro:'vazio'
        }
    }
    
    if(typeof palavra!='string'){
        return {
            ok:false,
            erro:'tipo'
   }
}
return {ok:true}
} {}


