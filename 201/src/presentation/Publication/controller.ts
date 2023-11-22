import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreatePublicationDto, UpdatePublicationDto } from '../../domain/dtos';


export class PublicationController {
  //* DI
  constructor() { }
  public getPublication = async( req: Request, res: Response ) => {
    const publications = await prisma.publication.findMany();
    return res.json( publications );
  };




  public getPublicationById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const publication = await prisma.publication.findFirst({
      where: { id }
    });
    
    ( publication)
      ? res.json( publication )
      : res.status( 404 ).json( { error: `Publication with id ${ id } not found` } );
  };




  public createPublication = async( req: Request, res: Response ) => {
    
    const [error, createPublicationDto] = CreatePublicationDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const publication = await prisma.publication.create({
      data: createPublicationDto!
    });

    res.json( publication );

  };



  public updatePublication = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updatePublicationDto] = UpdatePublicationDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const publication = await prisma.publication.findFirst({
      where: { id }
    });
    if ( !publication) return res.status( 404 ).json( { error: `Movie with id ${ id } not found` } );
    const updatedPublication = await prisma.publication.update({
      where: { id },
      data: updatePublicationDto!.values
    });
    res.json( updatedPublication );
  }


  public deletePublication = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const publication = await prisma.publication.findFirst({
      where: { id }
    });

    if ( !publication ) return res.status(404).json({ error: `Movie with id ${ id } not found` });
    const deleted = await prisma.publication.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Publication with id ${ id } not found` });
  }
}