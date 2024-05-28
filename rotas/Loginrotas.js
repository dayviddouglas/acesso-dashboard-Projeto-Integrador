const Login = require('../modelo/Loginacesso');

const rotas = require('express').Router();


rotas.post('/create', async (req, res)=>{
   var {login,senha}= req.body;

   if(!login || !senha){
    res.status(400).json({campos: "Preencha todos os campos!"})
   }
   
   const acesso = {
       login, senha
   }
   

   try{
    await Login.create(acesso);
    res.status(201).json({mensagem: "Login criado com sucesso!"})
   }catch(err){
      res.status(400).json({error:err})
   }
})

rotas.get('/',async (req,res)=> {
   try{
    res.status(200).json(await Login.find())
   }catch(err){
    res.status(400).json({error:err})
   }
})

rotas.put('/update/:id', async (req, res)=>{

    const id = req.params.id
     
    var {login,senha}= req.body;

    if(!login || !senha){
      res.status(400).json("Login ou senha não encontrado(s)...")
    }


    const loginNovo={
        login,senha
    }

    try{

        const loginAtualizado = await Login.updateOne({_id:id},loginNovo);
        res.status(200).json({mensagem: "Login Atualizado com sucesso!"})
        
    }catch (err){
        res.status(404).json({erro:err})
    }
})

rotas.delete('/delete/:id', async(req, res)=>{
    const id = req.params.id
    
    try {
        await Login.deleteOne({_id:id})
        res.status(200).json({sucesso: "Login Deletado com sucesso!"})
    } catch (err) {
        res.status(400).json(err)
    }
    
})




module.exports = rotas;

