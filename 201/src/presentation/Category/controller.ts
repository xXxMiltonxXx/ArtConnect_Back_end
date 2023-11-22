import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateCategoryDto, UpdateCategoryDto } from '../../domain/dtos';


export class CategoryController {
  //* DI
  constructor() { }
  public getCategory = async( req: Request, res: Response ) => {
    const category = await prisma.category.findMany();
    return res.json( category );
  };




  public getCategoryById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const category = await prisma.category.findFirst({
      where: { id }
    });
    
    ( category )
      ? res.json( category )
      : res.status( 404 ).json( { error: `Category with id ${ id } not found` } );
  };




  public createCategory = async( req: Request, res: Response ) => {
    
    const [error, createCategoryDto] = CreateCategoryDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const category = await prisma.category.create({
      data: createCategoryDto!
    });

    res.json( category );

  };



  public updateCategory = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateCategoryDto] = UpdateCategoryDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const category = await prisma.category.findFirst({
      where: { id }
    });
    if ( !category ) return res.status( 404 ).json( { error: `Movie with id ${ id } not found` } );
    const updatedCategory = await prisma.category.update({
      where: { id },
      data: updateCategoryDto!.values
    });
    res.json( updatedCategory);
  }


  public deleteCategory = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const category = await prisma.category.findFirst({
      where: { id }
    });

    if ( !category ) return res.status(404).json({ error: `Movie with id ${ id } not found` });
    const deleted = await prisma.category.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Category with id ${ id } not found` });
  }
}