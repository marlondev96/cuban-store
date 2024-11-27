/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { SubcategoryService } from "../subcategory.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SubcategoryCreateInput } from "./SubcategoryCreateInput";
import { Subcategory } from "./Subcategory";
import { SubcategoryFindManyArgs } from "./SubcategoryFindManyArgs";
import { SubcategoryWhereUniqueInput } from "./SubcategoryWhereUniqueInput";
import { SubcategoryUpdateInput } from "./SubcategoryUpdateInput";
import { ProductFindManyArgs } from "../../product/base/ProductFindManyArgs";
import { Product } from "../../product/base/Product";
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SubcategoryControllerBase {
  constructor(
    protected readonly service: SubcategoryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Subcategory })
  @nestAccessControl.UseRoles({
    resource: "Subcategory",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: SubcategoryCreateInput,
  })
  async createSubcategory(
    @common.Body() data: SubcategoryCreateInput
  ): Promise<Subcategory> {
    return await this.service.createSubcategory({
      data: {
        ...data,

        categories: data.categories
          ? {
              connect: data.categories,
            }
          : undefined,
      },
      select: {
        categories: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Subcategory] })
  @ApiNestedQuery(SubcategoryFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Subcategory",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async subcategories(@common.Req() request: Request): Promise<Subcategory[]> {
    const args = plainToClass(SubcategoryFindManyArgs, request.query);
    return this.service.subcategories({
      ...args,
      select: {
        categories: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Subcategory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Subcategory",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async subcategory(
    @common.Param() params: SubcategoryWhereUniqueInput
  ): Promise<Subcategory | null> {
    const result = await this.service.subcategory({
      where: params,
      select: {
        categories: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Subcategory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Subcategory",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: SubcategoryUpdateInput,
  })
  async updateSubcategory(
    @common.Param() params: SubcategoryWhereUniqueInput,
    @common.Body() data: SubcategoryUpdateInput
  ): Promise<Subcategory | null> {
    try {
      return await this.service.updateSubcategory({
        where: params,
        data: {
          ...data,

          categories: data.categories
            ? {
                connect: data.categories,
              }
            : undefined,
        },
        select: {
          categories: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Subcategory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Subcategory",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSubcategory(
    @common.Param() params: SubcategoryWhereUniqueInput
  ): Promise<Subcategory | null> {
    try {
      return await this.service.deleteSubcategory({
        where: params,
        select: {
          categories: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/products")
  @ApiNestedQuery(ProductFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  async findProducts(
    @common.Req() request: Request,
    @common.Param() params: SubcategoryWhereUniqueInput
  ): Promise<Product[]> {
    const query = plainToClass(ProductFindManyArgs, request.query);
    const results = await this.service.findProducts(params.id, {
      ...query,
      select: {
        category: {
          select: {
            id: true,
          },
        },

        colors: true,
        createdAt: true,
        description: true,

        discountCuppon: {
          select: {
            id: true,
          },
        },

        discountPrice: true,
        id: true,
        image1: true,
        image2: true,
        image3: true,
        images: true,

        order: {
          select: {
            id: true,
          },
        },

        subcategory: {
          select: {
            id: true,
          },
        },

        title: true,
        titlePrice: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/products")
  @nestAccessControl.UseRoles({
    resource: "Subcategory",
    action: "update",
    possession: "any",
  })
  async connectProducts(
    @common.Param() params: SubcategoryWhereUniqueInput,
    @common.Body() body: ProductWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      products: {
        connect: body,
      },
    };
    await this.service.updateSubcategory({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/products")
  @nestAccessControl.UseRoles({
    resource: "Subcategory",
    action: "update",
    possession: "any",
  })
  async updateProducts(
    @common.Param() params: SubcategoryWhereUniqueInput,
    @common.Body() body: ProductWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      products: {
        set: body,
      },
    };
    await this.service.updateSubcategory({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/products")
  @nestAccessControl.UseRoles({
    resource: "Subcategory",
    action: "update",
    possession: "any",
  })
  async disconnectProducts(
    @common.Param() params: SubcategoryWhereUniqueInput,
    @common.Body() body: ProductWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      products: {
        disconnect: body,
      },
    };
    await this.service.updateSubcategory({
      where: params,
      data,
      select: { id: true },
    });
  }
}
