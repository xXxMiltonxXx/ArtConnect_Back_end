import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateCommentDto, UpdateCommentDto } from '../../domain/dtos';


export class CommentController {
  //* DI
  constructor() { }
  public getComment = async( req: Request, res: Response ) => {
    const comments = await prisma.comment.findMany();
    return res.json( comments );
  };




  public getCommentById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const comment = await prisma.comment.findFirst({
      where: { id }
    });
    
    ( comment )
      ? res.json( comment )
      : res.status( 404 ).json( { error: `Comment with id ${ id } not found` } );
  };




  public createComment = async( req: Request, res: Response ) => {
    
    const [error, createCommentDto] = CreateCommentDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const comment = await prisma.comment.create({
      data: createCommentDto!
    });

    res.json( comment );

  };



  public updateComment = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateCommentDto] = UpdateCommentDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const comment = await prisma.comment.findFirst({
      where: { id }
    });
    if ( !comment ) return res.status( 404 ).json( { error: `Movie with id ${ id } not found` } );
    const updatedComment = await prisma.comment.update({
      where: { id },
      data: updateCommentDto!.values
    });
    res.json( updatedComment );
  }


  public deleteComment = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const comment = await prisma.comment.findFirst({
      where: { id }
    });

    if ( !comment ) return res.status(404).json({ error: `Movie with id ${ id } not found` });
    const deleted = await prisma.comment.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Comment with id ${ id } not found` });
  }
}