import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateFollowerDto, UpdateFollowerDto } from '../../domain/dtos';


export class FollowerController {

  //* DI
  constructor() { }


  public getFollowers = async( req: Request, res: Response ) => {
    const followers = await prisma.follower.findMany();
    return res.json( followers );
  };

  public getFollowerById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const follower = await prisma.follower.findFirst({
      where: { id }
    });
    
    ( follower )
      ? res.json( follower )
      : res.status( 404 ).json( { error: `follower with id ${ id } not found` } );
  };

  public createFollower = async( req: Request, res: Response ) => {
    
    const [error, createFollowerDto] = CreateFollowerDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const follower = await prisma.follower.create({
      data: createFollowerDto!
    });

    res.json( follower );

  };

  public updateFollower = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateFollowerDto] = UpdateFollowerDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const follower = await prisma.follower.findFirst({
      where: { id }
    });

    if ( !follower ) return res.status( 404 ).json( { error: `Follower with id ${ id } not found` } );

    const updatedFollower = await prisma.follower.update({
      where: { id },
      data: updateFollowerDto!.values
    });
  
    res.json( updatedFollower );

  }


  public deleteFollower = async(req:Request, res: Response) => {
    const id = +req.params.id;

    const follower = await prisma.follower.findFirst({
      where: { id }
    });

    if ( !follower ) return res.status(404).json({ error: `Follower with id ${ id } not found` });

    const deleted = await prisma.follower.delete({
      where: { id }
    });

    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Follower with id ${ id } not found` });
    

  }
  


}