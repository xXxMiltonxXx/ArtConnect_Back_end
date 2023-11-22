import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateLinkDto, UpdateLinkDto } from '../../domain/dtos';


export class LinkController {
  //* DI
  constructor() { }
  public getLink = async( req: Request, res: Response ) => {
    const links = await prisma.link.findMany();
    return res.json( links );
  };




  public getLinkById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const link = await prisma.link.findFirst({
      where: { id }
    });
    
    ( link )
      ? res.json( link )
      : res.status( 404 ).json( { error: `Link with id ${ id } not found` } );
  };




  public createLink = async( req: Request, res: Response ) => {
    
    const [error, createLinkDto] = CreateLinkDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const link = await prisma.link.create({
      data: createLinkDto!
    });

    res.json( link );

  };



  public updateLink = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateLinkDto] = UpdateLinkDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const link = await prisma.link.findFirst({
      where: { id }
    });
    if ( !link ) return res.status( 404 ).json( { error: `Movie with id ${ id } not found` } );
    const updatedLink = await prisma.link.update({
      where: { id },
      data: updateLinkDto!.values
    });
    res.json( updatedLink );
  }


  public deleteLink = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const link = await prisma.link.findFirst({
      where: { id }
    });

    if ( !link ) return res.status(404).json({ error: `Movie with id ${ id } not found` });
    const deleted = await prisma.link.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Link with id ${ id } not found` });
  }
}