import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateAnswerDto, UpdateAnswerDto } from '../../domain/dtos';


export class AnswerController {
  //* DI
  constructor() { }
  public getAnswer = async( req: Request, res: Response ) => {
    const answers = await prisma.answer.findMany();
    return res.json( answers );
  };




  public getAnswerById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const answer = await prisma.answer.findFirst({
      where: { id }
    });
    
    ( answer )
      ? res.json( answer )
      : res.status( 404 ).json( { error: `Answer with id ${ id } not found` } );
  };




  public createAnswer = async( req: Request, res: Response ) => {
    
    const [error, createAnswerDto] = CreateAnswerDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const answer = await prisma.answer.create({
      data: createAnswerDto!
    });

    res.json( answer );

  };



  public updateAnswer = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateAnswerDto] = UpdateAnswerDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const answer = await prisma.answer.findFirst({
      where: { id }
    });
    if ( !answer ) return res.status( 404 ).json( { error: `Movie with id ${ id } not found` } );
    const updatedAnswer = await prisma.answer.update({
      where: { id },
      data: updateAnswerDto!.values
    });
    res.json( updatedAnswer );
  }


  public deleteAnswer = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const answer = await prisma.answer.findFirst({
      where: { id }
    });

    if ( !answer ) return res.status(404).json({ error: `Movie with id ${ id } not found` });
    const deleted = await prisma.answer.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Answer with id ${ id } not found` });
  }
}