import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateResponseDto, UpdateResponseDto } from '../../domain/dtos';


export class ResponseController {
  //* DI
  constructor() { }
  public getResponses = async( req: Request, res: Response ) => {
    const responses = await prisma.response.findMany();
    return res.json( responses );
  };




  public getResponseById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const response = await prisma.response.findFirst({
      where: { id }
    });
    
    ( response )
      ? res.json( response )
      : res.status( 404 ).json( { error: `Community with id ${ id } not found` } );
  };




  public createResponse = async( req: Request, res: Response ) => {
    
    const [error, createResponseDto] = CreateResponseDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const response = await prisma.response.create({
      data: createResponseDto!
    });

    res.json( response );

  };



  public updateResponse = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateResponseDto] = UpdateResponseDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const response = await prisma.response.findFirst({
      where: { id }
    });
    if ( !response) return res.status( 404 ).json( { error: `Movie with id ${ id } not found` } );
    const updatedResponse = await prisma.response.update({
      where: { id },
      data: updateResponseDto!.values
    });
    res.json( updatedResponse );
  }


  public deleteResponse = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const response = await prisma.response.findFirst({
      where: { id }
    });

    if ( !response ) return res.status(404).json({ error: `Movie with id ${ id } not found` });
    const deleted = await prisma.response.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Response with id ${ id } not found` });
  }
}