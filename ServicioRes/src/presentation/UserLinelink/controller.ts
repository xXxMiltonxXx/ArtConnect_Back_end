import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateUserLineLinkDto, UpdateUserLineLinkDto } from '../../domain/dtos';


export class UserLineLinkController {
  //* DI
  constructor() { }
  public getUserLineLink = async( req: Request, res: Response ) => {
    const userLineLink = await prisma.user_line_link.findMany();
    return res.json( userLineLink );
  };




  public getUserLineLinkById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const userLineLink = await prisma.user_line_link.findFirst({
      where: { id }
    });
    
    ( userLineLink )
      ? res.json( userLineLink)
      : res.status( 404 ).json( { error: `UserLineLink with id ${ id } not found` } );
  };




  public createUserLineLink = async( req: Request, res: Response ) => {
    
    const [error, createUserLineLinkDto] = CreateUserLineLinkDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const userLineLink = await prisma.user_line_link.create({
      data: createUserLineLinkDto!
    });

    res.json( userLineLink );

  };



  public updateUserLineLink = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateUserLineLinkDto] = UpdateUserLineLinkDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const userLineLink = await prisma.user_line_link.findFirst({
      where: { id }
    });
    if ( !userLineLink ) return res.status( 404 ).json( { error: `Movie with id ${ id } not found` } );
    const updatedUserLineLink = await prisma.user_line_link.update({
      where: { id },
      data: updateUserLineLinkDto!.values
    });
    res.json( updatedUserLineLink );
  }


  public deleteUserLineLink = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const userLineLink = await prisma.user_line_link.findFirst({
      where: { id }
    });

    if ( !userLineLink ) return res.status(404).json({ error: `Movie with id ${ id } not found` });
    const deleted = await prisma.user_line_link.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `UserLineLink with id ${ id } not found` });
  }
}