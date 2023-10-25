import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateForoDto, UpdateForoDto } from '../../domain/dtos';


export class ForoController {
  //* DI
  constructor() { }
  public getForo = async( req: Request, res: Response ) => {
    const foros = await prisma.foro.findMany();
    return res.json( foros );
  };




  public getForoById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const foro = await prisma.foro.findFirst({
      where: { id }
    });
    
    ( foro )
      ? res.json( foro )
      : res.status( 404 ).json( { error: `Foro with id ${ id } not found` } );
  };




  public createForo = async( req: Request, res: Response ) => {
    
    const [error, createForoDto] = CreateForoDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const foro = await prisma.foro.create({
      data: createForoDto!
    });

    res.json( foro );

  };



  public updateForo = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateForoDto] = UpdateForoDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const foro = await prisma.foro.findFirst({
      where: { id }
    });
    if ( !foro ) return res.status( 404 ).json( { error: `Movie with id ${ id } not found` } );
    const updatedForo = await prisma.foro.update({
      where: { id },
      data: updateForoDto!.values
    });
    res.json( updatedForo );
  }


  public deleteForo = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const foro = await prisma.foro.findFirst({
      where: { id }
    });

    if ( !foro ) return res.status(404).json({ error: `Movie with id ${ id } not found` });
    const deleted = await prisma.foro.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Comunity with id ${ id } not found` });
  }
}