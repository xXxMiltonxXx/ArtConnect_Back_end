import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateComunityDto, UpdateComunityDto } from '../../domain/dtos';


export class ComunityController {
  //* DI
  constructor() { }
  public getCommunities = async( req: Request, res: Response ) => {
    const communities = await prisma.comunity.findMany();
    return res.json( communities );
  };




  public getCommunityById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const community = await prisma.comunity.findFirst({
      where: { id }
    });
    
    ( community )
      ? res.json( community )
      : res.status( 404 ).json( { error: `Community with id ${ id } not found` } );
  };




  public createCommunity = async( req: Request, res: Response ) => {
    
    const [error, createComunityDto] = CreateComunityDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const community = await prisma.comunity.create({
      data: createComunityDto!
    });

    res.json( community );

  };



  public updateComunity = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateComunityDto] = UpdateComunityDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const comunity = await prisma.comunity.findFirst({
      where: { id }
    });
    if ( !comunity ) return res.status( 404 ).json( { error: `Movie with id ${ id } not found` } );
    const updatedComunity = await prisma.comunity.update({
      where: { id },
      data: updateComunityDto!.values
    });
    res.json( updatedComunity );
  }


  public deleteComunity = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const comunity = await prisma.comunity.findFirst({
      where: { id }
    });

    if ( !comunity ) return res.status(404).json({ error: `Movie with id ${ id } not found` });
    const deleted = await prisma.comunity.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Comunity with id ${ id } not found` });
  }
}