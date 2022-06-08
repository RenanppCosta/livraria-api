const {Livro} = require("../models") 

const LivrosController = {
    mostrarTodosOsLivros: async (req, res) =>{
        try{
            const livros = await Livro.findAll();
            return res.status(200).json(livros);
        } catch(error){
            console.log(error);
            return res.status(500).json({error});
        }
    },
    mostrarLivro: async (req, res) =>{
         try{
             const {id} = req.params;
             const livro = await Livro.findByPk(id);

             if(!livro){
                 throw new Error;
             }

             return res.status(200).json(livro);
             
         } catch(error){
            console.log(error);
            return res.status(404).json({error, message: "Não encontrei"});
         }
    },
    criar: async (req,res) =>{
        try{
            const {titulo, total_paginas, autor, ano_lancamento, estoque} = req.body;
            const novoLivro = await Livro.create({
                titulo,
                total_paginas,
                autor,
                ano_lancamento,
                estoque
            });

            return res.status(201).json(novoLivro);

        } catch(error){
            console.log(error);
            return res.status(500).json(error);
        }
    }
}
module.exports = LivrosController