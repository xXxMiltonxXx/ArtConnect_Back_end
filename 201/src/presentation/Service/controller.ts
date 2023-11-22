import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateServiceDto, UpdateServiceDto } from '../../domain/dtos';


export class ServiceController {
  //* DI
  constructor() { }
  public getServices = async( req: Request, res: Response ) => {
    const services = await prisma.comunity.findMany();
    return res.json( services );
  };




  public getServiceById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const service = await prisma.service.findFirst({
      where: { id }
    });
    
    ( service )
      ? res.json( service)
      : res.status( 404 ).json( { error: `Service with id ${ id } not found` } );
  };




  public createService = async( req: Request, res: Response ) => {
    
    const [error, createServiceDto] = CreateServiceDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const service = await prisma.service.create({
      data: createServiceDto!
    });

    res.json( service );

  };



  public updateService = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateServiceDto] = UpdateServiceDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const service = await prisma.service.findFirst({
      where: { id }
    });
    if ( !service ) return res.status( 404 ).json( { error: `Movie with id ${ id } not found` } );
    const updatedService = await prisma.service.update({
      where: { id },
      data: updateServiceDto!.values
    });
    res.json( updatedService );
  }


  public deleteService = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const service = await prisma.service.findFirst({
      where: { id }
    });

    if ( !service ) return res.status(404).json({ error: `Movie with id ${ id } not found` });
    const deleted = await prisma.service.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Service with id ${ id } not found` });
  }
}