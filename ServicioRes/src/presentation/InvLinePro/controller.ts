import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateInvLineProDto, UpdateInvLineProDto } from '../../domain/dtos';


export class InvLineProController {
  //* DI
  constructor() { }
  public getInvLinePro = async( req: Request, res: Response ) => {
    const invLinePro = await prisma.inv_Line_Pro.findMany();
    return res.json( invLinePro );
  };




  public getInvLineProById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const invLinePro = await prisma.inv_Line_Pro.findFirst({
      where: { id }
    });
    
    ( invLinePro )
      ? res.json( invLinePro )
      : res.status( 404 ).json( { error: `Community with id ${ id } not found` } );
  };




  public createInvLinePro = async( req: Request, res: Response ) => {
    
    const [error, createInvLineProDto] = CreateInvLineProDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const invLinePro = await prisma.inv_Line_Pro.create({
      data: createInvLineProDto!
    });

    res.json( invLinePro );

  };



  public updateInvLinePro = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateInvLineProDto] = UpdateInvLineProDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const invLinePro = await prisma.inv_Line_Pro.findFirst({
      where: { id }
    });
    if ( !invLinePro ) return res.status( 404 ).json( { error: `Movie with id ${ id } not found` } );
    const updatedInvLinePro = await prisma.inv_Line_Pro.update({
      where: { id },
      data: updateInvLineProDto!.values
    });
    res.json( updatedInvLinePro );
  }


  public deleteInvLinePro = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const invLinePro = await prisma.inv_Line_Pro.findFirst({
      where: { id }
    });

    if ( !invLinePro) return res.status(404).json({ error: `Movie with id ${ id } not found` });
    const deleted = await prisma.inv_Line_Pro.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `InvLinePro with id ${ id } not found` });
  }
}