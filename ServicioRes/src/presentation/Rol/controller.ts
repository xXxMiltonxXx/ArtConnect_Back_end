import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateRolDto, UpdateRolDto } from '../../domain/dtos';


export class RolController {
  //* DI
  constructor() { }
  public getRoles = async( req: Request, res: Response ) => {
    const roles = await prisma.rol.findMany();
    return res.json( roles );
  };




  public getRolById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const rol = await prisma.rol.findFirst({
      where: { id }
    });
    
    ( rol )
      ? res.json( rol )
      : res.status( 404 ).json( { error: `Rol with id ${ id } not found` } );
  };




  public createRol = async( req: Request, res: Response ) => {
    
    const [error, createRolDto] = CreateRolDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const rol = await prisma.rol.create({
      data: createRolDto!
    });

    res.json( rol );

  };



  public updateRol = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateRolDto] = UpdateRolDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const rol = await prisma.rol.findFirst({
      where: { id }
    });
    if ( !rol ) return res.status( 404 ).json( { error: `Movie with id ${ id } not found` } );
    const updatedRol = await prisma.rol.update({
      where: { id },
      data: updateRolDto!.values
    });
    res.json( updatedRol );
  }


  public deleteRol = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const rol = await prisma.rol.findFirst({
      where: { id }
    });

    if ( !rol ) return res.status(404).json({ error: `Movie with id ${ id } not found` });
    const deleted = await prisma.rol.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Rol with id ${ id } not found` });
  }
}