import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateReactDto, UpdateReactDto } from '../../domain/dtos';


export class ReactController {
  //* DI
  constructor() { }
  public getReact = async( req: Request, res: Response ) => {
    const reacts = await prisma.react.findMany();
    return res.json( reacts );
  };




  public getReactById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const react = await prisma.react.findFirst({
      where: { id }
    });
    
    ( react )
      ? res.json( react )
      : res.status( 404 ).json( { error: `React with id ${ id } not found` } );
  };




  public createReact= async( req: Request, res: Response ) => {
    
    const [error, createReactDto] = CreateReactDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const react = await prisma.react.create({
      data: createReactDto!
    });

    res.json( react );

  };



  public updateReact = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateReactDto] = UpdateReactDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const react = await prisma.react.findFirst({
      where: { id }
    });
    if ( !react ) return res.status( 404 ).json( { error: `Movie with id ${ id } not found` } );
    const updatedReact = await prisma.react.update({
      where: { id },
      data: updateReactDto!.values
    });
    res.json( updatedReact);
  }


  public deleteReact = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const react = await prisma.react.findFirst({
      where: { id }
    });

    if ( !react ) return res.status(404).json({ error: `Movie with id ${ id } not found` });
    const deleted = await prisma.react.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `React with id ${ id } not found` });
  }
}